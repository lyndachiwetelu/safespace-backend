export const getInviteData  = (data: any):any => {
    const {updatedAt, ...inviteCode} = data
    return inviteCode
}