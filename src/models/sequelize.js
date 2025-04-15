require("dotenv").config(); // <-- esto debe ir al principio
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    /* one of 'mysql | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    dialect: process.env.DB_DIALECT,
  }
);
//console.log(sequelize);

module.exports = sequelize;
//Prueba para ver si el ORM se conecta bien a la db y muestra qué tablas hay
// require('dotenv').config();
// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASS,
//   {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT,
//     port: 3306,
//   }
// );

// // Verifica conexión
// sequelize.authenticate()
//   .then(() => {
//     console.log('✅ Conexión establecida correctamente.');

//     // Lista tablas
//     return sequelize.getQueryInterface().showAllTables();
//   })
//   .then((tables) => {
//     console.log('📦 Tablas encontradas:', tables);
//   })
//   .catch((error) => {
//     console.error('❌ Error:', error);
//   });
