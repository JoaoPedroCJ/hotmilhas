const express = require('express');

const routes = express.Router();

const ClienteController = require('./controllers/ClienteController');
const PedidoController = require('./controllers/PedidoController');
const PizzaController = require('./controllers/PizzaController');

routes.post('/clientes/', ClienteController.store);
routes.post('/clientes/busca', ClienteController.show);

routes.get('/pedidos/', PedidoController.index);
routes.get('/pedidos/:id', PedidoController.show);
routes.post('/pedidos', PedidoController.store);
routes.delete('/pedidos', PedidoController.destroy);

routes.post('/pizza', PizzaController.store);
routes.get('/pizza/:id', PizzaController.show);

module.exports = routes;
