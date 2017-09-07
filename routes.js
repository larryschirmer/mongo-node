let { getDB, insertDoc, getDoc, updateDoc, removeDoc } = require('./ioFunctions');
let { onerror } = require('./errorFunctions');

let dbURL = 'mongodb://0.0.0.0:2000/database';

module.exports.get = async app => {
    app.get('/', async (req, res) => {
        try {
            let db = await getDB(dbURL);
            let response = await getDoc(db);
            res.send(response);
            db.close();
        } catch (e) {
            onerror(e);
        }
    });
}

var schema = {
    key: 'value',
};

module.exports.create = async app => {
    app.post('/', async (req, res) => {
        try {
            let db = await getDB(dbURL);
            let insertResponse = await insertDoc(db, schema);
            res.send(insertResponse);
            db.close();
        } catch (e) {
            onerror(e);
        }
    });
}

module.exports.remove = async app => {
    app.delete('/', async (req, res) => {
        try {
            let db = await getDB(dbURL);
            let removeResponse = await removeDoc(db);
            res.send(removeResponse);
            db.close();
        } catch (e) {
            onerror(e);
        }
    });
}

module.exports.update = async app => {
    app.patch('/', async (req, res) => {
        try {
            let db = await getDB(dbURL);
            let updateResponse = await updateDoc(db);
            res.send(updateResponse);
            db.close();
        } catch (e) {
            onerror(e);
        }
    });
}