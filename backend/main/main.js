import { MongoClient } from "mongodb";
import { Asset } from "../classes/assets.js";
import { Account } from "../classes/accounts.js";
import { economicOperation } from "../classes/economicOperations.js";
import { Liability } from "../classes/liabilities.js";
import { Balance } from "../classes/balance.js";
//Obsługa bazy danych
const uri =
  "mongodb+srv://Mefro:Z8BdZ4XVNznefj3e@cluster0.ozzdd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

//Funkcja wykonująca.
async function main() {
  try {
    await client.connect();

    const database = client.db('accountancyDB');
    const accounts = database.collection('accounts');
    const assets = database.collection('assets');
    const liabilities = database.collection('liabilities');
    const balance = database.collection('balance');
  
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
main().catch(console.dir);