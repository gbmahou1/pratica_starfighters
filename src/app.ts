import cors from 'cors';
import express, {json} from "express";
import fighterRouter from './router/fightersRouter';
import dotenv from 'dotenv';

const app = express()

dotenv.config()

app.use(cors())
app.use(json())
app.use(fighterRouter)

const PORT: number = Number(process.env.PORT)

app.listen(PORT, () => console.log("rodando"))