import { DataTypes, Op, QueryInterface } from "sequelize"
import { Migration } from '../migration'

const up: Migration = async ({context} : { context: QueryInterface}) => {
    await context.bulkInsert('User_Ailment', [
        {
            userId: 5009,
            ailmentKey: 'depression'
        },
        {
            userId: 5009,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5009,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5009,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5009,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5009,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5009,
            ailmentKey: 'addiction'
        },


        {
            userId: 5010,
            ailmentKey: 'depression'
        },
        {
            userId: 5010,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5010,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5011,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5011,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5011,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5011,
            ailmentKey: 'addiction'
        },


        {
            userId: 5012,
            ailmentKey: 'depression'
        },
        {
            userId: 5012,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5012,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5012,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5012,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5012,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5012,
            ailmentKey: 'addiction'
        },

        {
            userId: 5013,
            ailmentKey: 'depression'
        },
        {
            userId: 5013,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5013,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5014,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5014,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5014,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5014,
            ailmentKey: 'addiction'
        },


        {
            userId: 5015,
            ailmentKey: 'depression'
        },
        {
            userId: 5015,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5015,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5015,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5015,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5015,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5015,
            ailmentKey: 'addiction'
        },

        {
            userId: 5016,
            ailmentKey: 'depression'
        },
        {
            userId: 5016,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5017,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5017,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5018,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5018,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5018,
            ailmentKey: 'addiction'
        },


        {
            userId: 5019,
            ailmentKey: 'depression'
        },
        {
            userId: 5019,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5019,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5019,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5019,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5019,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5019,
            ailmentKey: 'addiction'
        },


        {
            userId: 5020,
            ailmentKey: 'depression'
        },
        {
            userId: 5020,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5020,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5020,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5020,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5020,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5020,
            ailmentKey: 'addiction'
        },


        {
            userId: 5021,
            ailmentKey: 'depression'
        },
        {
            userId: 5021,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5021,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5021,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5021,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5021,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5021,
            ailmentKey: 'addiction'
        },


        {
            userId: 5022,
            ailmentKey: 'depression'
        },
        {
            userId: 5022,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5022,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5022,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5022,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5022,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5022,
            ailmentKey: 'addiction'
        },


        {
            userId: 5023,
            ailmentKey: 'depression'
        },
        {
            userId: 5023,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5023,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5023,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5023,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5023,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5023,
            ailmentKey: 'addiction'
        },


        {
            userId: 5024,
            ailmentKey: 'depression'
        },
        {
            userId: 5024,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5025,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5025,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5026,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5026,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5026,
            ailmentKey: 'addiction'
        },

        {
            userId: 5027,
            ailmentKey: 'depression'
        },
        {
            userId: 5027,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5027,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5028,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5028,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5028,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5028,
            ailmentKey: 'addiction'
        },


        {
            userId: 5029,
            ailmentKey: 'depression'
        },
        {
            userId: 5029,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5029,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5029,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5029,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5029,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5029,
            ailmentKey: 'addiction'
        },


        {
            userId: 5030,
            ailmentKey: 'depression'
        },
        {
            userId: 5030,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5030,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5030,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5030,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5030,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5030,
            ailmentKey: 'addiction'
        },


        {
            userId: 5031,
            ailmentKey: 'depression'
        },
        {
            userId: 5031,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5031,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5032,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5032,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5032,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5032,
            ailmentKey: 'addiction'
        },


        {
            userId: 5033,
            ailmentKey: 'depression'
        },
        {
            userId: 5033,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5033,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5033,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5033,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5033,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5033,
            ailmentKey: 'addiction'
        },


        {
            userId: 5034,
            ailmentKey: 'depression'
        },
        {
            userId: 5034,
            ailmentKey: 'anxiety'
        },
        {
            userId: 5034,
            ailmentKey: 'ptsd'
        },
        {
            userId: 5034,
            ailmentKey: 'bipolar'
        },
        {
            userId: 5034,
            ailmentKey: 'eating-disorder'
        },
        {
            userId: 5034,
            ailmentKey: 'personality-disorder'
        },
        {
            userId: 5034,
            ailmentKey: 'addiction'
        },

    ])
}

const down: Migration  = async ({context} : { context: QueryInterface}) => {
	await context.bulkDelete('User_Ailment', { userId: {
        [Op.between] : [5009, 5034]
    }} )
};

export { up, down }

