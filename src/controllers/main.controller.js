const path = require("path"); //Algunos métodos necesitan rutas absolutas, uso path.resolve(__dirname, "ruta relativa"). El __dirname es dinámico y varia para cada PC y en dónde ubicamos el proyecto
//Corto la función del main.router.js y la pego acá
const index = (req, res) => {
  //Sin este código el localhost:3000 daba Cannot GET /
  res.sendFile(path.resolve(__dirname, "../../private/index.html")); //Si requiero mandar una factura en pdf, se debe chequear el Usuario y que tenga permiso a facturación, etc
}; //la función de este módulo es privada, para que la vea las rutas la tengo que exportar/

module.exports = {
  //index: index,//en JS cdo la propiedad : y el valor poseen igual nombre se abrevia asi
  index,
};
