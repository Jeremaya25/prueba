import connection from "./connectdb";

var diccionario = {}

connection.query("SELECT palabra, definicion FROM diccionari", function (err, result, fields) {
    if (err) throw err;
    diccionario = {
        palabra : fields[0].palabra, 
        definicion: fields[0].definicion};
});

module.exports.diccionario = diccionario;