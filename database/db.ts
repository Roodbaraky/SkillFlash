import { MongoClient, Collection, ObjectId } from 'mongodb';

export interface User {
    _id?: ObjectId;
    username: string;
    email: string;
    password: string;
}

const uri = 'mongodb://localhost:27017';
const db = 'USERS'
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