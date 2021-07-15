import UserModel from '../models/User'
import { CreateUser } from '../types/UserRequest'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import UserSetting from '../models/UserSetting'
import UserMedia from '../models/UserMedia'
import UserAilment from '../models/UserAilment'
import { getAilmentName, getMediaName } from '../dataProvider'
import { ErrorHandler } from '../error'


dotenv.config()

const tokenSecret: string = process.env.TOKEN_SECRET || 'NOT_SECURE'

export default class UserService 
{
    protected userModel: typeof UserModel
    protected userSettingModel: typeof UserSetting
    userMediaModel: typeof UserMedia
    userAilmentModel: typeof UserAilment

    PATIENT_TYPE = 'patient'

    public constructor() {
        this.userModel = UserModel
        this.userSettingModel = UserSetting
        this.userAilmentModel = UserAilment
        this.userMediaModel = UserMedia
    }

    public generateAccessToken(userId: string) {
        return jwt.sign({userId}, tokenSecret, { expiresIn: '14400s' });
    }

    public async getAllUsers() {
        try {
            const users = await this.userModel.findAll()
            const usersJson = users.map(user => {
            const userJson = user.toJSON()
            const {password, updatedAt, ...otherUserDetails} = userJson
            return otherUserDetails
        })

            return usersJson
        } catch (err) {
            throw new ErrorHandler(500, 'Internal Server Error')
        }
    }

    public async createUser(userDetails: CreateUser): Promise<any> {
        const settings = userDetails.settings
        const {media, ...otherSettings} = settings
        const {ailments, ...userSettings} = otherSettings
        let user = this.userModel.build({userType:this.PATIENT_TYPE, ...userDetails})
        try {
            user = await user.save()
            user = user.toJSON()
            const {password, ...userData} = user
            
            const savedSettings = await this.userSettingModel.create({userId: userData.id, ...userSettings})
            const {id, userId, ...settingsToReturn} = savedSettings.toJSON()
            const savedMedia = await this.userMediaModel.bulkCreate(media.map(medium => ({ mediaKey: medium, userId : userData.id})))
            const savedAilments = await this.userAilmentModel.bulkCreate(ailments.map(ailment => ({ ailmentKey: ailment, userId : userData.id})))
            const token = this.generateAccessToken(userData.id)

            return {
                token, 
                ...userData, 
                settings: {
                     media: savedMedia.map(medium => {
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


        } catch(err) {
            console.log(err)
            throw new ErrorHandler(500, 'Internal Server Error')
        }
        
    }

    public async userExists(email: string, password:string = '', id:any = null): Promise<any | boolean> {
        try {
            let criteria = {}
            if (id !== null) {
                criteria = {id: parseInt(id)}
            } else {
                criteria = {email}
            }
            const  userExists = await this.userModel.findOne({ where : criteria })
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
        } catch(err) {
            throw new ErrorHandler(500, 'Internal Server Error')
        }
        
    }

    public async loginUser({email, password} : {email: string, password:string}): Promise<any> {
        try {
            const user = await this.userExists(email, password)
            if (user !== false) {
                const {password, updatedAt, ...userData} = user.toJSON()
                const setting = await this.userSettingModel.findOne({where: {userId: userData.id}})
                const media = await this.userMediaModel.findAll({where: {userId: userData.id}})
                const ailments = await this.userAilmentModel.findAll({where: {userId: userData.id}})
                const token = this.generateAccessToken(userData.id)
                const { id, userId, age, hasHadTherapy, ...settingDetails } = setting?.toJSON()
                userData.settings = {media, ailments, ...settingDetails}
                
                return {token, userData}
            }
    
            return null
        } catch (err) {
            throw new ErrorHandler(500, 'Internal Server Error')
        } 
    }

    public  async updateUserSettings(userId: string, userSettings: any): Promise<any> {
        try {
            const {media, ailments, ...settings} = userSettings
            const updatedSettings = await this.userSettingModel.update({couplesTherapy:settings.couplesTherapy, religiousTherapy:settings.religiousTherapy}, { where: {userId: parseInt(userId)}})
            const updatedMedia = await this.userMediaModel.destroy({where: {userId}})
            const updatedAilments = await this.userAilmentModel.destroy({where: {userId}})
        
            if (updatedSettings) {
                const savedMedia = await this.userMediaModel.bulkCreate(media.map((medium:any) => ({ mediaKey: medium, userId}) ))
                const savedAilments = await this.userAilmentModel.bulkCreate(ailments.map((ailment:any) => ({ ailmentKey: ailment, userId})))
                settings.media = savedMedia
                settings.ailments = savedAilments

                return settings
            } else {
                throw new ErrorHandler(500, 'Error saving updated settings')
            }

        } catch (err) {
            throw new ErrorHandler(500, 'Internal Server Error')
        }

    }

    public async getSetting(userId: number): Promise<any> {
        try {
            let media = await this.userMediaModel.findAll({where: {userId}})
            let ailments = await this.userAilmentModel.findAll({where: {userId}})
            let user = await this.userExists('', '', userId)
            let userSetting: UserSetting | null = await this.userSettingModel.findOne({where: {userId}})
            user  = user.toJSON()
            const userSettingJson = userSetting?.toJSON() 
            if (!userSettingJson) {
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

            userSettingJson.name = user.name
            userSettingJson.media = media
            userSettingJson.ailments = ailments

            return userSettingJson

        } catch (err) {
            throw new ErrorHandler(500, 'Internal server error')
        }
    }

}