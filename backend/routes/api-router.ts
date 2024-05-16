import express from 'express'
import { logIn, signUp } from '../controllers/user.controller';
const router = express.Router();

router
    .route('/')
    .get((req: express.Request, res: express.Response) => {
        res.status(200)
            .send('Hello, welcome to the server!')
    })

    router
    .route('/signup')
    .post(signUp)

    router
    .route('/login')
    .post(logIn)

export default router