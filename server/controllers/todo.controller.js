const db = require("../models/index.js");
const Todo = db.todos;
// const Op = db.Sequelize.Op;

// Create and Save a new Todo
exports.create = (req, res) => {};

// Retrieve all Todos from the database.
exports.findAll = (req, res) => {
  // res.json({ message: "Hello World 2" });
  /*  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null; */
  /* { where: condition } */
  Todo.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving todos.",
      });
    });
};

// Find a single Todo with an id
exports.findOne = (req, res) => {};

// Update a Todo by the id in the request
exports.update = (req, res) => {};

// Delete a Todo with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Todos from the database.
exports.deleteAll = (req, res) => {};

// Find all published Todos
exports.findAllPublished = (req, res) => {};
