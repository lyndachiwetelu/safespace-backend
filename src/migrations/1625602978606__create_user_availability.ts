import { DataTypes, QueryInterface } from "sequelize"
import { Migration } from '../migration'

const up: Migration = async ({context} : { context: QueryInterface}) => {
    await context.createTable('User_Availability', {
        id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
        day: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
        from: {
			type: DataTypes.STRING,
			allowNull: false
		},
        to: {
			type: DataTypes.STRING,
			allowNull: false
		},
        userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
            references: {model: 'User', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		}
    })
}

const down: Migration  = async ({context} : { context: QueryInterface}) => {
	await context.dropTable('User_Availability', {})
};

export { up, down }

