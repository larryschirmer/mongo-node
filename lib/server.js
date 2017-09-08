'use strict';

// -- Turning on and entering the Database Container
// docker run --name mongo-docker-db -it -p 2000:27017 -d mongo
// docker run --name mongo-docker-db -it -p 2000:27017 --net=mongo-docker-net -d mongo
// docker exec -t -i mongo-docker-db /bin/bash

// -- Building and Turning on the API container
// docker build -t larryschirmer/mongo-docker .
// docker run --name mongo-docker-api -p 1234:8080 -d larryschirmer/mongo-docker
// docker run --name mongo-docker-api -p 1234:8080 --net=mongo-docker-net -d larryschirmer/mongo-docker

// docker exec -ti mongo-docker-api ping mongo-docker-db
// docker network inspect mongo-docker-net

/* 
docker container stop mongo-docker-api
docker container rm mongo-docker-api
docker container stop mongo-docker-db
docker container rm mongo-docker-db
*/

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const DBPORT = 2001;
const DBNAME = 'database';
const DBURL = `mongodb://0.0.0.0:${DBPORT}/${DBNAME}`;

// App
const app = express();



let { create, get, remove, update } = require('./routes');
get(app, DBURL);
create(app, DBURL);
remove(app, DBURL);
update(app, DBURL);

app.use(function(err, req, res, next) {
    res.status(500).send(`Sorry about that: ${err.message}`);
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);