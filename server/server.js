import Airtable from "airtable";
import express from "express";
import { config } from "dotenv";
import cors from "cors";

config();

const port = process.env.SERVER_PORT;

Airtable.configure({
  endpointUrl: process.env.BASE_URL,
  apiKey: process.env.API_KEY,
});

const app = express();

app.use(cors());

const base = new Airtable({ apiKey: process.env.API_KEY }).base(
  "appP9Sdory1eUNZ2G"
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/stock", async (req, res) => {
  try {
    console.log("Accessing the server");
    const stockData = [];
    await base("stock")
      .select({
        maxRecords: 10,
        view: "Grid view",
      })
      .eachPage(function page(records, fetchNextPage) {
        records.forEach((record) => stockData.push(record));
        fetchNextPage();
      });
    res.status(200).json({
      status: "success",
      data: stockData,
    });
  } catch (error) {
    console.error(error);
  }
});

if (!port) {
  console.log("Missing PORT environment variable. Set it in .env file.");
}

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
