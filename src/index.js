// Importamos express
const express = require("express");
const session = require("express-session");
const passport = require("./config.js");

// Generando la app web
const app = express();

require("./database");

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
app.use(require("./routes/auth.routes.js"));

app.use("/auth", require("./routes/auth.routes.js"));
 //Usa los modelos de BD

// Puerto del Servicio Web
app.listen(3000);
console.log("Server on port", 3000);
