var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

module.exports.getDB = addr => {
        // Connection URL
        var url = addr;
      
        return new Promise((res, rej) => {
          // Use connect method to connect to the server
          MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            console.log('Connected successfully to server');
            res(db);
          })
        })
      }

var schema = {
    key: 'value',
};

module.exports.insertDoc = db => {
    return new Promise((res, rej) => {
        db.collection('docs').insertOne(schema, (err, result) => {
            assert.equal(err, null);
            console.log("Inserted a document into the restaurants collection.");
            res('done');
        });
    })
};