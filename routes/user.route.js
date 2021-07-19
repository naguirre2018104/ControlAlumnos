"use strict"

var express = require("express");
var userController = require("../controllers/user.controller");
var api = express.Router();

api.get("/pruebaControlador",userController.pruebaControlador);
api.post("/register",userController.register);
api.post("/login",userController.login);
api.put("/updateUser/:id",userController.updateUser);
api.delete("/removeUser/:id",userController.removeUser);
api.post("/:id/createCurse",userController.createCurse);
api.get("/:id/getCurses",userController.getCurses);
api.put("/:idU/updateCurse/:idC",userController.updateCurse);
api.delete("/:idU/removeCurse/:idC",userController.removeCurse);
// api.post("/maestro",userController.maestro);

module.exports = api;