import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { RequestWithUserInfo } from '../types/types'

dotenv.config()

export const authenticateToken = (req: RequestWithUserInfo, res: Response, next: NextFunction) => {
    const token = req.cookies['access_token']

    if (token == null) { 
        return res.sendStatus(401)
    }

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
        if (err) {
            return res.sendStatus(403)
        } 
        req.userId = user.userId

    next()
  })
}