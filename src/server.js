// Importar dependencias
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

// Iniciando o express
const server = express();

server
  // Utilizando os arquivos estáticos
  .use(express.static("public"))

  // Configurar Template Enginer
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  //Criando rotas da aplicação
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage);

// Iniciando servidor
server.listen(5500);
