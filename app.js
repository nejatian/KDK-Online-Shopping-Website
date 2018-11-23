const express = require('express');
const bodyParser=require('body-parser');
const passport=require('passport');

const db = require('./db.js');
const users = require('./routes/api/users');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST"
  );
  next();
});

//body parser middleware
app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());


app.get('/',(req,res)=>res.send('Hello world'))

//passport middleware
app.use(passport.initialize());
//passport config
require('./config/passport')(passport);

//User Routes
app.use('/api/users', users);

module.exports = app;