const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer  = require('multer');
const path = require('path');
const ejs = require('ejs');

const index = require('./routes/index');
const udid = require('./routes/udid');

//定义全局变量
global.config = require('./config/config');
//定义公共函数
global.funcs = require('./config/function');

let app = express();

app.set('trust proxy', 'loopback');

app.set('views', path.join(__dirname, 'views'))
app.engine('.html', ejs.__express)
app.set('view engine', 'html')

app.use('/public', express.static(path.join(__dirname,'/statics')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
  secret: global.config.session_secret,
  cookie: { path: '/', httpOnly: true, maxAge: 60 * 1000 * 30} ,
  resave: false,
  saveUninitialized: true
}));


app.use('/', index);
app.use('/udid', udid);

app.use(global.funcs.page404);
app.use(global.funcs.page502);

module.exports = app;