const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      default: '',
    },
    dni: {
      type: String,
      require: true,
    },
    numero1: {
      type: Number,
      default: '',
    },
    fecha: {
      type: String,
      require: true
    },
    numero2: {
      type: Number,
      require: true
    },
  },
);

module.exports = usuario = mongoose.model('data', UserSchema);
