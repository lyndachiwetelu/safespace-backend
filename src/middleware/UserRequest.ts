import { NextFunction, Request, Response } from "express";
import { SignupUserSchema } from "../validation/schema/signupUser";

export const validateSignup = (req: Request, res: Response, next: NextFunction) => {
    const { error } = SignupUserSchema.validate(req.body, {abortEarly: false})
    if (error) {
        const messages = error.details.map(detail => detail.message)
        return res.status(400).send({
            status: 400,
            messages
          });
    }

    next()
}

export const validateLogin = (req: Request, res: Response) => {

}