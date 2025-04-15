const pool = require("./mysql");

const store = async (name) => {
  const sql = `INSERT INTO products (name) VALUES (?)`;
  //El motor siempre limpia esta info VALUES(?) antes de insertar el registro eso evita que exista un sql inyection (Ver qué es)
  try {
    const [result] = await pool.query(sql, [name]);
    return result;
  } catch (error) {
    throw error;
  }
};
const findeAll = async () => {
  const sql = `SELECT * FROM products`;
  try {
    const [rows] = await pool.query(sql);
    return rows;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  store,
  findeAll,
};
