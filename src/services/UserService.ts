import UserModel from '../models/User'
import { CreateUser, User } from '../types/UserRequest'

export default class UserService 
{
    protected userModel: typeof UserModel

    public constructor() {
        this.userModel = UserModel
    }

    public async getAllUsers() {
        const users = await this.userModel.findAll()
        const usersJson = users.map(user => user.toJSON())
        return usersJson
    }

    public async createUser(userDetails: CreateUser): Promise<User> {
        let user = this.userModel.build(userDetails)
        user = await user.save()
        return user.toJSON()

    }

}