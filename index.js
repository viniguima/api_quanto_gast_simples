const express = require('express')
const app = express();
const cars = require('./src/data/cars.json')

app.use(express.json());

app.get('/cars', (req, res) => {
    return res.json(cars)
});

app.listen(3333, () => {
    console.log('Servidor Rodando')
});
