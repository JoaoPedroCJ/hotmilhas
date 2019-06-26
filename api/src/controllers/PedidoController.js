const Pedido = require('../models/Pedido');
const Cliente = require('../models/Cliente');
const Pizza = require('../models/Cliente');

class PedidoController {
  async index(req, res) {
    const pedido = await Pedido.find()
      .populate({ path: 'cliente' })
      .populate({ path: 'pedido' });

    return res.json(pedido);
  }

  async show(req, res) {
    const pedido = await Pedido.findById(req.params.id)
      .populate({ path: 'cliente' })
      .populate({ path: 'pedido' });

    return res.json(pedido);
  }

  async store(req, res) {
    const cliente = await Cliente.find({ telefone: req.body.telefone }).maxTimeMS(2000);
    const pizza = await Pizza.findById(req.body.id);

    const pedido = await Pedido.create({
      cliente,
      pizza,
    });

    return res.json(pedido);
  }

  async destroy(req, res) {
    await Pedido.findByIdAndRemove(req.params.id);

    return res.status(200).json({
      msg: 'apagado com sucesso',
    });
  }
}

module.exports = new PedidoController();
