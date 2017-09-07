'use strict';

// docker run --name mongo-docker -it -p 2000:27017 -d mongo
// docker exec -t -i mongo-docker /bin/bash

const MongoClient = require('mongodb').MongoClient,
  assert = require('assert'),
  co = require('co'),
  express = require('express');;


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
let { get } = require('./routes');
get(app);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);