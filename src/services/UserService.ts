import UserModel from '../models/User'
import { CreateUser, User } from '../types/UserRequest'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const tokenSecret: string = process.env.TOKEN_SECRET || 'NOT_SECURE'

dotenv.config()

export default class UserService 
{
    protected userModel: typeof UserModel

    public constructor() {
        this.userModel = UserModel
    }

    private generateAccessToken(userId: string) {
        return jwt.sign({userId}, tokenSecret, { expiresIn: '7200s' });
    }

    public async getAllUsers() {
        const users = await this.userModel.findAll()
        const usersJson = users.map(user => user.toJSON())
        return usersJson
    }

    public async createUser(userDetails: CreateUser): Promise<User> {
        let user = this.userModel.build(userDetails)
        user = await user.save()
        const token = this.generateAccessToken(user.get('id'))
        return {token, ...user.toJSON()}
    }

}