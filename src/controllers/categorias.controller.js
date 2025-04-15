// db=array de las categorías y cada categría será un objeto con Id, nombre
// const categorias = [
//   { id: 1, nombre: "Categoria 1" },
//   { id: 2, nombre: "Categoria 2b" },
//   { id: 3, nombre: "Categoria 3" },
// ];
// const fs = require("fs");
// const path = require("path");
// let categorias = []; //Array vacío+En store(save c/categoria=uso file siste y path)
//const model = require("../models/Category");
const model = require("../models/Category");
//Create
const create = (req, res) => {
  try {
    categorias = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../../categorias.json"), "utf-8")
    );
  } catch (error) {
    categorias = [];
  }

  res.render("categorias/create"); //Renderizaré 1formulario en las views: categorias.create.ejs
};
//Recibimos la info del form Create para guardar dicha info en el array
const store = (req, res) => {
  const { name } = req.body; //Extraigo el nombre de la info del form create Ej
  //En db como sqlite nombre ahora es name
  model.create(name, (error, id) => {
    if (error) {
      return res.status(500).send("Internal Server Error");
    }
    console.log(id);
    res.redirect("/categorias");
  });
};
//Paso del form Create a la pagina de Listar Categorias
//Veo la Categoría 4 pero sólo queda en memoria RAM
//TODO ESTO SE HACE PARA EL ARRAY
// const categoria = {
//   //Creo un objeto: Nueva Categoria//En db esto se hace en models
//   id: Date.now(),
//   nombre, //Asigno el nombre que agregó el frontend(Cliente) Ej Categoria 4
// };
// categorias.push(categoria); //Agrego al final del array la nueva categoría
// //Guardaremos el archivo de forma sincrónica(luego veremos la forma ascincrónica)
// fs.writeFileSync(
//   path.resolve(__dirname, "../../categorias.json"),
//   JSON.stringify(categorias)
// );
// res.redirect("/categorias"); //Paso del form Create a la pagina de Listar Categorias
// }; //Veo la Categoría 4 pero sólo queda en memoria RAM
//Read

const index = async (req, res) => {
  try {
    const categorias = await model.findAll();

    res.render("categorias/index", { categorias });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};
// const index = (req, res) => {
//   model.findAll((error, categorias) => {
//     if (error) {
//       return res.status(500).send("Internal Server Error");
//     }
//     res.render("categorias/index", { categorias });
//   });
// };

//   try {
//     categorias = JSON.parse(
//       fs.readFileSync(path.resolve(__dirname, "../../categorias.json"), "utf-8")
//     );
//   } catch (error) {
//     categorias = [];
//   }
//   //res.send("Listado de categorias");
//   res.render("categorias/index", { categorias }); //Views/categorias/index.ejs(table)
// };

const show = (req, res) => {
  const { id } = req.params;
  model.findById(id, (error, categoria) => {
    if (error) {
      return res.status(500).send("Internal Server Error");
    }
    if (!categoria) {
      //Si No existe la categoría o cualquier cosa
      return res.status(404).send("No existe la categoría");
    }
    res.render("categorias/show", { categoria });
  });
};
// categorias = JSON.parse(
//   fs.readFileSync(path.resolve(__dirname, "../../categorias.json"), "utf-8")
// );
//res.send("Listado de categorias");
//categoria.router.js tendremos la ruta con el id y lo tengo que traer
//const { id } = req.params; //luego busco cada id y lo comparo con el id del front-end
// const categoria = categorias.find((categorias) => categorias.id == id);
//console.log(categoria);
//res.send("show");
// if (!categoria) {
//   //Si No existe la categoría o cualquier cosa
//   return res.status(404).send("No existe la categoría");
// }

// res.render("categorias/show", { categoria }); //Views/categorias/index.ejs(table)
// };
//Update o Actualización, usamos la funcion edit
const edit = (req, res) => {
  const { id } = req.params;
  model.findById(id, (error, categoria) => {
    //copio el modelo de show y en res.render("categorias/~show~ edit", { categoria });
    if (error) {
      return res.status(500).send("Internal Server Error");
    }
    if (!categoria) {
      //Si No existe la categoría o cualquier cosa
      return res.status(404).send("No existe la categoría");
    }
    res.render("categorias/edit", { categoria });
  });
};
//   categorias = JSON.parse(
//     fs.readFileSync(path.resolve(__dirname, "../../categorias.json"), "utf-8")
//   );
//   //res.send("EDIT ");
//   const { id } = req.params; //luego busco cada id y lo comparo con el id del front-end

//   const categoria = categorias.find((categorias) => categorias.id == id);
//   //res.send("show");
//   if (!categoria) {
//     //Si No existe la categoría
//     return res.status(404).send("No existe la categoría");
//   }
//   res.render("categorias/edit", { categoria });
// };
const update = (req, res) => {
  //res.send("UPDATE");
  // categorias = JSON.parse(
  //   fs.readFileSync(path.resolve(__dirname, "../../categorias.json"), "utf-8")
  // );
  const { id } = req.params;
  const { name } = req.body; //recibo la modificación del nombre de la categoría
  model.update(id, name, (error, changes) => {
    if (error) {
      return res.status(500).send("Internal Server Error");
    }
    // console.log(changes);//Podría haber intensión maliciosa y hay formas de evitarlo
    res.redirect("/categorias");
  });
};
// const categoria = categorias.find((categorias) => categorias.id == id);
//res.send("show");
// if (!categoria) {
//   //Si No existe la categoría
//   return res.status(404).send("No existe la categoría");
// }
//   categoria.nombre = nombre;
//   fs.writeFileSync(
//     path.resolve(__dirname, "../../categorias.json"),
//     JSON.stringify(categorias)
//   );
//   res.redirect("/categorias");
// };
const destroy = (req, res) => {
  //delete es palabra reservada en JS
  // categorias = JSON.parse(
  //   fs.readFileSync(path.resolve(__dirname, "../../categorias.json"), "utf-8")
  // );
  //res.send("DESTROY");
  const { id } = req.params;
  model.destroy(id, (error, changes) => {
    if (error) {
      return res.status(500).send("Internal Server Error");
    }
    // console.log(changes);//Hacker malicioso con F12 y modif html forzando cambiar el id a borrar: <form class="form-delete" action="categorias/1?_method=DELETE" method="post">

    res.redirect("/categorias");
  });
};
//   const index = categorias.findIndex((categoria) => categoria.id == id);
//   if (index == -1) {
//     //Si no existe el indice

//     return res.status(404).send("No existe la categoría");
//   }
//   categorias.splice(index, 1); //A partir de este index, ctos borro?= sólo 1
//   fs.writeFileSync(
//     path.resolve(__dirname, "../../categorias.json"),
//     JSON.stringify(categorias)
//   );
//   res.redirect("/categorias");
// };

module.exports = {
  create,
  store,
  index,
  show,
  edit,
  update,
  destroy,
};
