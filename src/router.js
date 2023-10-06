const express = require('express');

const router = express.Router();

const tasksController = require(`./controllers/tasksController`);

const tasksMiddleware = require('./middlewares/tasksMiddleWares');


router.get('/tasks', tasksController.getAll);
router.get('/tasks/:id', tasksController.getById);
router.post('/tasks', 
    tasksMiddleware.validateStatus, 
    tasksMiddleware.validateTitle, 
    tasksController.create
);

router.delete('/tasks/:id', tasksController.deleteTasks);
router.put('/tasks/:id',
    tasksMiddleware.validateStatus, 
    tasksMiddleware.validateTitle,
    tasksController.updateTasks);

module.exports = router;