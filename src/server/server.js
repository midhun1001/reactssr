import path from 'path';
import express from 'express';
import cors from 'cors';
import webpack from 'webpack';
import config from '../../webpack.config';

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
  return res.send({ status: 200 });
});

app.use(cors());


export default app;
