import UserModel from '../models/User'
import UserSetting from '../models/UserSetting'
import UserMedia from '../models/UserMedia'
import UserAilment from '../models/UserAilment'
import TherapySetting from '../models/TherapistSetting'
import { Op } from 'sequelize'
import { ErrorHandler } from '../error'


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
                model: TherapySetting,
                where: {
                    ageFrom: {
                        [Op.lte]: [userSettings?.toJSON().age]
                    },
                    ageTo: {
                        [Op.gte]: [userSettings?.toJSON().age]
                    },
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
    
            return therapists.map(therapist => therapist.toJSON())

        } catch (err) {
            return new ErrorHandler(500, 'Internal Server Error')
        }

    }
}