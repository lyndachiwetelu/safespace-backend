import { NextFunction, Request, response, Response } from "express";
import AvailabilityService from "../services/AvailabilityService";
import SessionService from "../services/SessionService";
import UserService from "../services/UserService";
const sessionService = new SessionService();
const availService = new AvailabilityService();
const userService = new UserService();

export default class SessionController
{
    public static async addSession(req:Request, res:Response, next:NextFunction) {
       try {
            if (await availService.availabilityExists(req.body.availabilityId) === false || await userService.userExists('', '', req.body.requestedBy) === false) {
                return res.sendStatus(404)
            }

            if (await sessionService.duplicateExists(parseInt(req.body.requestedBy), req.body.from, req.body.to, parseInt(req.body.availabilityId))) {
                return res.sendStatus(409)
            }
            const session = await sessionService.addSession(req.body)
            return res.status(200).json(session)
       } catch (err) {
           next(err)
       }
    }
    public static async getSessionsForTherapist(req:Request, res:Response, next:NextFunction) {
        try {
            const user = await userService.userExists('', '', req.params.userId) 
            if ( user === false) {
                return res.sendStatus(404)
            }
    
            if (user.toJSON().userType !== 'therapist') {
                return res.sendStatus(404)
            }
            const sessions = await sessionService.getSessionsForUser(parseInt(req.params.userId), 'therapist')
            return res.status(200).json(sessions)
        } catch (err) {
            next(err)
        }
       
    }

    public static async getSessionsForPatient(req:Request, res:Response, next:NextFunction){
        try {
            const user = await userService.userExists('', '', req.params.userId) 
            if ( user === false) {
                return res.sendStatus(404)
            }
    
            if (user.toJSON().userType !== 'patient') {
                return res.sendStatus(404)
            }
            const sessions = await sessionService.getSessionsForUser(parseInt(req.params.userId), 'patient')
            return res.status(200).json(sessions)
        } catch (err) {
            next(err)
        }
    }

    public static async deleteSession(req:Request, res:Response, next:NextFunction) {
        try {
            const id = parseInt(req.params.id)
            const session = await sessionService.sessionExists(id)
            if (session === false) {
                return res.sendStatus(404)
            }
            await sessionService.deleteSession(id)
            return res.sendStatus(200)
        } catch (err) {
            next(err)
        }
    }

    public static async updateStatus(req:Request, res:Response, next:NextFunction) {
        try {
            const id = parseInt(req.params.id)
            const session = await sessionService.sessionExists(id)
            if (session === false) {
                return res.sendStatus(404)
            }
            const updatedSession = await sessionService.updateStatus(req.body.status, id)
            return res.status(200).json(updatedSession)
        } catch (err) {
            next(err)
        }
    }

}