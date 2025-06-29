// Importamos express
const express = require("express");

// Generando la app web
const app = express();

require("./database");

app.use(express.json());   //Para leer los formatos json del body

app.use(require("./routes/index.routes.js"));
app.use(require("./routes/auth.routes.js"));

app.use(require("./userModel")) //Usa los modelos de BD

// Puerto del Servicio Web
app.listen(3000);
console.log("Server on port", 3000);
