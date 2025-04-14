const express = require("express");
const router = express.Router();
const controller = require("../controllers/categorias.controller");
//Habíamos creado la página principal con app y ahora será main.router(modularizo)
router.get("/", controller.index); //Del CRUD ya tenemos el Read = Listado de Categorias
router.get("/:id", controller.show); //Read= Detalle de una Categoría buscada
router.get("/create", controller.create); //Del CRUD le toca al Create o agregar Categoría y se hará a través del formulario y se guardará en el Array Ej Categoria 4
module.exports = router;
