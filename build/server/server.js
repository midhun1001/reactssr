'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpack3 = require('../../webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var indexPath = _path2.default.join(__dirname, '../index.html');
var compiler = (0, _webpack2.default)(_webpack4.default);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: '/'
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function (req, res) {
  res.sendFile(indexPath);
});

app.get('/api/test', function (req, res) {
  (0, _nodeFetch2.default)("http://dummy.restapiexample.com/api/v1/employees").then(function (res) {
    return res.json();
  }).then(function (data) {
    res.send({ data: data });
  }).catch(function (err) {
    res.send(err);
  });
});

exports.default = app;