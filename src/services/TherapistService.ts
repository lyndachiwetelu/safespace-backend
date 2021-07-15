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
import UserService from './UserService'
import { CreateTherapistSetting } from '../types/TherapistRequest'


export default class TherapistService 
{
    protected userModel: typeof UserModel
    protected userSettingModel: typeof UserSetting
    userMediaModel: typeof UserMedia
    userAilmentModel: typeof UserAilment

    THERAPIST_TYPE = 'therapist'
    userService: UserService
    therapistSettingModel: typeof TherapistSetting

    public constructor() {
        this.userModel = UserModel
        this.userSettingModel = UserSetting
        this.userAilmentModel = UserAilment
        this.userMediaModel = UserMedia
        this.therapistSettingModel = TherapistSetting
        this.userService = new UserService()
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
            const token = this.userService.generateAccessToken(therapistJson.id)
            return { token, therapist:therapistJson }
       } catch(err) {
            throw new ErrorHandler(500, 'Internal server error')
       }
    }

    public async loginTherapist(body: any) {
        try {
            const user = await this.userService.userExists(body.email, body.password)
            if (user !== false) {
                const userData = getUserData(user.toJSON())
                if (userData.userType !== this.THERAPIST_TYPE) {
                    return null
                }
                const token = this.userService.generateAccessToken(userData.id) 
                return {token, therapist: userData}
            }
    
            return null
        } catch (err) {
            throw new ErrorHandler(500, 'Internal Server Error')
        }
    }

    public async saveSetting(settings: CreateTherapistSetting) {
        try {
            const { name, media, ailments, ...otherSettings} = settings
            const updatedUser = await this.userModel.update({name}, { where: {id: otherSettings.userId}})
            await this.userMediaModel.destroy({where:{userId: otherSettings.userId}})
            await this.userAilmentModel.destroy({where:{userId: otherSettings.userId}})
            const savedMedia = await this.userMediaModel.bulkCreate(media.map(medium => ({ mediaKey: medium, userId : otherSettings.userId})))
            const savedAilments = await this.userAilmentModel.bulkCreate(ailments.map(ailment => ({ ailmentKey: ailment, userId : otherSettings.userId})))
            await this.therapistSettingModel.destroy({where:{userId: otherSettings.userId}})

            const setting = await this.therapistSettingModel.create(otherSettings)
            const settingJson = setting.toJSON()
            settingJson.media =  savedMedia.map(medium => {
                medium = medium.toJSON()
                return {mediaKey:medium.mediaKey, name: getMediaName(medium.mediaKey)}
               })
            settingJson.ailments = savedAilments.map(ailment => {
                ailment = ailment.toJSON()
                return {ailmentKey:ailment.ailmentKey, name: getAilmentName(ailment.ailmentKey)}
              })
            const therapist = await this.userModel.findOne({where: {id:otherSettings.userId}})
            const therapistJson = getUserData(therapist?.toJSON())
            therapistJson.setting = settingJson
            return therapistJson
        } catch (err) {
            throw new ErrorHandler(500, 'Internal Server Error')
        }
    }

    public async getSetting(userId: number): Promise<any> {
        try {
            let media = await this.userMediaModel.findAll({where: {userId}})
            let ailments = await this.userAilmentModel.findAll({where: {userId}})
            let therapist = await this.userService.userExists('', '', userId)
            let therapistSetting: TherapistSetting | null = await this.therapistSettingModel.findOne({where: {userId}})
            therapist  = therapist.toJSON()
            const therapistSettingJson = therapistSetting?.toJSON() 
            if (!therapistSettingJson) {
                return null
            }
            media = media.map((medium:any) => {
                const mediumJson = medium.toJSON()
                mediumJson.name = getMediaName(mediumJson.mediaKey)
                return mediumJson
            })

            ailments = ailments.map((ailment:any) => {
                const ailmentJson = ailment.toJSON()
                ailmentJson.name = getAilmentName(ailmentJson.ailmentKey)
                return ailmentJson
            })

            therapistSettingJson.name = therapist.name
            therapistSettingJson.media = media
            therapistSettingJson.ailments = ailments

            return therapistSettingJson

        } catch (err) {
            throw new ErrorHandler(500, 'Internal server error')
        }
    }

    public async therapistExists(userId: number): Promise<boolean> {
        const userExists = await this.userService.userExists('', '', userId)
        if (userExists) {
            const user = userExists.toJSON()
            if (user.userType !== this.THERAPIST_TYPE) {
                return false
            }

            return  true
        }

        return userExists
    }
}