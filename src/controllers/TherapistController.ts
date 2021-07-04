import { NextFunction, Request, Response } from "express";
import TherapistService from "../services/TherapistService";
import UserService from "../services/UserService";

const therapistService = new TherapistService();
const userService = new UserService();

export default class TherapistController
{
    public static async getMatchingTherapistsForUser(req: Request, res:Response, next: NextFunction) {
        try {
            // @todo check if user with ID exists before trying to get matching therapists
            const therapists = await therapistService.getMatchingTherapists(req.params.userId);
            return res.status(200).json(therapists)
        } catch (err) {
            next(err)
        }
    }
}