// Importamos express
const express = require("express");
const session = require("express-session");
const passport = require("./configs/passport.config.js");
const cors = require("cors");
const createError = require("http-errors");

// Generando la app web
const app = express();

// Configuración de CORS (permitiendo cualquier origen temporalmente)
app.use(cors({
    origin: true,  // Permite cualquier origen
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());   //Para leer los formatos json del body
app.use(
    session({
        secret: "clave_secreta",
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

const indexRouters = require("./routes/index.routes.js");

app.use('/', indexRouters);

// Para cualquier otra ruta (not found)
app.use(function(req, res, next) {
    next(createError(404));
});

module.exports = app;
