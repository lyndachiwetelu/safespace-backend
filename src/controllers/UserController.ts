import { Request, Response } from "express";
import UserService from "../services/UserService";
const userService = new UserService();

export default class BaseController
{
    public static async getUsers(req:Request, res:Response) {
        return res.status(200).json(await userService.getAllUsers());
    }

    public static async createUser(req:Request, res:Response) {
        if (await userService.userWithEmailExists(req.body.email) === true) {
            return res.status(409).json({status: 409, message: 'User  with email exists!'})
        }
        const {token, ...user} = await userService.createUser(req.body)
        return res.status(201).cookie('access_token', token, { maxAge:  2 * 60 * 60 * 1000, httpOnly: true }).json(user);
    }

}