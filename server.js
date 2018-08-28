const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers.js');

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//rutas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/nosotros', (req, res) => {
  res.render('nosotros');
});

//port server
app.listen(3000, () => {
  console.log('escuchando peticones en el puerto 3000');
});