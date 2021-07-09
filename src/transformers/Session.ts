export const getSessionData  = (data: any):any => {
    const {updatedAt, createdAt, ...session} = data
    return session
}