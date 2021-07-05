import dotenv from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";
import { sequelize } from "./database";
import cookieParser from 'cookie-parser'
import UserRouter from "./routes/UserRouter"
import TherapistRouter from "./routes/TherapistRouter"
import { ErrorHandler, handleError } from "./error";
import cors from 'cors'


// initialize configuration
dotenv.config();
const port: string | number = process.env.SERVER_PORT || 8000;
const baseUrl: string = process.env.BASE_URL || "http://localhost"
const app: Application = express();

const corsOptions = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200,
  credentials: true
}

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())
app.use('/api/v1/users', UserRouter);
app.use('/api/v1/therapists', TherapistRouter);

app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  handleError(err, res);
});

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

