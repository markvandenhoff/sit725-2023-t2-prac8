const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://mongo_db:27017";

const client = new MongoClient(uri, {
    serverApi : {
        version: ServerApiVersion.v1,
        strict: true,
        depreciationErrors: true,
    }
});

client.connect();
module.exports = client;