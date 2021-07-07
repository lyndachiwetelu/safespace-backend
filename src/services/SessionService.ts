import { ErrorHandler } from "../error"
import User from "../models/User"
import UserModel from "../models/User"
import UserAvailabilityModel from "../models/UserAvailability"
import UserSessionModel from "../models/UserSession"
import AvailabilityService from "./AvailabilityService"

export default class SessionService 
{
    protected userModel: typeof UserModel
    protected availModel: typeof UserAvailabilityModel
    protected sessionModel: typeof UserSessionModel
    protected availService: AvailabilityService

    public constructor() {
        this.userModel = UserModel
        this.availModel = UserAvailabilityModel
        this.sessionModel = UserSessionModel
        this.availService = new AvailabilityService()
    }

    public async addSession(sessionDetails: any): Promise<any> {
        try {
            const availability = await this.availService.availabilityExists(sessionDetails.availabilityId)
            const therapist = availability.userId
            const day = availability.day
            const dataToStore = {therapist, day, ...sessionDetails}
            const session = await this.sessionModel.create(dataToStore)
            return session.toJSON()
        } catch (err) {
            throw new ErrorHandler(500, 'Internal Server error')
        }
    }

    public async getSessionsForUser(userId: number, userType:string = 'patient'): Promise<any> {
       try {
            let where = {}
            if (userType === 'patient') {
                where = { requestedBy: userId}
            } else if (userType === 'therapist') {
                where = { therapist:userId}
            }
            const sessions = await this.sessionModel.findAll({ where, include: [{model: User, as:'user'}, {model: User, as:'therapistInfo'}] })
            return sessions.map(session => {
                const sessionJson = session.toJSON()
                const {email, password, createdAt, updatedAt, userType, ...user} = sessionJson.user
                let {email:tEmail, password:tPassword, createdAt:tCreatedAt, updatedAt:tUpdatedAt, userType:tUserType, ...therapist} = sessionJson.therapistInfo
                sessionJson.user = user
                sessionJson.therapistInfo = therapist
                const {updatedAt:sUpdatedAt, ...otherSessionDetails} = sessionJson
                return otherSessionDetails
            })
       } catch (err) {
           throw new ErrorHandler(500, 'Internal server error')
       }
    }

    public async deleteSession(id: number): Promise<boolean> {
        try {
            await this.sessionModel.destroy({where: {id} })
            return true
        } catch (err) {
            throw new ErrorHandler(500, 'Internal Server Error')
        }
    }

    public async sessionExists(id: number) {
        try {
            const  sessionExists = await this.sessionModel.findOne({ where : {id} })
            if (sessionExists) {
                return sessionExists
            }
            return false
        } catch(err) {
            throw new ErrorHandler(500, 'Internal Server Error')
        } 
    }

    public async updateStatus(status: string, id: number): Promise<any> {
        try {
            const updatedSession = await this.sessionModel.update({status}, {where: {id} })
            if (updatedSession) {
                const session = await this.sessionModel.findOne({where: {id},  include: [{model: User, as:'user'}, {model: User, as:'therapistInfo'}]})
                const sessionJson = session?.toJSON()
                const {email, password, createdAt, updatedAt, userType, ...user} = sessionJson.user
                let {email:tEmail, password:tPassword, createdAt:tCreatedAt, updatedAt:tUpdatedAt, userType:tUserType, ...therapist} = sessionJson.therapistInfo
                sessionJson.user = user
                sessionJson.therapistInfo = therapist
                const {updatedAt:sUpdatedAt, ...otherSessionDetails} = sessionJson
                return otherSessionDetails
                
            }
        } catch (err) {
            throw new ErrorHandler(500, 'Internal Server Error')
        }
    }
}