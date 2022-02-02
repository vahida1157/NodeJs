const express = require('express');
const { supportsColor } = require('supports-color');
const app = express();
const tasks = require('./routes/tasks');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("salam");
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

app.listen(port)