import { NextFunction, Request, Response } from "express";
import { AddAvailabilitySchema } from "../validation/schema/addAvailability";
import { validationHandler } from "./ValidationHandler";

export const validateAddAvailability = (req: Request, res: Response, next: NextFunction) => {
    return validationHandler(AddAvailabilitySchema, req, res, next)
}
