// docker run --name mongo-docker -it -p 2000:27017 -d mongo
// docker exec -t -i mongo-docker /bin/bash

let { insertDoc } = require('./ioFunctions');
// let { onerror } = require('./errorFunctions');

let MongoClient = require('mongodb').MongoClient,
  assert = require('assert'),
  co = require('co');

// Connection URL
var url = 'mongodb://0.0.0.0:2000/pathfinding';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log('Connected successfully to server');
  insertDoc(db).then(console.log);
  db.close();
});

// co(function* () {

// }).catch(onerror);