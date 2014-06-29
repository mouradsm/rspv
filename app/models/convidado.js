var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConvidadoSchema = new Schema({
    //Formato do Código Digito do Grupo+Quantidade de Convidados+Ordinal ex: 2401 = Familia do Noivo com 4 convidados numero 1
      codigo		: Number, //[ Códigos: 1 - Familia Noiva, 2 - Familia Noivo, 3 - Amigos em Comum, 4 - Amigos Noivo, 5 - Outros
      nome 			: String,
      acompanhantes : [],
      status		: Number,
      presentePanela:[],
      crianças 		: Number

});

module.exports = mongoose.model('Convidado', ConvidadoSchema);
