import bcrypt from 'bcrypt'
import express from 'express'
import { collection } from '../../database/seeds/seed'
import { connectDB } from '../../database/connection'
const app = express()
app.use(express.json())

export const signUp = async (req: express.Request, res: express.Response) => {
    
    console.log(req.body)
    const user = req.body
    const hash = await bcrypt.hash(user.password, 10)
    user.password = hash
    try {
        await connectDB()
        const result = await collection.insertOne(user)
        res.status(201)
            .send({ ...user, _id: result.insertedId })
    } catch (error) {
        console.error('An error occured', error)
        res.status(500)
            .send(error)
    }
    console.log('Array of existing users: ', await collection.find().toArray())
}

export const logIn = async (req: express.Request, res: express.Response) => {
    await connectDB()
    const { username, password } = req.body
    console.log(req.body)
    const user = await collection.findOne({ username })
    if (!user) {
        res.status(404)
            .send('No user with that username found')
    }

    if (user) {
        const isValid = await bcrypt.compare(password, user.password)
        isValid
            ? res.status(200).send('Logged in successfully!')
            : res.status(401).send('Invalid credentials')
    }
}