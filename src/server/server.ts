import express from 'express';
import os from 'node:os';

import config from './config';

const server = express();

server.use(express.static('dist'));

server.set('view engine', 'ejs');

server.use('/', (req, res) => {
  res.render('index', {
    initialContent: 'Loading...',
  });
});

server.listen(config.PORT, config.HOST, () => {
  console.info(
    `Express server is listening at ${config.SERVER_URL}`,
    `Free Mem: ${os.freemem() / 1024 / 1024}`,
  );
});

// Pick back up here @ 8:20
// https://www.linkedin.com/learning/learning-full-stack-javascript-development-mongodb-node-and-react-15581237/middlewares-and-templating?autoSkip=true&autoplay=true&resume=false&u=74652290
