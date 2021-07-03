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
        const usersJson = users.map(user => {
           const userJson = user.toJSON()
           const {password, updatedAt, ...otherUserDetails} = userJson
           return otherUserDetails
        })
        return usersJson
    }

    public async createUser(userDetails: CreateUser): Promise<any> {
        const settings = userDetails.settings
        const {media, ...otherSettings} = settings
        const {ailments, ...userSettings} = otherSettings
        let user = this.userModel.build(userDetails)
        user = await user.save()
        user = user.toJSON()
        const {password, ...userData} = user
        
        const savedSettings = await this.userSettingModel.create({userId: userData.id, ...userSettings})
        const {id, userId, ...settingsToReturn} = savedSettings.toJSON()
        const savedMedia = this.userMediaModel.bulkCreate(media.map(medium => ({ mediaKey: medium, userId : userData.id})))
        const savedAilments = await this.userAilmentModel.bulkCreate(ailments.map(ailment => ({ ailmentKey: ailment, userId : userData.id})))

        const token = this.generateAccessToken(userData.id)
        return {
            token, 
            ...userData, 
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

    public async userExists(email: string, password:string = ''): Promise<any | boolean> {
        const  userExists = await this.userModel.findOne({ where : {email} })
        if (userExists) {
            if (password !== '') {
                const isAMatch = userExists.validPassword(password)
                if (!isAMatch) {
                    return false
                }
            }

            return userExists
        }
        return false
    }

    public async loginUser({email, password} : {email: string, password:string}): Promise<any> {
        const user = await this.userExists(email, password)
        if (user !== false) {
            const {id, password, updatedAt, ...userData} = user.toJSON()
            const token = this.generateAccessToken(userData.id)
            
            return {token, userData}
        }

        return null
    }
}