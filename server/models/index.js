const dbConfig = require("../config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todos = require("./todo.model.js")(sequelize, Sequelize);

module.exports = db;