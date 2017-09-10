var express = require('express');
var router = express.Router();
var async = require('async');
var Request = require('../models/request.js');
var Address6 = require('ip-address').Address6;

var captureData = function (request) {
  var serverAddress = new Address6(request.connection.localAddress);
  var clientAddress = new Address6(request.ip);
  var params = {
    server_ip: serverAddress
      .to4()
      .correctForm(),
    client_ip: clientAddress
      .to4()
      .correctForm(),
    date: Date.now()
  };
  var request = new Request(params);
  return request.save();
};

/* GET home page. */
router.get('/', function (req, res, next) {
  var promise = captureData(req);
  promise
    .then(doc => res.render('index', {title: "Tarea 1 - Arquitectura de Sistemas de Software", current: "/"}))
    .catch(err => res.render('error', {
      title: 'Tarea 1 - Vicente Fuenzalida',
      error: err
    }));
});

// About page route
router.get('/list', function (req, res) {
  var promise = captureData(req);
  promise
    .then(() => Request.find({}).sort({createdAt:-1}).limit(10))
    .then((requests, err) =>
      res.render('list', {
        title: 'Lista de Requests',
        error: err,
        requests: requests,
        current: "/list"
      }))
    .catch(function (error) {
      res.send(`errorsito: ${error}`);
    });
});

module.exports = router;
