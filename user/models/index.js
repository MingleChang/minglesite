const fs        = require("fs");
const path      = require("path");
const Sequelize = require("sequelize");
const db_config = require('../config/db_config');
if (db_config.debug) {
  let config = db_config.sqlite_config;
  let database = config.database;
  var sequelize = new Sequelize(database, null, null, config);
}else {
  let config = db_config.mysql_config;
  let database = config.database;
  let username = config.username;
  let password = config.password;
  var sequelize = new Sequelize(database, username, password, config);
}

var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});


sequelize.sync();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;