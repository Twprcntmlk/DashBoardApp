// /* eslint-disable no-undef */
// import { MongoClient, ServerApiVersion } from "mongodb";
// // import kpiRoutes from "./routes/kpi.js";
// // import productRoutes from "./routes/product.js";
// // import transactionRoutes from "./routes/transaction.js";
// // import KPI from "./models/KPI.js";
// // import Product from "./models/Product.js";
// // import Transaction from "./models/Transaction.js";
// // import { kpis, products, transactions } from "../server/data/data.js";

// import dotenv from "dotenv";

// /* SERVER CONFIGURATION */
// dotenv.config();
// const MONGODB_URI = process.env.MONGODB_URI;

// const setup = async () => {
//   let client;

//   try {
//     client = new MongoClient(MONGODB_URI, {
//       serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//       },
//     });

//     await client.connect();

//     // const [kpiCount, productCount, transactionCount] = await Promise.all([
//     //   client.db("Dashboard").collection("kpis").countDocuments(),
//     //   client.db("Dashboard").collection("products").countDocuments(),
//     //   client.db("Dashboard").collection("products").countDocuments(),
//     // ]);
//     // let hasData = !kpiCount || !productCount || !transactionCount;
//     let hasData = true;
//     // if (hasData) {
//     //   // Handle case when any of the collections is empty
//     //   if (!kpiCount) {
//     //     await client.db("Dashboard").collection("kpis").insertMany(kpis);
//     //   }
//     //   if (!productCount) {
//     //     await client
//     //       .db("Dashboard")
//     //       .collection("products")
//     //       .insertMany(products);
//     //   }
//     //   if (!transactionCount) {
//     //     await client
//     //       .db("Dashboard")
//     //       .collection("transactions")
//     //       .insertMany(transactions);
//     //   }
//     // }

//     // if (hasData) {
//     //   console.log("Database already exists with data");
//     //   client.close();
//     //   return;
//     // }

//     // if (insert.acknowledged) {
//     //   console.log("Successfully inserted records");
//     // }
//   } catch (error) {
//     return "Database is not ready yet";
//   } finally {
//     if (client) {
//       await client.close();
//     }
//   }
// };

// (async () => {
//   try {
//     await setup();
//   } catch {
//     console.warn("Database is not ready yet. Skipping seeding...");
//   }
// })();

// export { setup };
