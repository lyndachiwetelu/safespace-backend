import moment from "moment"
import { DataTypes, Op, QueryInterface } from "sequelize"
import { Migration } from '../migration'

const therapists : Array<number> = [ 5009, 5010, 5011, 5012, 5013, 5014, 5015, 5016, 5017,5018,5019,5020,5021,5022,5023,5024,5025,5026,5027,5028,5029,5030,5031,5032,5033,5034]
const endDate = '2021-10-11'

const avails = therapists.map((therapist: number) => {
    let day: string = '2021-07-11'
    const days: Array<any> = [] 
    while (moment(endDate, 'YYYY-MM-DD').diff(day, 'days') > 0) {
        const avail = {
            userId: therapist,
            day: day,
            from: "12:00",
            to: "17:00",
            createdAt: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'), 
            updatedAt: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'), 
     }  
     days.push(avail) 
     day = moment(day, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD')
}

return days
}).flat()
const up: Migration = async ({context} : { context: QueryInterface}) => {
    await context.bulkInsert('User_Availability', avails)
}

const down: Migration  = async ({context} : { context: QueryInterface}) => {
	await context.bulkDelete('User_Availability', { userId: {
        [Op.between] : [5009, 5034]
    }} )
};

export { up, down }

