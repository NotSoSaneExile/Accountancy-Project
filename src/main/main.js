import { MongoClient } from "mongodb";
import { Asset } from "../classes/assets.js";
//Obsługa bazy danych
const uri =
  "mongodb+srv://Mefro:Z8BdZ4XVNznefj3e@cluster0.ozzdd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
//
const Zapasy = new Asset("Zapasy", 0, 10000);

async function main() {
  try {
    await client.connect();

    const database = client.db('accountancyDB');
    const accounts = database.collection('accounts');
    const assets = database.collection('assets');
    const liabilities = database.collection('liabilities');
    const balance = database.collection('balance');
    await assets.insertOne(Zapasy);
    console.log(Zapasy);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
main().catch(console.dir);