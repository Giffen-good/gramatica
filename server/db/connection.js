const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("Gramatica").collection("collaborative-work-docs\n");
  // perform actions on the collection object
  console.log(collection)
  client.close();
});

module.exports = client
