const db = require("./sqlite"); //importo la db que recién cree en sqlite.js

const create = (name, callback) => {
  const sql = `INSERT INTO categories (name) VALUES(?)`;

  db.run(sql, [name], function (error) {
    if (error) {
      return callback(error);
    }
    callback(null, this.lastID);
  });
};

const findAll = (callback) => {
  const sql = `SELECT * FROM categories`;
  db.all(sql, (error, rows) => {
    if (error) {
      return callback(error);
    }
    callback(null, rows);
  });
};

module.exports = {
  create,
  findAll,
};
