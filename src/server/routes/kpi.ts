// import { connectToDatabase } from "@/scripts/mongodb";
import { MongoClient } from "mongodb";
import {
  GetKpisResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "@/server/routes/types";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URL: string = process.env.MONGO_URL || "";
// getKpis: build.query<Array<GetKpisResponse>, void>({
//   query: () => "kpi/kpis/",
//   providesTags: ["Kpis"],
// }),
// getProducts: build.query<Array<GetProductsResponse>, void>({
//   query: () => "product/products/",
//   providesTags: ["Products"],
// }),
// getTransactions: build.query<Array<GetTransactionsResponse>, void>({
//   query: () => "transaction/transactions/",
//   providesTags: ["Transactions"],
// Promise<GetKpisResponse>
export async function getKpis() {
  const client = new MongoClient(MONGO_URL);
  try {
    console.log("working");
    await client.connect();
    const collect = client.db("Dashboard").collection("kpis");
    const results = await collect.find();
    console.log(results);
  } catch (error) {
    console.error("Error fetching KPIs:", error);
    throw error; // You might want to throw the error or handle it differently based on your application's needs.
  } finally {
    await client.close();
  }
  // const collect = client.db("Dashboard").collection("kpis");

  // const results = await collect.find().toArray();

  // const formattedResults: GetKpisResponse[] = results.map((doc) => ({
  //   id: doc._id.toHexString(),
  //   _id: doc._id.toHexString(),
  //   __v: doc.__v,
  //   totalProfit: doc.totalProfit,
  //   totalRevenue: doc.totalRevenue,
  //   totalExpenses: doc.totalExpenses,
  //   expensesByCategory: doc.expensesByCategory,
  //   monthlyData: doc.monthlyData,
  //   dailyData: doc.dailyData,
  //   createdAt: doc.createdAt,
  //   updatedAt: doc.updatedAt,
  // }));
  // console.log(formattedResults);
  // return formattedResults;
}
//  console.log(getKpis())
// router.get("/kpis", async (req, res) => {
//   try {
//     const kpis = await KPI.find();
//     res.status(200).json(kpis);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });
