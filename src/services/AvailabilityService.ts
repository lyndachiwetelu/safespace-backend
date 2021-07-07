import moment from "moment";
import { Op } from "sequelize";
import { ErrorHandler } from "../error";
import TherapistSetting from "../models/TherapistSetting";
import UserModel from "../models/User";
import UserAvailabilityModel from "../models/UserAvailability";
import UserSessionModel from "../models/UserSession";

export default class AvailabilityService 
{
    protected userModel: typeof UserModel;
    protected availModel: typeof UserAvailabilityModel;
    protected sessionModel: typeof UserSessionModel;

    public constructor() {
        this.userModel = UserModel
        this.availModel = UserAvailabilityModel
        this.sessionModel = UserSessionModel
    }

    public async addAvailability(availability: any, userId: number): Promise<any> {
        try {
            const avail = await this.availModel.create({...availability, userId})
            return avail.toJSON()
        } catch (err) {
            throw new ErrorHandler(500, 'Internal server error')
        }
    }

    public async getAvailabilityForUser(userId: number, day:string) {
        day = moment.utc(day).format('YYYY-MM-DD hh:mm:ss')
        try {
            const avails = await this.availModel.findAll({where: {  userId, day: {
                [Op.eq]: day 
            } }})
            const user = await this.userModel.findOne({where:{id:userId}, include: [TherapistSetting]})
            const userJson = user?.toJSON()
            return avails.map(async(avail:any) =>  {
                const availJson = avail.toJSON()
                const times = await this.getAvailabilitiesForDay(availJson, parseInt(userJson.therapistSetting.timePerSession))
                availJson.times = times
                return availJson
            })
        } catch (err) {
            throw new ErrorHandler(500, 'Internal server error')
        }
    }

    public async availabilityExists(id:number) {
       try {
            const avail = await this.availModel.findOne({ where: {id} })
            if (avail === null) {
                return false
            }

            return avail.toJSON()

       } catch (err) {
            throw new ErrorHandler(500, 'Internal Server Error')
       }
    }

    private async getAvailabilitiesForDay(availability:any, time=60) {
        const day = moment.utc(availability.day).format('YYYY-MM-DD hh:mm:ss')
        const activeSessions:any = await this.sessionModel.findAll({where: {day, therapist: availability.userId} })
        const times = activeSessions.map((session:any) => {
            const sessionJson = session.toJSON()
            const dayAvail = availability.day
            let startDate = `${dayAvail} ${sessionJson.from}:00`
            let endDate = `${dayAvail} ${sessionJson.to}:00`
    
            startDate = moment(startDate, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')
            endDate = moment(endDate, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')

            return {
                start: startDate,
                end: endDate
            }
        })

        const from = availability.from
        const to = availability.to
        const dayAvail = availability.day
        let dateFrom = `${dayAvail} ${from}:00`
        let dateTo = `${dayAvail} ${to}:00`
    
        dateTo = moment(dateTo, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')
        dateFrom = moment(dateFrom, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')
        const availabilities = []

        while (moment(dateTo).diff(dateFrom, 'minutes') > 0) {
            const availStartDate = moment(dateFrom).format('YYYY-MM-DD HH:mm:ss')
            const availEndDate = moment(dateFrom).add(time, 'minute').format('YYYY-MM-DD HH:mm:ss')
            dateFrom = availEndDate
            const session = {
                start: availStartDate,
                end: availEndDate
            }
           if (this.notInSessions(times, session)) {
                availabilities.push(session)
                
            }
           
        }

        return availabilities
    }

    private notInSessions(sessions: any, session: { start: string; end: string; }) {
        for (const single of sessions) {
            if ((single.start === session.start) && single.end === session.end) {
                return false
            }
        }

        return true
    }
}