export interface CreateUser  {
    name: String,
    email: String,
    password: String
}

export interface User extends CreateUser {
    token: String,
    createdAt: Date,
    updatedAt: Date
}