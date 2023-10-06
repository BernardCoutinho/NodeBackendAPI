const { router } = require('../app');
const tasksModel = require('../models/tasksModule');

const getAll = async (_req, res) => {
    const [tasks] = await tasksModel.getAll();
    return res.status(200).json(tasks)
};

const create = async (req, res) => {
    const createdTask = await tasksModel.create(req.body);
    return res.status(201).json(createdTask)
};

const deleteTasks = async (req, res) => {
    const {id} = req.params;
    const removedTask = await tasksModel.deleteTasks(id)
    return res.status(204).json();
}

const updateTasks = async (req, res) => {
    const {id} = req.params;
    await tasksModel.updateTasks(id, req.body);
    return res.status(204).json();
}
const getById = async(req, res) => {
    const {id} = req.params;
    const [foundedTask] = await tasksModel.getById(id);
    return res.status(200).json(foundedTask);
}

module.exports = {
    getAll,
    create,
    deleteTasks,
    updateTasks,
    getById
};