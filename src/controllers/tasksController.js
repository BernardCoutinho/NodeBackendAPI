const tasksModel = require('../models/tasksModule');

const getAll = async (red, res) => {
    const tasks = await tasksModel.getAll();
    return res.status(200).json(tasks)
};

module.exports = {
    getAll
};