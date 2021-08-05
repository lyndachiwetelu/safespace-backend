import { NextFunction, Request, Response } from "express";
import { AddSessionSchema } from "../validation/schema/addSession";
import { AddSessionMessageSchema } from "../validation/schema/addSessionMessage";
import { UpdateSessionStatusSchema } from "../validation/schema/updateSessionStatus";
import { validationHandler } from "./ValidationHandler";

export const validateAddSession = (req: Request, res: Response, next: NextFunction) => {
    return validationHandler(AddSessionSchema, req, res, next)
}

export const validateUpdateSessionStatus = (req: Request, res: Response, next: NextFunction) => {
    return validationHandler(UpdateSessionStatusSchema, req, res, next)
}

export const validateAddSessionMessage = (req: Request, res: Response, next: NextFunction) => {
    return validationHandler(AddSessionMessageSchema, req, res, next)
}


