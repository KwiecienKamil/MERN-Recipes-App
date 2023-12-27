import express from 'express'
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { userRouter } from './routes/users.js';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter)

const password = process.env.VITE_PASSWORD

mongoose.connect(`mongodb+srv://kamciu:${process.env.VITE_PASSWORD}@recipes.zuk04li.mongodb.net/recipes?retryWrites=true&w=majority`)

app.listen(3001, () => console.log("Server started"));