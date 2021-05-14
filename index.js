'use strict'

const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const config = require('./config.js');
const animalRoutes =require( './routes/animal-router.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', animalRoutes.routes);




app.listen(config.port, () => console.log('App is running on port http://localhost:' +config.port))