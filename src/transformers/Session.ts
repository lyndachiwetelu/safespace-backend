export const getSessionData  = (data: any):any => {
    const {updatedAt, createdAt, ...session} = data
    return session
}

export const getSessionMessage = (data: any):any => {
    const {updatedAt, ...message} = data
    return message
}