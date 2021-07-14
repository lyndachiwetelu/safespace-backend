import { NextFunction, Request, Response } from "express";
import { SignupTherapistSchema } from "../validation/schema/signupTherapist";
import { validationHandler } from "./ValidationHandler";

export const validateTherapistSignup = (req: Request, res: Response, next: NextFunction) => {
    return validationHandler(SignupTherapistSchema, req, res, next)
}

export const validateTherapistLogin = (req: Request, res: Response, next: NextFunction) => {
    // @todo
}
