var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConvidadoSchema = new Schema({
      Tag			: String,
      Acompanhantes : [],
      confirmados	: String,
      Individuais	: Number,
      status		: String,

},{collection: 'convidados'});

module.exports = mongoose.model('Convidado', ConvidadoSchema);
