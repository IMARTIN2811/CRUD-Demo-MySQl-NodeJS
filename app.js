var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var indexRouter = require('./routes/index');
var productosRouter = require('./routes/productos');

var app = express();

// se configura la ruta para las vistas de ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Configuracion las rutas index y la ruta productos
app.use('/', indexRouter);
app.use('/productos', productosRouter);

//si se redirecciona una ruta que no existe mandar un error de pagina
app.use(function(req, res, next) {
  res.status(404).render('404', {titulo: 'Error pagina 404'});
});

module.exports = app;