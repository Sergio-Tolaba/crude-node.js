// db=array de las categorías y cada categría será un objeto con Id, nombre
const categorias = [
  { id: 1, nombre: "Categoria 1" },
  { id: 2, nombre: "Categoria 2b" },
  { id: 3, nombre: "Categoria 3" },
];
//Create
const create = (req, res) => {
  res.render("categorias/create"); //Renderizaré 1formulario en las views: categorias.create.ejs
};
//Read
const index = (req, res) => {
  //res.send("Listado de categorias");
  res.render("categorias/index", { categorias }); //Views/categorias/index.ejs(table)
};

const show = (req, res) => {
  //res.send("Listado de categorias");
  //categoria.router.js tendremos la ruta con el id y lo tengo que traer
  const { id } = req.params; //luego busco cada id y lo comparo con el id del front-end
  const categoria = categorias.find((categorias) => categorias.id == id);
  //console.log(categoria);
  //res.send("show");
  if (!categoria) {
    //Si No existe la categoría o cualquier cosa
    return res.status(404).send("No existe la categoría");
  }

  res.render("categorias/show", { categoria }); //Views/categorias/index.ejs(table)
};

module.exports = {
  create,
  index,
  show,
};
