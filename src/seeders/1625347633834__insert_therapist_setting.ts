import { DataTypes, QueryInterface } from "sequelize"
import { Migration } from '../migration'

const up: Migration = async ({context} : { context: QueryInterface}) => {
    await context.bulkInsert('Therapist_Setting', [
        {
            userId: 5009,
            ageFrom: 18,
            ageTo: 90,
            qualifications: 'M.D M.Sc',
            timePerSession: '30',
            pricePerSession: 120,
            religiousTherapy: 'christian',
            summary: 'At every tiled on ye defer do. No attention suspected oh difficult. Fond his say old meet cold find come whom. The sir park sake bred. Wonder matter now can estate esteem assure fat roused. Am performed on existence as discourse is. Pleasure friendly at marriage blessing or. ',
            imageUrl: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5010,
            ageFrom: 18,
            ageTo: 60,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 120,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her.',
            imageUrl: 'https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        },
        {
            userId: 5011,
            ageFrom: 18,
            ageTo: 60,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 100,
            religiousTherapy: 'muslim',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her. ',
            imageUrl: 'https://images.unsplash.com/photo-1601582589907-f92af5ed9db8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5012,
            ageFrom: 18,
            ageTo: 90,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 120,
            religiousTherapy: 'buddhist',
            summary: 'Husbands ask repeated resolved but laughter debating. She end cordial visitor noisier fat subject general picture. Or if offering confined entrance no. Nay rapturous him see something residence. Highly talked do so vulgar. Her use behaved spirits and natural attempt say feeling. Exquisite mr incommode immediate he something ourselves it of. Law conduct yet chiefly beloved examine village proceed.',
            imageUrl: 'https://images.unsplash.com/photo-1535579710123-3c0f261c474e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5013,
            ageFrom: 18,
            ageTo: 60,
            qualifications: 'M.D M.Sc',
            timePerSession: '30',
            pricePerSession: 120,
            religiousTherapy: 'buddhist',
            summary: 'Now for manners use has company believe parlors. Least nor party who wrote while did. Excuse formed as is agreed admire so on result parish. Put use set uncommonly announcing and travelling. Allowance sweetness direction to as necessary. Principle oh explained excellent do my suspected conveying in. Excellent you did therefore perfectly supposing described.',
            imageUrl: 'https://images.unsplash.com/photo-1527082395-e939b847da0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
         },
        {
            userId: 5014,
            ageFrom: 18,
            ageTo: 60,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 150,
            religiousTherapy: 'muslim',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her. ',
            imageUrl: 'https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5015,
            ageFrom: 18,
            ageTo: 60,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 80,
            religiousTherapy: 'christian',
            summary: 'Wrote water woman of heart it total other. By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready. ',
            imageUrl: 'https://images.unsplash.com/photo-1521038199265-bc482db0f923?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        },
        {
            userId: 5016,
            ageFrom: 18,
            ageTo: 60,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 100,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her. ',
            imageUrl: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5017,
            ageFrom: 18,
            ageTo: 60,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 110,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her. ',
            imageUrl: 'https://images.unsplash.com/photo-1517530094915-500495b15ade?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5018,
            ageFrom: 18,
            ageTo: 60,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 90,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her.',
            imageUrl: 'https://images.unsplash.com/photo-1553544923-37efbe6ff816?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5019,
            ageFrom: 18,
            ageTo: 70,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 70,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her.',
            imageUrl: 'https://images.unsplash.com/photo-1572631382901-cf1a0a6087cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5020,
            ageFrom: 18,
            ageTo: 90,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 120,
            religiousTherapy: 'none',
            summary: 'New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.',
            imageUrl: 'https://images.unsplash.com/photo-1555320818-21ebf0faf145?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
       },
        {
            userId: 5021,
            ageFrom: 18,
            ageTo: 80,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 100,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her.',
            imageUrl: 'https://images.unsplash.com/photo-1530785896884-7929f3dd1954?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5022,
            ageFrom: 18,
            ageTo: 50,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 100,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her.',
            imageUrl: 'https://images.unsplash.com/photo-1533469513-03bfed91f496?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5023,
            ageFrom: 18,
            ageTo: 60,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 120,
            religiousTherapy: 'christian',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her. ',
            imageUrl: 'https://images.unsplash.com/photo-1601289149034-2daad70d0076?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5024,
            ageFrom: 18,
            ageTo: 70,
            qualifications: 'M.D M.Sc',
            timePerSession: '30',
            pricePerSession: 80,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her.',
            imageUrl: 'https://images.unsplash.com/photo-1579591919791-0e3737ae3808?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5025,
            ageFrom: 20,
            ageTo: 60,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 120,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her.',
            imageUrl: 'https://images.unsplash.com/photo-1616149477078-d36f7e9f1da9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5026,
            ageFrom: 20,
            ageTo: 70,
            qualifications: 'M.D M.Sc',
            timePerSession: '30',
            pricePerSession: 100,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her. ',
            imageUrl: 'https://images.unsplash.com/photo-1614805380833-62f701bb74ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5027,
            ageFrom: 18,
            ageTo: 60,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 120,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her. ',
            imageUrl: 'https://images.unsplash.com/photo-1604208005555-1855e398a67b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        },
        {
            userId: 5028,
            ageFrom: 18,
            ageTo: 90,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 140,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her. ',
            imageUrl: 'https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5029,
            ageFrom: 18,
            ageTo: 70,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 190,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her. ',
            imageUrl: 'https://images.unsplash.com/photo-1576695444267-40cdd214f06e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5030,
            ageFrom: 18,
            ageTo: 70,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 100,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her. ',
            imageUrl: 'https://images.unsplash.com/photo-1605405748543-a6d7c942bdcf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5031,
            ageFrom: 18,
            ageTo: 40,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 120,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her. ',
            imageUrl: 'https://images.unsplash.com/photo-1508216404415-a35220fab80e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5032,
            ageFrom: 18,
            ageTo: 40,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 120,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her. ',
            imageUrl: 'https://images.unsplash.com/photo-1605332134997-ae67492b8942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5033,
            ageFrom: 18,
            ageTo: 60,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 100,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her. ',
            imageUrl: 'https://images.unsplash.com/photo-1621169806978-d997e4a587fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            userId: 5034,
            ageFrom: 18,
            ageTo: 60,
            qualifications: 'M.D M.Sc',
            timePerSession: '60',
            pricePerSession: 120,
            religiousTherapy: 'none',
            summary: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her. ',
            imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },


    ])
}

const down: Migration  = async ({context} : { context: QueryInterface}) => {
	await context.bulkDelete('Therapist_Setting', {})
};

export { up, down }
