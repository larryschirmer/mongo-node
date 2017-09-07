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