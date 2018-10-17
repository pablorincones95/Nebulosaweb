const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;

//rutas
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Inicio',
    description: 'diseño grafico y web de otro planeta',
    banner: './assets/img/nosotros.svg'
  });
});

app.get('/nosotros', (req, res) => {
  res.render('nosotros', {
    title: 'Nosotros',
    description: 'diseño grafico y web de otro planeta',
    banner: './assets/img/banner-secundary.svg',
    banner_title: 'Nosotros'
  });
});

app.get('/servicios', (req, res) => {
  res.render('servicios', {
    title: 'Servicios',
    description: 'diseño grafico y web de otro planeta',
    banner: './assets/img/banner-secundary.svg',
    banner_title: 'Servicios'
  });
});

app.get('/contactanos', (req, res) => {
  res.render('contactanos', {
    title: 'Contactanos',
    description: 'diseño grafico y web de otro planeta',
    banner: './assets/img/banner-secundary.svg',
    banner_title: 'Contáctanos'
  });
});

//port server
app.listen(port, () => {
  console.log(`escuchando peticones en el puerto ${port}`);
});