import { DataTypes, QueryInterface } from "sequelize"
import { Migration } from '../migration'

const up: Migration = async ({context : queryInterface }: { context: QueryInterface}) => {
    await queryInterface.createTable('Session_Message', {
        id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
        sessionId: {
			type: DataTypes.INTEGER,
			allowNull: false,
            references: {model: 'User_Session', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
		},
        userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
            references: {model: 'User', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
		},
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
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

const down: Migration  = async ({context: queryInterface} : { context: QueryInterface}) => {
	await queryInterface.dropTable('Session_Message')
};

export { up, down }

