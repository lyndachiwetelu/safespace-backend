import { DataTypes, QueryInterface } from "sequelize"
import { Migration } from '../migration'

const up: Migration = async ({context} : { context: QueryInterface}) => {
    await context.createTable('User_Ailment', {
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
            onDelete: 'CASCADE'
		},
		ailmentKey: {
			type: DataTypes.STRING(60),
			allowNull: false
		},
    })
}

const down: Migration  = async ({context} : { context: QueryInterface}) => {
	await context.dropTable('User_Ailment')
};

export { up, down }

