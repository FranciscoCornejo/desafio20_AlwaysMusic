import pool from "../config/db.js";

//Funcion Promesa Asyncrona: SELECT
const selectMusicos = async () => {
  const consulta = "SELECT * FROM musicos";
  const resultado = await pool.query(consulta);
  console.log("Musicos: ", resultado.rows);
};
//selectMusicos(); //las funciones se ejecutaran en switch

//parametros capturados por consola usando el metodo argv del modulo process
const parametros = process.argv.slice(2);

const opcion = parametros[0];
const nombre = parametros[1];
const rut = parametros[2];
const curso = parametros[3];
const nivel = parametros[4];

//Funcion Promesa Asyncrona: INSERT INTO, elementos Parametrizados: consulta, valor y respuesta
const insertMusico = async (nombre, rut, curso, nivel) => {
  const consulta =
    "INSERT INTO musicos (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4)";
  const valores = [nombre, rut, curso, nivel];
  const respuesta = await pool.query(consulta, valores);
  console.log("perfil creado con exito." + respuesta.rows);
};
//insertMusico(nombre, rut, curso, nivel); //las funciones se ejecutaran en switch

//Funcion Promesa Asyncrona: UPDATE
const updateMusicos = async (nombre, rut, curso, nivel) => {
  const consulta =
    "UPDATE musicos SET nombre = $1, rut = $2, curso = $3, nivel = $4 WHERE rut = $2";
  const values = [nombre, rut, curso, nivel];
  const respuesta = await pool.query(consulta, values);
  console.log("perfil actualizado con exito." + respuesta.rows);
};
//updateMusicos(nombre, rut, curso, nivel); //las funciones se ejecutaran en switch

// //Funcion Promesa Asyncrona: DELETE
const deleteMusicos = async (rut) => {
  const consulta = "DELETE FROM musicos WHERE rut = $1";
  const values = [rut];
  const respuesta = await pool.query(consulta, values);
  console.log("perfil eliminado con exito." + respuesta.rows);
};
//deleteMusicos(rut); //las funciones se ejecutaran en switch

//Funcion Promesa Asyncrona: SELECT
const Musico = async (rut) => {
  let consulta = "SELECT * FROM musicos";
  const values = [];
  if (rut) {
    consulta += " WHERE rut = $1";
    values.push(rut);
  }
  const resultado = await pool.query(consulta, values);
  console.log("Musico: ", resultado.rows);
};
//Musico(rut);

switch (opcion) {
  case "crear":
    insertMusico(nombre, rut, curso, nivel);
    break;
  case "actualizar":
    updateMusicos(nombre, rut, curso, nivel);
    break;
  case "eliminar":
    const rutMusico = parametros[1];
    deleteMusicos(rutMusico);
    break;
  case "mostrar":
    selectMusicos();
    break;
  case "musico":
    const rutMusico2 = parametros[1];
    Musico(rutMusico2);
    break;
  default:
    console.log("opcion no valida");
}
