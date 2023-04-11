const express = require("express");
const route = express.Router(); //trata as rotas

const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");

//Rotas home
route.get("/", homeController.index);

//Rotas de Login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);

module.exports = route;
