import dotenv from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";
import { sequelize } from "./database";
import cookieParser from 'cookie-parser'
import UserRouter from "./routes/UserRouter"
import TherapistRouter from "./routes/TherapistRouter"
import SessionRouter from "./routes/SessionRouter"
import AvailabilityRouter from "./routes/AvailabilityRouter"
import InviteCodeRouter from "./routes/InviteCodeRouter"
import { ErrorHandler, handleError } from "./error";
import cors from 'cors'
import { ExpressPeerServer } from 'peer'
import { Server } from 'socket.io';
import http from 'http'
import fs from 'fs'


// initialize configuration
dotenv.config();
const port: number = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 8000
const baseUrl: string = process.env.BASE_URL || "http://localhost"
const app: Application = express();
const origins: any = process.env.ORIGINS || ''


const allowlist = origins.split(',')
const corsOptionsDelegate = (req: Request, callback: CallableFunction) => {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true, optionsSuccessStatus: 204,
      credentials: true } 
  } else {
    corsOptions = { origin: false } 
  }
  callback(null, corsOptions)
}

app.use(cookieParser())
app.use(express.json())
app.use(cors(corsOptionsDelegate))
app.use('/api/v1/users', UserRouter);
app.use('/api/v1/therapists', TherapistRouter);
app.use('/api/v1/availabilities', AvailabilityRouter);
app.use('/api/v1/sessions', SessionRouter);
app.use('/api/v1/invite', InviteCodeRouter);

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

  const server = http.createServer(app);
  const ioServer = new Server( server, {
    cors: {
      origin: allowlist,
      methods: ["GET", "POST"]
    },
  } );

  ioServer.on('connection', (socket) => {
    console.log('USER CONNECTED', socket.client.conn.remoteAddress)

    socket.on("join-room", (roomId, userId, username) => {
      console.log('Client joined room! ', roomId, username);
      socket.join(roomId);
      socket.to(roomId).emit("user-connected", userId, roomId, username);
    });

    socket.on("user-left-video-call", (data:any) => {
      console.log('User left the video call in room: ', data.room);
      socket.join(data.room);
      socket.to(data.room).emit("user-left-the-video-call");
    });

    socket.on("user-left-voice-call", (data:any) => {
      console.log('User left the voice call in room: ', data.room);
      socket.join(data.room);
      socket.to(data.room).emit("user-left-the-voice-call");
    });

    socket.on("user-disconnected", (data:any) => {
      console.log('Peer Client disconnected:', data.id);
      socket.join(data.room);
      socket.to(data.room).emit("peer-disconnected", data.id);
    });

    socket.on("send-message", (roomId, userId, message) => {
      console.log('A message was sent', message);
      socket.join(roomId);
      socket.broadcast.emit("message", userId, message);
      }
    )

    socket.on("disconnect", () => {
      socket.removeAllListeners();
      console.log('DISCONNECTION');
    });
  });


  const serverListening = server.listen( port, () => {
    console.log( `server started at ${ baseUrl }:${ port }` );
  } );

  let options = { key: '', cert: ''}
  if (process.env.SSL_CERT && process.env.SSL_KEY) {
    options = {
      key: fs.readFileSync(process.env.SSL_KEY || '').toString(),
      cert: fs.readFileSync(process.env.SSL_CERT || '').toString(),
    } 
  }
  const peerServer = ExpressPeerServer( serverListening, {
    proxied: process.env.ENVIRONMENT === 'production' ? true : false,
    ssl: options
  } );
  app.use('/chat', peerServer);

  
  peerServer.on('connection', (client) => {
    console.log(client.getId(), 'Client Connected!')
  });

  peerServer.on('disconnect', (client) => {
    console.log(client.getId(), 'Client Disconnected!')
  });

}) ()



