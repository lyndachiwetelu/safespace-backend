import { NextFunction, Request, Response } from "express";
import AvailabilityService from "../services/AvailabilityService";
import UserService from "../services/UserService";
const availService = new AvailabilityService();
const userService = new UserService();

export default class AvailabilityController
{
    public static async getAvailabilities(req:Request, res:Response, next:NextFunction){
        const userId = parseInt(req.params.userId)
        const day:any = req.query.day
        if (!day) {
            return res.sendStatus(400)
        }

        let userExists = await userService.userExists('', '', userId)
        userExists = userExists === false ? userExists: userExists.toJSON()
        if (userExists === false || userExists.userType !== 'therapist') {
            return res.sendStatus(404)
        }
     
        const avails = await availService.getAvailabilityForUser(userId, day)
        const json = await Promise.all(avails)
        return res.status(200).json(json)
    }

    public static async addAvailability(req:Request, res:Response, next:NextFunction){
        const userId = parseInt(req.params.userId)
        if (await userService.userExists('', '', userId) === false) {
            return res.sendStatus(404)
        }

        if (await availService.duplicateExists(userId, req.body.from, req.body.to, req.body.day)) {
            return res.sendStatus(409)
        }

        const availability = await availService.addAvailability(req.body, userId)
        return res.status(201).json(availability)
     }

     public static async deleteAvailability(req:Request, res:Response, next:NextFunction) {
         try {
            const id = parseInt(req.params.id)
            const availExists = availService.availabilityExists(id)
            if (await availExists === false) {
                return res.sendStatus(404)
            }

            const deleted = await availService.deleteAvailability(id)
            if (deleted === false) {
                res.sendStatus(405)
            }
            return res.sendStatus(200)
         } catch (err) {
             next(err)
         }
     }

}