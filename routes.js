const express = require('express');
const route = express.Router(); //trata as rotas

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const { loingRequired, loginRequired } = require('./src/middlewares/middleware');

//Rotas home
route.get('/', homeController.index);

//Rotas de Login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

//Rotas de contato
route.get('/contato/index', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.register);
route.get('/contato/index/:id', loginRequired, contatoController.editIndex);

module.exports = route;
