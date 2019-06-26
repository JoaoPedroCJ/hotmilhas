const mongoose = require('mongoose');

const Cliente = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    telefone: {
      type: String,
      required: true,
    },
    endereco: {
      rua: {
        type: String,
        required: true,
      },
      numero: {
        type: String,
        required: true,
      },
      bairro: {
        type: String,
        required: true,
      },
      complemento: {
        type: String,
        required: false,
      },
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Cliente', Cliente);
