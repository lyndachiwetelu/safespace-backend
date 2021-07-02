import { Request } from "express"

export interface RequestWithUserInfo extends Request {
  userId?: number 
}