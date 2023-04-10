const express = require("express");
const route = express.Router(); //trata as rotas
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

//Rotas home
route.get("/",  homeController.paginaInicial);
route.post("/", homeController.trataPost);

//Rotas para contato
route.get("/contatos", contatoController.paginaInicial);

module.exports = route;
