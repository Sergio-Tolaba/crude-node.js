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
const findById = async (id) => {
  const sql = `SELECT * FROM products WHERE id = ?`;
  try {
    const [rows] = await pool.query(sql, [id]); //promesa y necesita el await y la function el async
    //console.log(rows);Muestra un array con un objeto//Otra forma: console.log(rows, rows.shift())
    //return rows[0];Muestra el objeto//Continuo con la Otra forma: return rows.shift =>[]{id:2, name:'Producto 2'}
    return rows.shift();
  } catch (error) {
    throw error;
  }
};
const update = async (id, name) => {
  //Creo la consulta MySQL y le envío el id prámetro a la consulta sql
  const sql = `UPDATE products SET name = ? WHERE id = ?`;
  try {
    const [result] = await pool.query(sql, [name, id]);
    return result; //ahora continuamos en productos.controller.js la función update con result dentro de un try-catch
  } catch (error) {
    throw error;
  }
};
const destroy = async (id) => {
  const sql = `DELETE FROM products WHERE id = ?`;
  try {
    const [result] = await pool.query(sql, [id]);
    return result; //Seguimos ahora en productos.controller.js desarrollando la f destroy
  } catch (error) {
    throw error;
  }
};
module.exports = {
  store,
  findeAll,
  findById,
  update,
  destroy,
};
