
import { Collection } from "mongodb";
import { seedHasher } from "../data/test_data/preseed";
import { connectDB, client } from "../connection";

export interface User {
	username: string;
	email: string;
	password: string;
}

const database = client.db("skillflash");
export const collection: Collection<User> = database.collection("test_users");

const seedDB = async (): Promise<void> => {
	const hashedSeed:User[] = await seedHasher()
	try {
		await connectDB();
		console.log("Connected to MongoDB for seeding");



		await collection.deleteMany({});

		// Insert seed data
		const result = await collection.insertMany(hashedSeed);
		console.log(`Inserted ${result.insertedCount} documents`);
	} catch (error) {
		// console.error("Error seeding data:", error.message);
	} finally {
		await client.close();
		console.log("Closed MongoDB connection");
	}
};

seedDB();

