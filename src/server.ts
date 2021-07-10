import dotenv from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";
import { sequelize } from "./database";
import cookieParser from 'cookie-parser'
import UserRouter from "./routes/UserRouter"
import TherapistRouter from "./routes/TherapistRouter"
import SessionRouter from "./routes/SessionRouter"
import AvailabilityRouter from "./routes/AvailabilityRouter"
import { ErrorHandler, handleError } from "./error";
import cors from 'cors'


// initialize configuration
dotenv.config();
const port: string | number = process.env.SERVER_PORT || 8000;
const baseUrl: string = process.env.BASE_URL || "http://localhost"
const app: Application = express();
const origins: any = process.env.ORIGINS || []


var allowlist = origins.split(',')
var corsOptionsDelegate = function (req: Request, callback: CallableFunction) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true, optionsSuccessStatus: 204,
      credentials: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate))
app.use(cookieParser())
app.use(express.json())
app.use('/api/v1/users', UserRouter);
app.use('/api/v1/therapists', TherapistRouter);
app.use('/api/v1/availabilities', AvailabilityRouter);
app.use('/api/v1/sessions', SessionRouter);

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

