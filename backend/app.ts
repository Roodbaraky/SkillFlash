import express from 'express'
export const app = express();
import router from './routes/api-router'
import cors from 'cors'
app.use(express.json())

app.use('/', router)