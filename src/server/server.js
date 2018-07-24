import path from 'path';
import express from 'express';
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


export default app;
