import UserModel from '../models/User'
import UserSetting from '../models/UserSetting'
import UserMedia from '../models/UserMedia'
import UserAilment from '../models/UserAilment'
import TherapistSetting from '../models/TherapistSetting'
import { Op } from 'sequelize'
import { ErrorHandler } from '../error'
import { getAilmentName, getMediaName } from '../dataProvider'
import { CreateTherapist } from '../types/UserRequest'
import { getUserData } from '../transformers/User'


export default class TherapistService 
{
    protected userModel: typeof UserModel
    protected userSettingModel: typeof UserSetting
    userMediaModel: typeof UserMedia
    userAilmentModel: typeof UserAilment

    THERAPIST_TYPE = 'therapist'

    public constructor() {
        this.userModel = UserModel
        this.userSettingModel = UserSetting
        this.userAilmentModel = UserAilment
        this.userMediaModel = UserMedia
    }

    public async getMatchingTherapists(userId: string) {
        try {
            const userSettings = await this.userSettingModel.findOne({where: {userId}})
            const userAilments = await this.userAilmentModel.findAll({where: {userId}})
            const userMedia = await this.userMediaModel.findAll({where: {userId}})
            const therapists = await this.userModel.findAll({ include: [{
                model: TherapistSetting,
                where: {
                    ageFrom: {
                        [Op.lte]: [userSettings?.toJSON().age]
                    },
                    ageTo: {
                        [Op.gte]: [userSettings?.toJSON().age]
                    },
                    couplesTherapy: userSettings?.toJSON().couplesTherapy,
                    religiousTherapy: userSettings?.toJSON().religiousTherapy
                } }, {
                    model: UserMedia,
                    where: {
                        mediaKey: {
                            [Op.in]: userMedia.map((media:any) => media.toJSON().mediaKey)
                        }
                    }
                },
                {
                    model: UserAilment,
                    where: {
                        ailmentKey: {
                            [Op.in]: userAilments.map((ailment:any) => ailment.toJSON().ailmentKey)
                        }
                    }
                }
            
            ], 
                where: {
                    userType: this.THERAPIST_TYPE,
                } 
            });
    
            return therapists.map(therapist => {
                const therapistJson = therapist.toJSON()
                const { email, password, createdAt, updatedAt, media, ailments, ...otherTherapistDetails } = therapistJson
                const {id, userId, ...otherSettings} = otherTherapistDetails.therapistSetting
                otherTherapistDetails.therapistSetting = otherSettings
                return otherTherapistDetails
            })

        } catch (err) {
            return new ErrorHandler(500, 'Internal Server Error')
        }
    }

    public async getTherapist(id: string) {
        try {
            const therapist = await this.userModel.findOne({ where: { id: parseInt(id), 'userType': this.THERAPIST_TYPE}, include: [{
                model: TherapistSetting}, 
                {model: UserMedia}, 
                {model: UserAilment}] })
        
                if (therapist === null) {
                    return false
                }
                const therapistJson = therapist.toJSON()
                const { email, password, createdAt, updatedAt, ailments, media, ...otherTherapistDetails } = therapistJson
                const updatedAilments = ailments.map((ailment: any) => {
                    const ailmentName = getAilmentName(ailment.ailmentKey)
                    ailment.name = ailmentName
                    return ailment
                })
                const updatedMedia = media.map((medium: any) => {
                    const mediaName = getMediaName(medium.mediaKey)
                    medium.name = mediaName
                    return medium
                })
                otherTherapistDetails.ailments = updatedAilments
                otherTherapistDetails.media = updatedMedia
                return otherTherapistDetails
        } catch (err) {
            console.log(err)
            return new ErrorHandler(500, 'Internal server error')
        }
    }

    public async createTherapist(details: CreateTherapist): Promise<any>
    {
       try {
            const therapist = await this.userModel.create({userType: this.THERAPIST_TYPE, ...details})
            const therapistJson = getUserData(therapist.toJSON())
            return therapistJson
       } catch(err) {
            throw new ErrorHandler(500, 'Internal server error')
       }

    }
}