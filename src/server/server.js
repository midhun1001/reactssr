import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from '../../webpack.config';
import fetch from 'node-fetch';

const app = express();

const indexPath = path.join(__dirname, '../index.html');
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: '/'
}))

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

app.get('/api/test', (req, res) => {
  fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then(res => res.json())
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.send(err);
    });
});


export default app;
