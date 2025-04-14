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
//Recibimos la info del form Create para guardar dicha info en el array
const store = (req, res) => {
  const { nombre } = req.body; //Extraigo el nombre de la info del form create Ej
  //console.log(nombre);
  //Categoria 4
  const categoria = {
    //Creo un objeto: Nueva Categoria
    id: Date.now(),
    nombre, //Asigno el nombre que agregó el frontend(Cliente) Ej Categoria 4
  };
  categorias.push(categoria); //Agrego al final del array la nueva categoría
  res.redirect("/categorias"); //Paso del form Create a la pagina de Listar Categorias
}; //Veo la Categoría 4 pero sólo queda en memoria RAM

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
//Update o Actualización, usamos la funcion edit
const edit = (req, res) => {
  //res.send("EDIT ");
  const { id } = req.params; //luego busco cada id y lo comparo con el id del front-end

  const categoria = categorias.find((categorias) => categorias.id == id);
  //res.send("show");
  if (!categoria) {
    //Si No existe la categoría
    return res.status(404).send("No existe la categoría");
  }
  res.render("categorias/edit", { categoria });
};
const update = (req, res) => {
  //res.send("UPDATE");
  const { id } = req.params;
  const { nombre } = req.body; //recibo la modificación del nombre de la categoría

  const categoria = categorias.find((categorias) => categorias.id == id);
  //res.send("show");
  if (!categoria) {
    //Si No existe la categoría
    return res.status(404).send("No existe la categoría");
  }
  categoria.nombre = nombre;
  res.redirect("/categorias");
};
const destroy = (req, res) => {
  //dekete es palabra reservada en JS
  //res.send("DESTROY");
  const { id } = req.params;
  const index = categorias.findIndex((categoria) => categoria.id == id);
  if (index == -1) {
    //Si no existe el indice

    return res.status(404).send("No existe la categoría");
  }
  categorias.splice(index, 1); //A partir de este index, ctos borro?= sólo 1
  res.redirect("/categorias");
};

module.exports = {
  create,
  store,
  index,
  show,
  edit,
  update,
  destroy,
};
