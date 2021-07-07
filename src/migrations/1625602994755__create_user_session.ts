import { DataTypes, QueryInterface } from "sequelize"
import { Migration } from '../migration'

const up: Migration = async ({context: queryInterface} : { context: QueryInterface}) => {
    await queryInterface.createTable('User_Session', {
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
        requestedBy: {
			type: DataTypes.INTEGER,
			allowNull: false,
            references: {model: 'User', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
		},
        therapist: {
			type: DataTypes.INTEGER,
			allowNull: false,
            references: {model: 'User', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
		},
        availabilityId: {
			type: DataTypes.INTEGER,
			allowNull: false,
            references: {model: 'User_Availability', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
		},
        status: {
            type: DataTypes.ENUM('created', 'confirmed', 'past', 'active', 'cancelled'),
            allowNull: false,
            defaultValue: 'created'
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
	await queryInterface.dropTable('User_Session', {})
};

export { up, down }

