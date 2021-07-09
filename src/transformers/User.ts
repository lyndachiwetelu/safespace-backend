export const getUserData = (data: any): any => {
    const {email, password, createdAt, updatedAt, ...user} = data
    return user
}