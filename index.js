const express = require('express')
const app = express();
const cars = require('./src/data/cars.json')
var bodyParser = require('body-parser');  


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/cars', (req, res) => {
    return res.json(cars)
});
app.post('/cars', (req, res) => {
    cars.push(req.body)
    console.log(req.body)
    res.json({ status: 'User created successfully!' })
  })

  app.delete('/cars', (req, res) => {
    res.send('Got a DELETE request at /user')
  })

app.listen(3333, () => {
    console.log('Servidor Rodando')
});
