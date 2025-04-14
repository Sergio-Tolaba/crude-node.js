const nodemailer = require("nodemailer");
//Hacemos pruebas desde tolser2019 usando un servicio ver link: https://mailtrap.io/
const submit = async (req, res) => {
  //res.render("contacto");
  console.log(req.body); //Recupero la info cargada en el formulario=>undefined(requiero un Middleware=software que hace que las aplicaciones se comuniquen entre sí y con el sistema operativo(agregamos en index.js express.urlencoded)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  try {
    const info = await transporter.sendMail({
      from: `"${req.body.nombre}" <${req.body.email}>`, // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Formulario de contacto de sitio: Hello ✔", // Subject line
      text: req.body.mensaje, // plain text body
      html: `<pre>${req.body.mensaje}</pre>`, // html body
    });
    console.info(info);
  } catch (error) {
    console.error(error);
  }
  res.send("Enviando");
};

//Copio todo main.controller.js y Borro Layout que es el private; también borro path

//const path = require("path"); //Algunos métodos necesitan rutas absolutas, uso path.resolve(__dirname, "ruta relativa"). El __dirname es dinámico y varia para cada PC y en dónde ubicamos el proyecto
//Corto la función del main.router.js y la pego acá
const index = (req, res) => {
  //Sin este código el localhost:3000 daba Cannot GET /
  //res.sendFile(path.resolve(__dirname, "../../private/index.html")); //Si requiero mandar una factura en pdf, se debe chequear el Usuario y que tenga permiso a facturación, etc

  //res.render("index");
  res.render("contacto");
}; //la función de este módulo es privada, para que la vea las rutas la tengo que exportar/
//Layout
// const private = (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../../private/index.html"));
// };

module.exports = {
  //index: index,//en JS cdo la propiedad : y el valor poseen igual nombre se abrevia asi
  index,
  //private,
  submit,
};
