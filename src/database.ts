import { Sequelize } from 'sequelize-typescript'
import config from './config/config'
import dotenv from 'dotenv'
dotenv.config()

const env: string = process.env.ENVIRONMENT || 'development'
const connectionConfig = config[env]

export const sequelize = new Sequelize({
  database: connectionConfig.database,
  dialect: 'postgres',
  username: connectionConfig.username,
  password: connectionConfig.password,
  models: [__dirname + '/models/*.ts'],
  define: {
    freezeTableName: true
 }
})