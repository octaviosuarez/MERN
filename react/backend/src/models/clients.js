"use-strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var ClientsSchema = new Schema({
  ci: String,
  nombre: String,
  fechanacimiento: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Clients", ClientsSchema);
