import { NextFunction, Request, response, Response } from "express";
import AvailabilityService from "../services/AvailabilityService";
import SessionMessageService from "../services/SessionMessageService";
import SessionService from "../services/SessionService";
import UserService from "../services/UserService";
const sessionService = new SessionService();
const availService = new AvailabilityService();
const userService = new UserService();
const sessionMessageService = new SessionMessageService();

export default class SessionController
{
    public static async saveSessionMessage(req:Request, res:Response, next:NextFunction) {
        try{
            const id = parseInt(req.params.id)
            const session = await sessionService.sessionExists(id)
            if (session === false) {
                return res.sendStatus(404)
            }

            let sessionJson = session.toJSON()

            // todo: only allow saving message if session is active
            if (['confirmed', 'created', 'active'].indexOf(sessionJson.status) === -1) {
                return res.sendStatus(400)
            }

            if ([sessionJson.requestedBy, sessionJson.therapist].indexOf(req.body.userId) === -1) {
                return res.sendStatus(401)
            }
            
            const sessionMessage = await sessionMessageService.saveSessionMessage(req.body, id)
            return res.status(200).json(sessionMessage)

        } catch (err) {
            next(err)
        }
        
    }

    public static async getSessionMessages(req:Request, res:Response, next:NextFunction) {
        try {
            const id = parseInt(req.params.id)
            const session = await sessionService.sessionExists(id)
            if (session === false) {
                return res.sendStatus(404)
            }

            const messages = await sessionMessageService.getSessionMessages(id)
            return res.status(200).json(messages)

        } catch (err) {
            next(err)
        }
    }

    public static async addSession(req:Request, res:Response, next:NextFunction) {
       try {
            if (await availService.availabilityExists(req.body.availabilityId) === false || await userService.userExists('', '', req.body.requestedBy) === false) {
                return res.sendStatus(404)
            }

            if (await sessionService.duplicateExists(parseInt(req.body.requestedBy), req.body.from, req.body.to, parseInt(req.body.availabilityId))) {
                return res.sendStatus(409)
            }
            const session = await sessionService.addSession(req.body)
            return res.status(201).json(session)
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
            const sessions = await sessionService.getSessionsForUser(parseInt(req.params.userId), 'therapist', req.query.userId)
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
            const sessions = await sessionService.getSessionsForUser(parseInt(req.params.userId), 'patient', req.query.therapist)
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

    public static async getSingleSession(req:Request, res:Response, next:NextFunction) {
        try {
            const id = parseInt(req.params.id)
            const session = await sessionService.sessionExists(id)
            if (session === false) {
                return res.sendStatus(404)
            }
            return res.status(200).json(session)
        } catch (err) {
            next(err)
        }
    }

}
