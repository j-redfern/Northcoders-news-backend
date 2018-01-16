if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var config = require('./config');
var db = config.DB[process.env.NODE_ENV] || process.env.DB;
mongoose.Promise = Promise;
const apiRouter = require('./routes/api');
const cors = require('cors');

mongoose.connect(db, {useMongoClient: true})
  .then(() => console.log('successfully connected to', db))
  .catch(err => console.log('connection failed', err));

app.use(cors());
app.use(bodyParser.json());

app.use('/api',apiRouter);

app.use((err, req, res, next) => {
  if (err.status === 404) {
    return res.status(404).send({error: "File Not Found"});
  } next(err);
});

app.use((err, req, res, next) => {
  if (err.status === 400) {
    return res.status(400).send({error: "400 Bad Request"});
  } next(err);
});

app.use((err, req, res, next) => {
  if (err.status === 500) {
    return res.status(500).send({error: "Internal Server Error"});
  } next(err);  
});

module.exports = app;
