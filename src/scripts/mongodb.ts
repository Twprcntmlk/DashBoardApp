/* eslint-disable no-undef */
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

/* SERVER CONFIGURATION */
dotenv.config();

let cachedClient: MongoClient | null = null;
const MONGO_URL: string = process.env.MONGO_URL || "";

async function run() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();

  // Create references to the database and collection in order to run
  // operations on them.


  cachedClient = client;
  return client;
}
