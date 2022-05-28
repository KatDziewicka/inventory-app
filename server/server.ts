import Airtable from 'airtable';
import express from 'express';
import { config } from "dotenv";
import cors from "cors";

config();

const port = process.env.PORT;

Airtable.configure({
    endpointUrl: process.env.BASE_URL,
    apiKey: process.env.API_KEY,
});

const app = express();

app.use(cors());

const base = new Airtable({apiKey: process.env.API_KEY}).base('appP9Sdory1eUNZ2G');

app.get("/stock", async (req, res) => {
    await base('Table 1').select({
        maxRecords: 3,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            console.log('Retrieved', record);
        });
        fetchNextPage();
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
  });

if (!port) {
  console.log("Missing PORT environment variable. Set it in .env file.");
};

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
