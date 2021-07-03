import { DataTypes, QueryInterface } from "sequelize"
import { Migration } from '../migration'

const up: Migration = async ({context} : { context: QueryInterface}) => {
    await context.createTable('User_Setting', {
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
		age: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
        hasHadTherapy: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
        religiousTherapy: {
			type: DataTypes.ENUM('none', 'muslim', 'christian', 'hindu', 'buddhist'),
			allowNull: false
		},
        couplesTherapy: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
    })
}

const down: Migration  = async ({context} : { context: QueryInterface}) => {
	await context.dropTable('User_Setting')
};

export { up, down }

