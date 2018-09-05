const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//rutas
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Inicio',
    description: 'diseño grafico y web de otro planeta',
    banner: './assets/img/spaces.jpg'
  });
});

app.get('/nosotros', (req, res) => {
  res.render('nosotros', {
    title: 'Nosotros',
    description: 'diseño grafico y web de otro planeta',
    banner: './assets/img/nosotros.svg'
  });
});

app.get('/servicios', (req, res) => {
  res.render('servicios', {
    title: 'Servicios',
    description: 'diseño grafico y web de otro planeta',
    banner: './assets/img/banner.jpg'
  });
});

app.get('/contactanos', (req, res) => {
  res.render('contactanos', {
    title: 'Contactanos',
    description: 'diseño grafico y web de otro planeta',
    banner: './assets/img/banner.jpg'
  });
});

//port server
app.listen(3000, () => {
  console.log('escuchando peticones en el puerto 3000');
});