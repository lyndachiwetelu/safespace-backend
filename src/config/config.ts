import dotenv from 'dotenv'
dotenv.config();

const config : any = {
    development: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: "safespace",
      host: "127.0.0.1",
      dialect: "postgres"
    },
    test: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: "safespace_test",
      host: "127.0.0.1",
      dialect: "postgres"
    },
    production: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: "safespace",
      host: "127.0.0.1",
      dialect: "postgres"
    }
  }

  export default config