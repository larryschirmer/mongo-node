'use strict';

// docker run --name mongo-docker -it -p 2000:27017 -d mongo
// docker exec -t -i mongo-docker /bin/bash

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const DBPORT = 2000;
const DBNAME = 'database';
const DBURL = `mongodb://0.0.0.0:${DBPORT}/${DBNAME}`;

// App
const app = express();
let { create, get, remove, update } = require('./routes');
get(app, DBURL);
create(app, DBURL);
remove(app, DBURL);
update(app, DBURL);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);