const mongoose = require("mongoose");

/*
// ENV PROD
mongoose.connect("mongodb://database/mydatabase")
    .then(db=>console.log("DB is connected to ", db.connection.host))
    .catch(err => console.error(err));
*/
//ENV DEV
// mongoose.connect("mongodb://localhost:27018/patitas_felices")
// .then(db=>console.log("DB is connected to", db.connection.host))
// .catch(err=>console.error(err));

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conectado a la DB");
    } catch (error) {
        console.error("Error al conectar a la DB", error);
        process.exit(1);
    }
}

module.exports = conectarDB;
