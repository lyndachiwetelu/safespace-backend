import { DataTypes, QueryInterface } from "sequelize"
import { Migration } from '../migration'

const up: Migration = async ({context} : { context: QueryInterface}) => {
    await context.createTable('Therapist_Setting', {
        id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
        userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
            references: {model: 'User', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            unique: true
		},
		ageFrom: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
        ageTo: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
        qualifications: {
			type: DataTypes.STRING,
			allowNull: false
		},
        timePerSession: {
			type: DataTypes.ENUM('30', '60'),
			allowNull: false
		},
        pricePerSession: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
        religiousTherapy: {
			type: DataTypes.ENUM('none', 'muslim', 'christian', 'hindu', 'buddhist'),
			allowNull: false
		},
        couplesTherapy: {
			type: DataTypes.BOOLEAN,
            defaultValue: false,
		},
        summary: {
			type: DataTypes.TEXT,
			allowNull: false
		},
        imageUrl: {
			type: DataTypes.STRING,
			allowNull: false
		},
        

    })
}

const down: Migration  = async ({context} : { context: QueryInterface}) => {
	await context.dropTable('Therapist_Setting')
};

export { up, down }

