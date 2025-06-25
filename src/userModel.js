const mongoose = require("mongoose");

//Creamos el Schema de BD
const userSchema = new mongoose.Schema(
    {
        name: {type: String},
        email: {type: String},
        password: {type: String}
    },
    {
        timestamp: true,
        versionKey: false
    }
);

//Asociamos el Schema a una coleccion (users) de Base de Datos    
const ModelUser = mongoose.model("users", userSchema);

module.exports = ModelUser;
