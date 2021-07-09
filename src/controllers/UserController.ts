import { NextFunction, Request, Response } from "express";
import UserService from "../services/UserService";
const userService = new UserService();

export default class UserController
{
    public static async updateUserSettings(req:Request, res:Response, next:NextFunction){
        const userId = req.params.id
        const userSettings = req.body
        if (await userService.userExists('', '', userId) === false) {
            return res.sendStatus(404)
        }
        try {
            const response = await userService.updateUserSettings(userId, userSettings)
            return res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }

    public static async getUsers(req:Request, res:Response, next:NextFunction): Promise<Response | void > {
        try {
            return res.status(200).json(await userService.getAllUsers());
        } catch(err) {
            next()
        }
    }

    public static async createUser(req:Request, res:Response, next: NextFunction) : Promise<Response | void> {
        try {
            if (await userService.userExists(req.body.email) !== false) {
                return res.status(409).json({status: 409, message: 'User  with email exists!'})
            }
            const {token, ...user} = await userService.createUser(req.body)
            return res.status(201).cookie('access_token', token, { maxAge:  4 * 60 * 60 * 1000, httpOnly: true}).json(user);
        } catch(err) {
            next(err)
        }
    }

    public static async loginUser(req:Request, res:Response, next:NextFunction): Promise<Response | void> {
        try {
            const response = await userService.loginUser(req.body)
            if (response === null) {
                return res.status(400).json({status: 400, message: 'Invalid Credentials'})
            }

            const {token, userData}  = response
            return res.status(200).cookie('access_token', token, { maxAge:  4 * 60 * 60 * 1000, httpOnly: true }).json(userData);

        } catch (err) {
            next(err)
        }
    }

}