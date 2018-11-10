const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'starward';
const client = new MongoClient(url);
// Use Method

client.connect(function(err) {
    assert.equal(null, err);
    console.log('Conection successful to server');

    const db = client.db(dbName);

        client.close();
   
});