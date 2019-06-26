const mongoose = require('mongoose');

const Pedido = new mongoose.Schema(
  {
    cliente: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
      },
    ],
    pedido: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pizza',
    }],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Pedido', Pedido);
