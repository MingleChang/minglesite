const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer  = require('multer');
const path = require('path');

const user = require('./routes/user');

//定义全局变量
global.config = require('./config/config');
//定义公共函数
global.funcs = require('./config/function');

let app = express();

app.set('trust proxy', 'loopback');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
  secret: global.config.session_secret,
  cookie: { path: '/', httpOnly: true, maxAge: 60 * 1000 * 30} ,
  resave: false,
  saveUninitialized: true
}));

app.use('/user', user);

//404
app.use(global.funcs.json404);
//502
app.use(global.funcs.json502);

module.exports = app;