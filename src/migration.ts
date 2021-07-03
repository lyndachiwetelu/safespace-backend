import { Sequelize } from 'sequelize';
import { Umzug, SequelizeStorage } from 'umzug';
import * as dotenv from 'dotenv'
import config from './config/config'
dotenv.config(); 

const env: string = process.env.ENVIRONMENT || 'development'
const connectionConfig = config[env]

const direction = process.argv[2]
const migrationType = process.argv[3]

const path: string = migrationType === '--seed' ? 'src/seeders/*.ts' : 'src/migrations/*.ts'

const sequelize = new Sequelize({  
    database: connectionConfig.database,
    dialect: 'postgres',
    username: connectionConfig.username,
    password: connectionConfig.password,
});

const umzug = new Umzug({
  migrations: { glob: path },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

// export the type helper exposed by umzug, which will have the `context` argument typed correctly
export type Migration = typeof umzug._types.migration;

(async () => {
  console.log(direction)
    if (direction === '--up'){
      await umzug.up();
    }
    else if (direction === '--down'){
      await umzug.down({ to: 0 });
    }
    else {
      console.log('pass --up or --down to "yarn migrate"')
    }
})();


