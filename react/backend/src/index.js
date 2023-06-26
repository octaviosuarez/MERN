"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const port = 3900;

var url = "mongodb://localhost:27017/api_rest_grow";

mongoose.Promise = global.Promise;

var article_routes = require("./routes/article");

//cargamos body-parser q es un middleware para analizar cuerpos a travez de la URL
app.use(bodyParser.urlencoded({ extended: false }));
//cualq peticion la convertimos a json:
app.use(bodyParser.json());

//Activamos el CORS para permitir las pticiones AJAX y HTTP desde el frontend:

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT, DELETE");
  res.header("Access", "GET,POST,OPTIONS,PUT, DELETE");
  next();
});

app.use("/api", article_routes);

mongoose.connect(url, { useNewUrlParser: true }).then(() => {
  console.log("conexion a la bd realizada con exito", url);
  app.listen(port, () => {
    console.log("Hola puerto", port);
  });
});
