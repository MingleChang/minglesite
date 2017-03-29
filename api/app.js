const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer  = require('multer');
const path = require('path');

const tools = require('./routes/tools');

//定义全局变量
global.config = require('./config/config');
//定义公共函数
global.funcs = require('./config/function');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
  secret: global.config.session_secret,
  cookie: { path: '/', httpOnly: true, maxAge: 60 * 1000 * 30} ,
  resave: false,
  saveUninitialized: true
}));

app.use('/tools', tools);

module.exports = app;