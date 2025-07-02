// Importamos express
const express = require("express");
const session = require("express-session");
const passport = require("./config.js");

// Generando la app web
const app = express();

// Primero conectamos a la base de datos
require("./database");

// Importamos los modelos (solo importar, no usar app.use)
require("./models/categoria.model.js");
require("./models/comentario.model.js");
require("./models/marca.model.js");
require("./models/pedido.model.js");
require("./models/producto.model.js");
require("./models/usuario.model.js");

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

app.use(require("./routes/index.routes.js"));
app.use("/auth", require("./routes/auth.routes.js"));

// Puerto del Servicio Web
app.listen(3000);
console.log("Server on port", 3000);
