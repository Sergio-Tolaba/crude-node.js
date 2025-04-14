const path = require("path");
const sqlite = require("sqlite3");

const db = new sqlite.Database(
  path.resolve(__dirname, "../../database.db"),
  (error) => {
    //Distintos motivos: permiso, db completa, etc
    if (error) {
      return console.error(error);
    }
    const sql = ` CREATE TABLE IF NOT EXISTS categories(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHARD(100) NOT NULL

    )`;
    db.run(
      sql,

      (error) => {
        if (error) {
          return console.error(error);
        }
      }
    );
  }
);
//Consola $ node src/model/sqlite.js => crea database.db
module.exports = db;
