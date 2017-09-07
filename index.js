'use strict';

// docker run --name mongo-docker -it -p 2000:27017 -d mongo
// docker exec -t -i mongo-docker /bin/bash

let { getDB, insertDoc, getDoc, updateDoc, removeDoc } = require('./ioFunctions');
let { onerror } = require('./errorFunctions');

const MongoClient = require('mongodb').MongoClient,
  assert = require('assert'),
  co = require('co'),
  express = require('express');;


let dbURL = 'mongodb://0.0.0.0:2000/database';

// co(function* () {
//   let db = yield getDB(dbURL);
//   // let insertResponse = yield insertDoc(db);
//   // console.log(insertResponse);

// getDoc(db);

//   // let updateResponse = yield updateDoc(db);
//   // console.log(updateResponse);

//   // let removeResponse = yield removeDoc(db);
//   // console.log(removeResponse);
//   db.close();
// }).catch(onerror);



// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
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

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);