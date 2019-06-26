const mongoose = require('mongoose');

const Pizza = new mongoose.Schema(
  {
    tamanho: {
      type: String,
      required: true,
    },
    sabores: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Pizza', Pizza);
