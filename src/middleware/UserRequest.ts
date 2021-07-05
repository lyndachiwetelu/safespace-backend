import { NextFunction, Request, Response } from "express";
import { LoginUserSchema } from "../validation/schema/loginUser";
import { SignupUserSchema } from "../validation/schema/signupUser";
import { UpdateUserSettingsSchema } from "../validation/schema/updateSettings";
import { validationHandler } from "./ValidationHandler";

export const validateSignup = (req: Request, res: Response, next: NextFunction) => {
    return validationHandler(SignupUserSchema, req, res, next)
}

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    return validationHandler(LoginUserSchema, req, res, next)
}

export const validateUpdateUserSettings = (req: Request, res: Response, next: NextFunction) => {
    return validationHandler(UpdateUserSettingsSchema, req, res, next)
}