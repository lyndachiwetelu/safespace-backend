import { DataTypes, Op, QueryInterface } from "sequelize"
import { Migration } from '../migration'

const up: Migration = async ({context} : { context: QueryInterface}) => {
    await context.bulkInsert('User_Media', [
        {
            userId: 5009,
            mediaKey: 'voice'
        },
        {
            userId: 5009,
            mediaKey: 'video'
        },
        {
            userId: 5009,
            mediaKey: 'text'
        },
        {
            userId: 5010,
            mediaKey: 'voice'
        },
        {
            userId: 5010,
            mediaKey: 'video'
        },
        {
            userId: 5010,
            mediaKey: 'text'
        },

        {
            userId: 5011,
            mediaKey: 'voice'
        },
        {
            userId: 5011,
            mediaKey: 'video'
        },
        {
            userId: 5011,
            mediaKey: 'text'
        },

        {
            userId: 5012,
            mediaKey: 'voice'
        },
        {
            userId: 5012,
            mediaKey: 'video'
        },

        {
            userId: 5013,
            mediaKey: 'text'
        },

        {
            userId: 5013,
            mediaKey: 'video'
        },
        {
            userId: 5013,
            mediaKey: 'voice'
        },

        {
            userId: 5014,
            mediaKey: 'text'
        },

        {
            userId: 5014,
            mediaKey: 'video'
        },
        {
            userId: 5014,
            mediaKey: 'voice'
        },

        {
            userId: 5015,
            mediaKey: 'text'
        },

        {
            userId: 5016,
            mediaKey: 'video'
        },
        {
            userId: 5016,
            mediaKey: 'voice'
        },

        {
            userId: 5017,
            mediaKey: 'text'
        },

        {
            userId: 5017,
            mediaKey: 'video'
        },
        {
            userId: 5017,
            mediaKey: 'voice'
        },

        {
            userId: 5018,
            mediaKey: 'text'
        },

        {
            userId: 5019,
            mediaKey: 'video'
        },
        {
            userId: 5019,
            mediaKey: 'voice'
        },


        {
            userId: 5020,
            mediaKey: 'text'
        },

        {
            userId: 5020,
            mediaKey: 'video'
        },
        {
            userId: 5020,
            mediaKey: 'voice'
        },

        {
            userId: 5021,
            mediaKey: 'text'
        },

        {
            userId: 5021,
            mediaKey: 'video'
        },
        {
            userId: 5021,
            mediaKey: 'voice'
        },

        {
            userId: 5022,
            mediaKey: 'text'
        },

        {
            userId: 5023,
            mediaKey: 'video'
        },
        {
            userId: 5023,
            mediaKey: 'voice'
        },

        {
            userId: 5023,
            mediaKey: 'text'
        },

        {
            userId: 5024,
            mediaKey: 'video'
        },
        {
            userId: 5024,
            mediaKey: 'voice'
        },

        {
            userId: 5025,
            mediaKey: 'text'
        },

        {
            userId: 5025,
            mediaKey: 'video'
        },
        {
            userId: 5025,
            mediaKey: 'voice'
        },

        {
            userId: 5027,
            mediaKey: 'text'
        },

        {
            userId: 5026,
            mediaKey: 'video'
        },
        {
            userId: 5026,
            mediaKey: 'voice'
        },

        {
            userId: 5028,
            mediaKey: 'text'
        },

        {
            userId: 5028,
            mediaKey: 'video'
        },
        {
            userId: 5028,
            mediaKey: 'voice'
        },

        {
            userId: 5029,
            mediaKey: 'text'
        },

        {
            userId: 5029,
            mediaKey: 'video'
        },
        {
            userId: 5029,
            mediaKey: 'voice'
        },

        {
            userId: 5030,
            mediaKey: 'text'
        },

        {
            userId: 5031,
            mediaKey: 'video'
        },
        {
            userId: 5030,
            mediaKey: 'voice'
        },

        {
            userId: 5031,
            mediaKey: 'text'
        },

        {
            userId: 5032,
            mediaKey: 'video'
        },
        {
            userId: 5032,
            mediaKey: 'voice'
        },

        {
            userId: 5033,
            mediaKey: 'text'
        },

        {
            userId: 5033,
            mediaKey: 'video'
        },
        {
            userId: 5033,
            mediaKey: 'voice'
        },

        {
            userId: 5034,
            mediaKey: 'text'
        },

        {
            userId: 5034,
            mediaKey: 'video'
        },
        {
            userId: 5034,
            mediaKey: 'voice'
        },
    
    ])
}


const down: Migration  = async ({context} : { context: QueryInterface}) => {
	await context.bulkDelete('User_Media', { userId: {
        [Op.between] : [5009, 5034]
    }})
};

export { up, down }

