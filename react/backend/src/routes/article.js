"use strict";

var express = require("express");
var Article = require("../models/article");

//llamamos al objeto router de express
var router = express.Router();

router.post("/save", function (req, res) {
  try {
    var params = req.body;
    var article = new Article();
    article.title = params.title;
    article.content = params.content;
    article.author = params.author;
    article
      .save()
      .then((item) => {
        res.send("Articulo guardado correctamente");
      })
      .catch((err) => {
        res.status(400).send("unable to save to database");
      });
  } catch (e) {
    console.log(e);
  }
});

router.get("/buscarArticulos", function (req, res) {
  try {
    Article.find({}) // select * from articulos
      .then((articles) => {
        res.json(articles);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error interno del servidor");
      });
  } catch (e) {
    console.log(e);
  }
});

router.delete("/delete/:id", (req, res) => {
  try {
    const articleId = req.params.id;
    Article.findByIdAndDelete(articleId)
      .then(() => {
        res.send("Artículo eliminado correctamente");
      })
      .catch((err) => {
        res.status(500).send("Error interno del servidor");
      });
  } catch (e) {
    console.log(e);
  }
});

router.put("/update/:id", (req, res) => {
  try {
    const articleId = req.params.id;
    const updatedArticle = req.body;

    Article.findByIdAndUpdate(articleId, updatedArticle, { new: true })
      .then((updatedDoc) => {
        res.json(updatedDoc);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error interno del servidor");
      });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
