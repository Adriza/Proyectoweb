const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());

const { controller } = require('./Controller');

app.get('/', (req, res) => {
    res.send('Bienvenido');
})

app.get('/usuarios', (req, res) => {
    controller.getUsuarios(res);
})

app.post('/usuarios', (req, res) => {
    var data = req.body;
    controller.addUsuario(res, data);
})

app.get('/publicaciones', (req, res) => {
    controller.getPublicaciones(res);
})
exports.app = app;
