const db = require("./sqlite"); //importo la db que recién cree en sqlite.js

const create = (name, callback) => {
  const sql = `INSERT INTO categories (name) VALUES(?)`; //VALUES(${name}

  db.run(sql, [name], function () {
    if (error) {
      return callback(error);
    }
    callback(null, this.lastID);
  });
};

module.exports = {
  create,
};
