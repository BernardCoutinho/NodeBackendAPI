const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const create = async (task) => {
    const {title, status} = task;
    const created_at = new Date(Date.now()).toUTCString();
    const query = 'INSERT INTO tasks(title, status, created_at) VALUES(?, ?, ?)';
    const [taskCreated] = await connection.execute(query, [title, status ?? 'PENDENTE', created_at]);
    return {insertId: taskCreated.insertId};
}

const deleteTasks = async (id) => {
    const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removedTask;
}

const updateTasks = async (id, task) => {
    const {title, status} = task
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
    const updatedTasks = await connection.execute(query, [title, status, id]);
    return updatedTasks;
}

const getById = async (id) => {
    const query = 'SELECT * FROM tasks WHERE id = ? ORDER BY id ASC LIMIT 1'
    const task = await connection.execute(query, [id]);
    return task;
}

module.exports = {
    getAll,
    create,
    deleteTasks,
    updateTasks,
    getById
};