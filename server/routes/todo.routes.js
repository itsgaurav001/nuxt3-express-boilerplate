var router = require("express").Router();
const todos = require('../controllers/todo.controller.js');

// Create a new todo
// router.post('api/todos', todos.create);

// Retrieve all todos

router.get('/api/todos', todos.findAll);

// Retrieve a single todo by id
// router.get('api/todos/:id', todos.findOne);

// // Update a Todo with id
// router.put('api/todos/:id', todos.update);

// // Delete a Todo by id
// router.delete('api/todos/:id', todos.delete);
module.exports = router;