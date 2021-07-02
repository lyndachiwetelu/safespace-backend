import dotenv from "dotenv";
import express, { Application } from "express";
import { sequelize } from "./database";
import UserRouter from "./routes/UserRouter"

// initialize configuration
dotenv.config();
const port: string | number = process.env.SERVER_PORT || 8000;
const baseUrl: string = process.env.BASE_URL || "http://localhost"
const app: Application = express();

app.use(express.json())
app.use('/api/v1/users', UserRouter);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  app.listen( port, () => {
    console.log( `server started at ${ baseUrl }:${ port }` );
  } );
}) ()

