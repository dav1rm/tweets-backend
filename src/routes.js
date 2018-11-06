const express = require('express');

const routes = express.Router();

const EntregaController = require('./controllers/EntregaController');


routes.get('/entregas', EntregaController.index);
routes.post('/entregas', EntregaController.store);
routes.post('/entregas/aceitar/:id', EntregaController.aceitar);

module.exports = routes;