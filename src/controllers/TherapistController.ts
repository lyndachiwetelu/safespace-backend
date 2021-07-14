import { NextFunction, Request, Response } from "express";
import InviteCodeService from "../services/InviteCodeService";
import TherapistService from "../services/TherapistService";
import UserService from "../services/UserService";

const therapistService = new TherapistService();
const userService = new UserService();
const inviteService = new InviteCodeService();

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

    public static async createTherapist(req: Request, res:Response, next: NextFunction) : Promise<Response | void> {
        try {
            if (await userService.userExists(req.body.email) !== false) {
                return res.sendStatus(409)
            }

            if (await inviteService.codeExists(req.body.code) === false) {
                return res.status(400).json({status: 'error', message: 'Use a valid Invite code'})
            }
            const {therapist, token} = await therapistService.createTherapist(req.body);
            return res.status(201).cookie('access_token', token, { maxAge:  4 * 60 * 60 * 1000, httpOnly: true}).json(therapist);
        } catch (err) {
            next(err)
        }
    }

    public static async loginTherapist(req: Request, res:Response, next: NextFunction) : Promise<Response | void> {
        try {
            const response = await therapistService.loginTherapist(req.body)
            if (response === null) {
                return res.status(400).json({status: 400, message: 'Invalid Credentials'})
            }

            const {token, therapist}  = response
            return res.status(200).cookie('access_token', token, { maxAge:  4 * 60 * 60 * 1000, httpOnly: true }).json(therapist);

        } catch (err) {
            next(err)
        }
    }
}