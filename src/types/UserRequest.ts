export interface CreateUser  {
    name: String,
    email: String,
    password: String
}

export interface User extends CreateUser {
    createdAt: Date,
    updatedAt: Date
}