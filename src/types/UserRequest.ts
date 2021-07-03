interface UserSettings {
    age: number,
    hasHadTherapy: boolean,
    ailments: Array<any>,
    religiousTherapy: string,
    media: Array<any>
    couplesTherapy: boolean
}

export interface CreateUser  {
    name: String,
    email: String,
    password: String,
    settings: UserSettings
}

export interface UserResponse extends CreateUser {
    token: String,
    createdAt: Date,
    updatedAt: Date,
    settings: UserSettings
}