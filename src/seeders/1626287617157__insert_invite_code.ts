import { DataTypes, QueryInterface } from "sequelize"
import { Migration } from '../migration'
import randomstring from 'randomstring'
import moment from "moment"

const codes: Array<any> = []
let counter: number = 0
while (counter < 50) {
    const code = randomstring.generate(15)
    const time = moment().format('YYYY-MM-DD HH:mm:ss')
    codes.push({
        code,
        updatedAt: time,
        createdAt: time
    })
    counter++
}


const up: Migration = async ({context} : { context: QueryInterface}) => {
    await context.bulkInsert('Invite_Code', codes)
}

const down: Migration  = async ({context} : { context: QueryInterface}) => {
	await context.bulkDelete('Invite_Code', {} )
};

export { up, down }

