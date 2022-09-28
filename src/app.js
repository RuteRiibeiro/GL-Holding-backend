const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./routes');

const app = express();

require('./models');

const whiteList = [
  'URL-FRONTEND',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', router);

module.exports = app;
