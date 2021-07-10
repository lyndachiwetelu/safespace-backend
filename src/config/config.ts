import dotenv from 'dotenv'
dotenv.config();

const config : any = {
    development: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: "safespace",
      host: process.env.DB_HOST,
      dialect: "postgres"
    },
    test: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: "safespace_test",
      host: process.env.DB_HOST,
      dialect: "postgres"
    },
    production: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: "safespace",
      host: process.env.DB_HOST,
      dialect: "postgres"
    }
  }

  export default config