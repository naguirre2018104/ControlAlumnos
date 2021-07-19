"user strict"

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var curseSchema = Schema({
    name: String
})

module.exports = mongoose.model("curse",curseSchema);