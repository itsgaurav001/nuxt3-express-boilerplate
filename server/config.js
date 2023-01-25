require('dotenv').config();

module.exports = {
  DB: 'crud-test',
  USER: 'debian-sys-maint',
  PASSWORD: process.env.PASSWORD,
  HOST: process.env.HOST,
  dialect: "mysql",
};