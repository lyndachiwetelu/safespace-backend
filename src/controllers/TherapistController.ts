import { NextFunction, Request, Response } from "express";
import TherapistService from "../services/TherapistService";
import UserService from "../services/UserService";

const therapistService = new TherapistService();
const userService = new UserService();

export default class TherapistController
{
    public static async getMatchingTherapistsForUser(req: Request, res:Response, next: NextFunction): Promise<Response | void> {
        try {
            if (await userService.userExists('', '', req.params.userId) !== false) {
                const therapists = await therapistService.getMatchingTherapists(req.params.userId);
                return res.status(200).json(therapists)
            } else {
                return res.status(400).json({status: 'error', message: 'User does not exist'})
            }
            
        } catch (err) {
            next(err)
        }
    }

    public static async getSingleTherapist(req: Request, res:Response, next: NextFunction) : Promise<Response | void> {
        try {
            const therapist = await therapistService.getTherapist(req.params.id);
            if (therapist === false) {
                return res.sendStatus(404)
            }
            return res.status(200).json(therapist)
        } catch (err) {
            next(err)
        }
    }
}