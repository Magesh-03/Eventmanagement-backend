import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/bookingRoutes.js";
import cors from "cors";
import userRoutes from "./router/user.js";
import bodyParser from 'body-parser'
import Users from "./models/user.js";
import bookingRoutes from './router/bookingRoutes.js'

const app = express();

app.use(express .json());

dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', bookingRoutes);

app.use('/users',userRoutes);


dbConnection();

export default app;