import express from 'express'
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { userRouter } from './routes/users.js';
import { recipesRouter } from './routes/recipes.js';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter)
app.use("/recipes", recipesRouter)


mongoose.connect(`mongodb+srv://kamciu:${process.env.VITE_PASSWORD}@recipes.zuk04li.mongodb.net/recipes?retryWrites=true&w=majority`)

app.listen(3001, () => console.log("Server started"));