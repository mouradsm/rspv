var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConvidadoSchema = new Schema({
    
      Tag			: String,
      Acompanhantes : [],
      Individuais	: Number,
      status		: String,
      confirmados	: []
      

},{collection: 'convidados'});

module.exports = mongoose.model('Convidado', ConvidadoSchema);
