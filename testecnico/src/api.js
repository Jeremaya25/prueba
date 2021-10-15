const express = require('express');
const cors = require("cors");
const connection = require("../utils/connectdb");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};
  
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.get('/', (req, res) => {
    res.json({message : "Api working!"});
})

app.post('/add', (req, res) => {
    var sql = `INSERT INTO palabras (nombre, definicion) VALUES ('${req.body.nombre}', '${req.body.definicion}')`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
})

app.delete('/delete', (req, res) => {
    var sql = `DELETE FROM palabras WHERE nombre = '${req.body.nombre}'`;
    connection.query(sql, function (err, result) {
        if (err) console.log(err);
        console.log(`'${req.body.nombre}' has been deleted`);
    });
})

app.get('/get', (req, res) => {
    connection.query(`SELECT * FROM palabras`, function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
})

app.post('/update', (req, res) => {
    if (err) throw err;
    var sql = `UPDATE palabras SET definicion = '${req.body.definicion}' WHERE nombre = '${req.body.nombre}'`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(`'${req.body.nombre}' has been updated`);
    });
})

const port = 3001
app.listen(port, () => {
    console.log('Server api running on port', port);
})