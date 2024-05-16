import express from 'express'
export const app = express();
// const apiRouter = require('./routes/api-router');
import cors from 'cors'

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200)
        .send('Hello, welcome to the server!')
})
