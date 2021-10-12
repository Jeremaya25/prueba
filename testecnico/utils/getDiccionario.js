import connection from "./connectdb";

const Palabra = require('./objects/palabra');

const getDiccionario = () => {
    const palabras = []
    connection.query("SELECT nombre, definicion FROM palabras", function (err, result, fields) {
        if (err) throw err;
        fields.forEach(palabra => {
            palabras.push(new Palabra(palabra.nombre, palabra.definicion))
        });
    });
}


module.exports = getDiccionario;