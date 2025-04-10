//Servidor Web
require('dotenv').config();
const express = require('express');
const app = express();//app es el servidor y es una instancia de express
app.get("/", (req, res)=>{ //Sin este código el localhost:3000 daba Cannot GET /
    res.send('Hola Servidor Web!!!');
});
const PORT = process.env.PORT || 3001;//Hay que apagar (Ctrl+C) y volver a encender el servidor: $node index.js

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));
//modulo nodemon apaga y enciende el servidor automáticamente y cada vez que (modif-save) file