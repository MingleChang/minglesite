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

//404
app.use(function(req, res, next) {
  	let err = new Error('Not Found');
    err.status = 404;
    next(err);
})
//error
app.use(function(err, req, res, next) {
  	let info = global.funcs.jsonInfo(err.status || 500, err.message);
	res.send(info);
})

module.exports = app;