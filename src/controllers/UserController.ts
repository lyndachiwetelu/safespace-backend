import { Request, Response } from "express";
import UserService from "../services/UserService";
const userService = new UserService();

export default class BaseController
{
    public static async getUsers(req:Request, res:Response) {
        return res.status(200).json(await userService.getAllUsers());
    }

    public static async createUser(req:Request, res:Response) {
        const {token, ...user} = await userService.createUser(req.body)
        return res.status(201).cookie('access_token', token, { maxAge:  2 * 60 * 60 * 1000, httpOnly: true }).json(user);
    }

}