const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://localhost:27018";

const client = new MongoClient(uri, {
    serverApi : {
        version: ServerApiVersion.v1,
        strict: true,
        depreciationErrors: true,
    }
});

client.connect();
module.exports = client;