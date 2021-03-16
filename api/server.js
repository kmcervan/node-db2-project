const express = require('express');
const helmet = require('helmet');

// Router connections go here
const carsRouter = require('./cars/cars-router');

const server = express();

server.use(helmet());
server.use(express.json());

// Router breakpoints go here
server.use('/api/cars', carsRouter);

module.exports = server;