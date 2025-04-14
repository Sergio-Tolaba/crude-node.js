const express = require("express");
const router = express.Router();
const controller = require("../controllers/categorias.controller");

router.get("/create", controller.create); //Del CRUD le toca al Create o agregar Categoría y se hará a través del formulario y se guardará en el Array Ej Categoria 4
//Importa el orden si figura abajo de show entra antes el if y al poner create, hola o una categoria inexistente=>renderiza "No existe la categoría"
router.post("/", controller.store); //controlador se crea la función store

//Habíamos creado la página principal con app y ahora será main.router(modularizo)
router.get("/", controller.index); //Del CRUD ya tenemos el Read = Listado de Categorias
router.get("/:id", controller.show); //Read= Detalle de una Categoría buscada

router.get("/:id/edit", controller.edit); //Update o Actualizar=>funcion edit en categoria.controller.js
router.put("/:id", controller.update); //En views edit.ejs el post se cambia internamente a put (npm i method-override)
router.delete("/:id", controller.destroy);

module.exports = router;
