//Servidor Web
require("dotenv").config();
const express = require("express");
const path = require("path");
const layouts = require("express-ejs-layouts");

const app = express(); //app es el servidor y es una instancia de express
app.use(express.static(path.join(__dirname, "public"))); //aunque funcionó todo bien la ruta relativa, conviene colocar rutas absolutas y usamos join porque quiero unir

app.set("view engine", "ejs"); //Antes $ npm i ejs // Ahora que use dicho motor de vistas
app.set("views", path.join(__dirname, "./src/views")); //Motor busca en esta carpeta las vistas que va a renderizar y que estarán en Ej:productos.ejs=>dinámica (~html=>estática)

app.use(layouts);
app.set("layout", "layouts/layout");

const mainRouter = require("./src/routes/main.router"); //importo la ruta ppal
app.use(mainRouter);

//app.use(require('./src/routes/productos.router'));Agrego prefijo: "/producto", require..
//luego simplifico productos.router.js
app.use("/productos", require("./src/routes/productos.router"));
const PORT = process.env.PORT || 3001; //Hay que apagar (Ctrl+C) y volver a encender el servidor: $node index.js

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
//modulo nodemon apaga y enciende el servidor automáticamente y cada vez que (modif-save) file
