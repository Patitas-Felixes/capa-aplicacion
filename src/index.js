require("dotenv").config();
const app = require("./app.js");
const conectarDB = require("./database/connection.js");

conectarDB();

// Puerto del Servicio Web
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

