import { MongoClient, Collection, ObjectId } from 'mongodb';
import * as dotenv from 'dotenv'
dotenv.config()

export interface User {
    _id?: ObjectId;
    username: string;
    email: string;
    password: string;
}

const uri: any = process.env.URI;
const db = 'skillflash'
const client = new MongoClient(uri);
let usersCollection: Collection<User>

async function connect() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const usersDb = client.db(db)
        usersCollection = usersDb.collection<User>('users')
        usersCollection.drop()
        await usersCollection.createIndex({ username: 1 }, { unique: true });
        console.log('Array of existing users: ', await usersCollection.find().toArray())
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export { client, connect, usersCollection };