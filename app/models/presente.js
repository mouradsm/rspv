var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PresenteSchema = new Schema({
    //Formato do Código Digito do Grupo+Quantidade de Convidados+Ordinal ex: 2401 = Familia do Noivo com 4 convidados numero 1
      id: String, //[ Códigos: 1 - Familia Noiva, 2 - Familia Noivo, 3 - Amigos em Comum, 4 - Amigos Noivo, 5 - Outros
      desc: String,
      disponivel: Boolean,
<<<<<<< HEAD
      emailPessoa: String
},{collection: 'lista'});

module.exports = mongoose.model('Presente', PresenteSchema);

=======
},{collection: 'lista'});

module.exports = mongoose.model('Presente', PresenteSchema);
>>>>>>> listaCasamento
