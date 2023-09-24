/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import { Document, MongoClient, WithId } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error("Please add MONGODB URI to .env");
}

const options = {};

export default async function handler(
  _request: any,
  _response: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: WithId<Document>[]): void; new (): any };
    };
  }
) {
  let client: MongoClient;

  try {
    client = await new MongoClient(MONGODB_URI, options).connect();
    const collect = client.db("Dashboard").collection("kpis");
    const results = await collect.find().toArray();
    _response.status(200).json(results);
  } catch (e) {
    return
  }
}
