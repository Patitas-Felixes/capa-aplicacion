// Importamos express
const express = require("express");

// Generando la app web
const app = express();

require("./database");

app.use(express.json());   //Para leer los formatos json del body

app.use(require("./routes/index.routes.js"));

//importamos los modelos de BD
app.use(require("./models/categoria.model.js"))
app.use(require("./models/comentario.model.js"))
app.use(require("./models/marca.model.js"))
app.use(require("./models/pedido.model.js"))
app.use(require("./models/producto.model.js"))
app.use(require("./models/usuario.model.js"));

// Puerto del Servicio Web
app.listen(3000);
console.log("Server on port", 3000);
