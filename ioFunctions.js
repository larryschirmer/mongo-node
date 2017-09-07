var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

let { onerror } = require('./errorFunctions');

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
    }).catch(onerror);
}

var schema = {
    key: 'value',
};

module.exports.insertDoc = db => {
    return new Promise((res, rej) => {
        db.collection('docs').insertOne(schema, (err, result) => {
            assert.equal(err, null);
            console.log("Inserted a document into the docs collection.");
            res('done');
        });
    }).catch(onerror);
};

module.exports.getDoc = db => {
    return new Promise((res, rej) => {
        let cursor = db.collection('docs').find();
        cursor.forEach(entry => {
            let output = JSON.stringify(entry, null, 4);
            console.log(output);
        })
    }).catch(onerror);
};

module.exports.updateDoc = db => {
    return new Promise((res, rej) => {
        let cursor = db.collection('docs').updateOne(
            { "key": "value (New)" },
            {
                $set: { "key": "value" }
            }, (err, result) => {
                res('value changed');
            })
    }).catch(onerror);
};