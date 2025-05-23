//Copio todo lo que figura en main.router.js, borro Layout router privada
// Modif ruta a contacto.controller
const express = require("express"); // importo express
const router = express.Router(); //Instancio router (=todas las rutas) y reemplazo app x router
const controller = require("../controllers/contacto.controller");
//Habíamos creado la página principal con app y ahora será main.router(modularizo)
router.get("/", controller.index);
//ahora tengo que llamar a la ruta desde index.js
router.post("/", controller.submit);
//Layout
//router.get("/privada", controller.private);
module.exports = router; // exporto router
