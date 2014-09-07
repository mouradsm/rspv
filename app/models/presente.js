var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PresenteSchema = new Schema({
      id: String,
      desc: String,
      disponivel: Boolean,
      emailPessoa: String
},{collection: 'lista'});

module.exports = mongoose.model('Presente', PresenteSchema);

