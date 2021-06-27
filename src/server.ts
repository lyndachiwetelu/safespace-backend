import dotenv from "dotenv";
import express from "express";
import BaseRouter from "./routes/BaseRouter"

// initialize configuration
dotenv.config();
const port = process.env.SERVER_PORT || 8000;
const baseUrl = process.env.BASE_URL || "http://localhost"
const app = express();

app.use(express.json())
app.use('/', BaseRouter)

app.listen( port, () => {
    console.log( `server started at ${ baseUrl }:${ port }` );
} );