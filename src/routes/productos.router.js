const express = require("express");
const router = express.Router();
const controller = require("../controllers/productos.controller");
router.get("/create", controller.create);
router.post("/", controller.store);

router.get("/", controller.index);

router.get("/:id", controller.show);

router.get("/:id/edit", controller.edit); //ruta para obtener la info del form c/l info
router.put("/:id", controller.update); //tengo que hacer la función update en producto.controller.js//Esta es la ruta para recibir la modificación desde el form

router.delete("/:id", controller.destroy); //Toda nueva funcionalidad se inicia 1ero indicando la ruta en este caso en productos.router.js//2do producto.controller.js creo la funcion detroy(hasta que no la cree y exporte el nodemom dará error)

module.exports = router;
