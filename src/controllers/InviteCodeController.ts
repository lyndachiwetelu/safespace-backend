import { NextFunction, Request, Response } from "express";
import InviteCodeService from "../services/InviteCodeService";

const inviteService = new InviteCodeService();

export default class InviteCodeController
{
   public static async createInviteCode(req: Request, res: Response, next: NextFunction)
   {
       try {
            const { code } = req.body;
            if (await inviteService.codeExists(code) !== false) {
                return res.sendStatus(409)
            }
          
            const created = await inviteService.createCode(code)
            return res.status(201).json(created)
       } catch(err) {
            next(err)
       }

   }
}