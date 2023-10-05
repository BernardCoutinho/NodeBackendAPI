const express = require('express');

const router = express.Router();

app.get('/', (req, res) => res.status(200).send('Hello World!'))

module.exports = router;