const connection = require('./çonnection');

const getAll = () => {
    const tasks = connection.execute('SELECT * FROM tasks');
    return tasks;
};

module.exports = {
    getAll
};