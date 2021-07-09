export const getAvailData  = (data: any):any => {
    const {updatedAt, createdAt, ...availability} = data
    return availability
}