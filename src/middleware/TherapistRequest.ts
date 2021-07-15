import { NextFunction, Request, Response } from "express";
import { AddTherapistSettingsSchema } from "../validation/schema/addTherapistSetting";
import { SignupTherapistSchema } from "../validation/schema/signupTherapist";
import { validationHandler } from "./ValidationHandler";

export const validateTherapistSignup = (req: Request, res: Response, next: NextFunction) => {
    return validationHandler(SignupTherapistSchema, req, res, next)
}

export const validateSaveTherapistSetting = (req: Request, res: Response, next: NextFunction) => {
    return validationHandler(AddTherapistSettingsSchema, req, res, next)
}