const express = require('express');
const routes = require('./routes');
const db = require('../src/database')

const app = express()

app.use(express.json())
db.hasConection()

app.use(routes)

app.listen(4000, () => console.log('Servidor rodando na porta 4000'))
