const Cliente = require('../models/Cliente');

class ClienteController {
  async store(req, res) {
    const cliente = await Cliente.create(req.body);

    return res.json(cliente);
  }

  async show(req, res) {
    const cliente = await Cliente.find({ telefone: req.body.telefone }).maxTimeMS(2000);

    return cliente.length === 0 ? res.status(400).json('Cliente não encontrado') : res.json(cliente);
  }
}

module.exports = new ClienteController();
