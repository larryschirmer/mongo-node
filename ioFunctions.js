var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

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