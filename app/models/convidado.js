var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConvidadoSchema = new Schema({
    id : Number,
    nome : String
});

module.exports = mongoose.model('Convidado', ConvidadoSchema);
