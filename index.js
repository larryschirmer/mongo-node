'use strict';

// docker run --name mongo-docker -it -p 2000:27017 -d mongo
// docker exec -t -i mongo-docker /bin/bash

const express = require('express');;

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
let { create, get, remove, update } = require('./routes');
get(app);
create(app);
remove(app);
update(app);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);