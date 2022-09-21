const express = require('express');
require('express-async-errors');

const errorHandle = require('../middlewares/errorHandle');

const loginRoute = require('../routes/login')

const app = express();
app.use(express.json())

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginRoute)

app.use(errorHandle)

module.exports = app;
