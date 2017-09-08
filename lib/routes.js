let { getDB, insertDoc, getDoc, updateDoc, removeDoc } = require('./ioFunctions');
let { onerror } = require('./errorFunctions');

module.exports.get = async (app, dbURL) => {
    app.get('/', async (req, res, next) => {
        try {
            let db = await getDB(dbURL);
            if (!db) throw new Error('the api is having trouble connecting to the database');
            let response = await getDoc(db);
            res.send(response);
            db.close();
        } catch (e) {
            next(e);
        }
    });
}

var schema = {
    key: 'value',
};

module.exports.create = async (app, dbURL) => {
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

module.exports.remove = async (app, dbURL) => {
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

module.exports.update = async (app, dbURL) => {
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