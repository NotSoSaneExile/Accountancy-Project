const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://Mefro:Z8BdZ4XVNznefj3e@cluster0.ozzdd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('accountancyDB');
    const accounts = database.collection('accounts');

    // Query for a movie that has the title 'Back to the Future'
    const query = { name: 'Zapasy' };
    const account = await accounts.findOne(query);

    console.log(account);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);