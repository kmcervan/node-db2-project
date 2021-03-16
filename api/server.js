const express = require('express');
const helmet = require('helmet');

// Router connections go here

const server = express();

server.use(helmet());
server.use(express.json());

// Router breakpoints go here

module.exports = server;