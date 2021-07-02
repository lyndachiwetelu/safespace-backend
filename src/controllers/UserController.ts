import { Request, Response } from "express";
import UserService from "../services/UserService";
const userService = new UserService();

export default class BaseController
{
    public static async getUsers(req:Request, res:Response) {
        return res.status(200).json(await userService.getAllUsers());
    }

    public static async createUser(req:Request, res:Response) {
        return res.status(201).json(await userService.createUser(req.body));
    }

}