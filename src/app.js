// Importamos express
const express = require("express");
const session = require("express-session");
const passport = require("./configs/passport.config.js");

// Generando la app web
const app = express();

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
const authRouter = require("./routes/auth.routes.js");

app.use('/', indexRouters);
app.use("/auth", authRouter);

// Para cualquier otra ruta (not found)
app.use(function(req, res, next) {
    next(createError(404));
});

module.exports = app;
