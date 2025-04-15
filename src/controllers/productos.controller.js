//Tenemos dos rutas luego crearemos dos funciones que luego exportaré
const querystring = require("querystring");
const model = require("../models/Product");
const create = (req, res) => {
  res.render("productos/create");
};
const store = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await model.store(name);
    console.log(result);
    res.redirect("/productos");
  } catch (error) {
    //Se puede generar una vista más profesional
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};
//https://fakestoreapi.com/docs (Tenemos get all product, get a single product, etc)
//router.get("/productos", (req, res) => {//Por el prefijo"/productos",req... en index.js
// const index = (req, res) => {
//Saco "/productos" y dejo "/"... Idem en la del :id
//Acá el query no está contemplado en las rutas. Otros query= ordene, etc(hacer lógica pero hay un módulo querystring que se importa para simplificar)
//Paso este ejemplo de URL (gracias a la query lo ejecuta=2 1eros productos orden desc)
//http://localhost:3000/productos?limit=2&sort=desc
// const query = querystring.stringify(req.query);
//const limit = req.query.limit; //toma el limit que le pongo en la url
//fetch("https://fakestoreapi.com/products?limit=" + limit)
// fetch("https://fakestoreapi.com/products?" + query)
//   .then((res) => res.json())
//   //.then((productos) => res.send(productos));
//   .then((productos) => {
//     res.render("productos", { productos: productos });
//     });
// };
const index = async (req, res) => {
  try {
    const productos = await model.findeAll();
    res.render("productos/index", { productos });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};
const show = (req, res) => {
  //pro el prefijo;"/productos", req..dejo sólo "/:id"
  // ruta con parámetro(dinamico)
  fetch("https://fakestoreapi.com/products/" + req.params.id)
    .then((res) => res.json())
    .then((productos) => res.send(productos));
};

module.exports = {
  create,
  store,
  index,
  show,
};
