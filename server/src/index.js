import express from 'express'
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const password = process.env.VITE_PASSWORD

mongoose.connect(`mongodb+srv://kamciu:${process.env.VITE_PASSWORD}@recipes.zuk04li.mongodb.net/recipes?retryWrites=true&w=majority`)

app.listen(3001, () => console.log("Server started"));