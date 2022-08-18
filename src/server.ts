import "reflect-metadata"
import cors from 'cors';
import express from 'express'

import "./database"
import { routes } from "./routes"

const app = express()

app.use(express.json())
app.use(routes);
app.use(cors())

app.listen(3000, () => console.log("Server is running"));