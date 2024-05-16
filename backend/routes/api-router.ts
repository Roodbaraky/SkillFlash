import express from 'express'
const router = express.Router();

router.route('/')
    .get((req: express.Request, res: express.Response) => {
        res.status(200)
            .send('Hello, welcome to the server!')
    })

export default router