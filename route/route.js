const express = require('express');
const route = express.Router();
const { getAllTasks, createTask, updateTask, deleteTask, getSingleTask } = require('../controllers/tasks')


route.get('/', getAllTasks)
route.get('/:id', getSingleTask)
route.post('/', createTask)
route.patch('/:id', updateTask)
route.delete('/:id', deleteTask)


module.exports = route