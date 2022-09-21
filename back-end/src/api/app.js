const express = require('express');
require('express-async-errors');

const loginRoute = require('../routes/login')

const app = express();
app.use(express.json())

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginRoute)

module.exports = app;
