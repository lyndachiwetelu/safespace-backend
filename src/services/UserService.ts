import UserModel from '../models/User'
import { CreateUser, UserResponse } from '../types/UserRequest'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import UserSetting from '../models/UserSetting'
import UserMedia from '../models/UserMedia'
import UserAilment from '../models/UserAilment'
import { getAilmentName, getMediaName } from '../dataProvider'

const tokenSecret: string = process.env.TOKEN_SECRET || 'NOT_SECURE'

dotenv.config()

export default class UserService 
{
    protected userModel: typeof UserModel
    protected userSettingModel: typeof UserSetting
    userMediaModel: typeof UserMedia
    userAilmentModel: typeof UserAilment

    public constructor() {
        this.userModel = UserModel
        this.userSettingModel = UserSetting
        this.userAilmentModel = UserAilment
        this.userMediaModel = UserMedia
    }

    private generateAccessToken(userId: string) {
        return jwt.sign({userId}, tokenSecret, { expiresIn: '7200s' });
    }

    public async getAllUsers() {
        const users = await this.userModel.findAll()
        const usersJson = users.map(user => user.toJSON())
        return usersJson
    }

    public async createUser(userDetails: CreateUser): Promise<any> {
        const settings = userDetails.settings
        const {media, ...otherSettings} = settings
        const {ailments, ...userSettings} = otherSettings
        let user = this.userModel.build(userDetails)
        user = await user.save()
        user = user.toJSON()
        
        const savedSettings = await this.userSettingModel.create({userId: user.id, ...userSettings})
        const {id, userId, ...settingsToReturn} = savedSettings.toJSON()
        const savedMedia = this.userMediaModel.bulkCreate(media.map(medium => ({ mediaKey: medium, userId : user.id})))
        const savedAilments = await this.userAilmentModel.bulkCreate(ailments.map(ailment => ({ ailmentKey: ailment, userId : user.id})))

        const token = this.generateAccessToken(user.id)
        return {
            token, 
            ...user, 
            settings: {
                 media: (await savedMedia).map(medium => {
                     medium = medium.toJSON()
                     return {mediaKey:medium.mediaKey, name: getMediaName(medium.mediaKey)}
                    }),
                  ailments: savedAilments.map(ailment => {
                      ailment = ailment.toJSON()
                      return {ailmentKey:ailment.ailmentKey, name: getAilmentName(ailment.ailmentKey)}
                    }), 
                  ...settingsToReturn
            }
        }
    }

    public async userWithEmailExists(email: string): Promise<boolean> {
        const  userExists = await this.userModel.findOne({ where : {email} })
        return userExists === null ? false : true
    }
}