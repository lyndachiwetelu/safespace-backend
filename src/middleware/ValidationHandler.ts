import { NextFunction, Request, Response } from "express";

export const validationHandler = (schema: any, req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {abortEarly: false})
    if (error) {
        const messages = error.details.map((detail:any) => detail.message)
        return res.status(400).send({
            status: 400,
            messages
          });
    }

    next()
}