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

app.get('/get', (req, res) => {
    connection.query("SELECT * FROM palabras", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
})

const port = 3001
app.listen(port, () => {
    console.log('Server api running on port', port);
})