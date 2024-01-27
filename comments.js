//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Connect to MySQL
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'reddit'
});

//Connect to database
connection.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

//Set static files
app.use('/static', express.static('static'));

//Set view engine
app.set('view engine', 'ejs');

//Set body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Set cookie-parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Set bcrypt
const bcrypt = require('bcrypt');

//Set jsonwebtoken
const jwt = require('jsonwebtoken');

//Set secret key
const secretKey = 'secretKey';

//Set moment
const moment = require('moment');

//Set express-session
const session = require('express-session');
app.use(session({
  secret: 'secretKey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

//Set cors
const cors = require('cors');
app.use(cors());

//Set nodemailer
const nodemailer = require('nodemailer');

//Set transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    password: ''
    }
});