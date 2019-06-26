const express = require('express');
const mongoose = require('mongoose');

const app = express();
const server = require('http').Server(app);

const credentials = require('./config/database.json');

mongoose.connect(credentials.uri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

server.listen(process.env.PORT || 3333);