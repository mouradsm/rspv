// Arquivo Principal
//Esse arquivo contém as configurações mais básicas
// de inicialização dos módulo e do banco.

//Módulos --
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Configurações ---
//mongoose.connect('mongodb://diego:123456@kahana.mongohq.com:10041/app26894187');
mongoose.connect('mongodb://localhost/rspv');
var Presente = require('./app/models/presente');
var Convidado = require('./app/models/convidado')
var PresenteLista = require('./app/models/presentelista')

// Arquivos de configuração ---

app.use(bodyParser());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', "*");

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
}
);



var port = process.env.PORT || 3000; //configuração da porta

var router = express.Router();

router.use(function(req, res, next) {
  console.log('Algo acontece!');
  next();
});

router.get('/', function(req, res) {
  res.json({
    message: 'Pelo menos aqui tá funcionando'
  })
});

router.route('/convidados')
.post(function(req, res) {
  var convidado = new Convidado()
  convidado.codigo = req.body.codigo;
  convidado.nome = req.body.nome;

  convidado.save(function(err) {
    if (err)
      res.send(err);

    res.json({
      message: 'Convidado Salvo!'
    });
  });
})
.get(function(req, res) {
  Convidado.find(function(err, convidados) {
    if (err)
      res.send(err);

    res.json(convidados);
  });
});

router.route('/convidados/:codigo')
.get(function(req, res) {

  Convidado.find({
    codigo: req.params.codigo
  }, function(err, convidado) {
    if (err)
      res.send(err);

    res.json(convidado);
  });
})
.put(function(req, res) {

  Convidado.find({
    codigo: req.params.codigo
  }, function(err, convidado) {

    if (err)
      res.send(err);

    convidado.status = req.body.status;

    convidado.save(function(err) {

      if (err)
        res.send(err);

      res.json({
        message: 'Status Atualizado para: ' + convidado.status
      });
    });
  });
});

router.route('/lista')
.get(function(req, res) {

  Presente.find(function(err, presentes) {
    if (err)
      res.send(err);
    res.json(presentes);
  });
});

router.route('/lista/:id/')
.get(function(req, res) {
  Presente.findById(req.params.id, function(err, presente) {
      if (err)
        res.send(err);

      res.json(presente);
    });
});

router.route('/lista/:id/:email')
.put(function(req, res) {
  Presente.findById(req.params.id,function(err, presente) {
    if (err)
      res.send(err);

    presente.disponivel = false;
    emailPessoa         = req.params.email;

    console.log(presente);
    presente.save(function(err) {

      if (err)
        res.send(err);

      res.json({message: 'Presentes escolhidos com sucesso!'})
    });
  });
})



app.use('/api', router);

//Inicialização do APP
app.listen(port); //Inicia o APP em http://localhost:8080
console.log('Servidor iniciado na porta ' + port); //Escreve no console