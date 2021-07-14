import { DataTypes, QueryInterface } from "sequelize"
import { Migration } from '../migration'

const up: Migration = async ({context:queryInterface} : { context: QueryInterface}) => {
    await queryInterface.createTable('Invite_Code', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        }


    })
}

const down: Migration  = async ({context: queryInterface} : { context: QueryInterface}) => {
	await queryInterface.dropTable('Invite_Code')
};

export { up, down }

