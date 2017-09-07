// docker run --name mongo-docker -it -p 2000:27017 -d mongo
// docker exec -t -i mongo-docker /bin/bash

let { getDB, insertDoc } = require('./ioFunctions');
let { onerror } = require('./errorFunctions');

let MongoClient = require('mongodb').MongoClient,
  assert = require('assert'),
  co = require('co');


let dbURL = 'mongodb://0.0.0.0:2000/database';

co(function* () {
  let db = yield getDB(dbURL);
  let response = yield insertDoc(db);
  console.log(response);
  db.close();
}).catch(onerror);