import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";

/* SERVER CONFIGURATION */
dotenv.config();

const uri: string = process.env.MONGODB_URI || "";
const options = {};

interface DatabaseConnection {
  mongoClient: MongoClient;
  database: Db;
}

let mongoClient: MongoClient | null = null;
let database: Db | null = null;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

export async function connectToDatabase(): Promise<DatabaseConnection> {
  if (mongoClient && database) {
    return { mongoClient, database };
  }

  try {
    mongoClient = await new MongoClient(uri, options).connect();
    database = await mongoClient.db("Dashboard");
    return { mongoClient, database };
  } catch (e) {
    console.error(e);
    throw new Error("Failed to connect to the database");
  }
}
