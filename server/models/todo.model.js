const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define(
    "todos",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Todo;
};