import { Request, Response } from "express";

export default class BaseController 
{
    public static helloWorld(req: Request, res: Response) {
        return res.status(200).json({'message': 'Hello World!'})
    }

}