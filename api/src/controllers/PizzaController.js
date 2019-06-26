const Pizza = require('../models/Cliente');

class PizzaController {
  async store(req, res) {
    const pizza = await Pizza.create(req.body);

    return res.json(pizza);
  }

  async show(req, res) {
    const pizza = await Pizza.findById(req.params.id);

    return res.json(pizza);
  }
}

module.exports = new PizzaController();
