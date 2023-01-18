import express from 'express';

const server = express();

server.listen('8080', '0.0.0.0', () => {
  console.info(`Express server is listening at http://0.0.0.0:8080`)
})