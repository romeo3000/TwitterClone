
require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      controller = require('./controller'),
      bcrypt = require('bcrypt'),
      massive = require('massive'),
      session = require('express-session'),
      axios = require('axios'),
      cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const saltRounds = 5;


massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db);
}).catch('err', err => console.log(err))


const PORT = 8008;
app.listen(PORT, () => console.log('listening on port: ', PORT));