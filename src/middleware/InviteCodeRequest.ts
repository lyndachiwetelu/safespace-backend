import { NextFunction, Request, Response } from "express";
import { AddInviteSchema } from "../validation/schema/addInviteCode";
import { validationHandler } from "./ValidationHandler";

export const validateAddInvite = (req: Request, res: Response, next: NextFunction) => {
    return validationHandler(AddInviteSchema, req, res, next)
}