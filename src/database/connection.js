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
};

//const connectWithRetry = () => {
//  console.log('Intentando conectar a MongoDB...');
//  // ENV PROD
//  mongoose.connect("mongodb://database/mydatabase")
//    .then(db => {
//      console.log("🟢 DB conectada correctamente a", db.connection.host);
//      console.log(`🟢 Nombre de la base de datos: ${db.connection.name}`);
//    })
//    .catch(err => {
//      console.error('❌ Error de conexión a MongoDB:', err);
//      console.log('Reintentando en 5 segundos...');
//      setTimeout(connectWithRetry, 5000);
//    });
//};
//
//connectWithRetry();


module.exports = conectarDB;
