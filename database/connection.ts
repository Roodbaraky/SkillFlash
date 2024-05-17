import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri: string = process.env.URI || "";

const client: MongoClient = new MongoClient(uri);

const connectDB = async (): Promise<void> => {
	try {
		await client.connect();
		console.log("MongoDB connected successfully");
	} catch (error) {
		// console.error("MongoDB connection failed:", error.message);
		process.exit(1);
	}
};

export { connectDB, client };
