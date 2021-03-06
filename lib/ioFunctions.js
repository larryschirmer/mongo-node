var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

let { onerror } = require('./errorFunctions');

module.exports.getDB = addr => {
    // Connection URL
    var url = addr;

    return new Promise((res, rej) => {
        // Use connect method to connect to the server
        MongoClient.connect(url, function (err, db) {
            // assert.equal(null, err);
            // console.log('Connected successfully to server');
            if (err) rej(err);
            res(db);
        })
    }).catch(onerror);
}

module.exports.insertDoc = (db, schema) => {
    return new Promise((res, rej) => {
        db.collection('docs').insertOne(schema, (err, result) => {
            assert.equal(err, null);
            res('done');
        });
    }).catch(onerror);
};

module.exports.getDoc = async db => {
    try {
        let arr = await db.collection('docs').find({}).toArray();
        return arr;
    } catch (e) {
        onerror(e);
    }
};

module.exports.updateDoc = db => {
    return new Promise((res, rej) => {
        let cursor = db.collection('docs').updateOne(
            { "key": "value" },
            {
                $set: { "key": "value (New)" }
            }, (err, result) => {
                res('value changed');
            })
    }).catch(onerror);
};

module.exports.removeDoc = db => {
    return new Promise((res, rej) => {
        db.collection('docs').deleteOne(
            { "key": "value" },
            (err, result) => {
                res('value changed');
            })
    })
};