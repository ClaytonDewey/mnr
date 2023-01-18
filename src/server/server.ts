import express from 'express';

const server = express();

server.use(express.static('dist'));

server.set('view engine', 'ejs')

server.use('/', (req, res) => {
  res.render('index');
})

server.listen('8080', '0.0.0.0', () => {
  console.info(`Express server is listening at http://0.0.0.0:8080`)
})

// Pick back up here @ 8:20
// https://www.linkedin.com/learning/learning-full-stack-javascript-development-mongodb-node-and-react-15581237/middlewares-and-templating?autoSkip=true&autoplay=true&resume=false&u=74652290