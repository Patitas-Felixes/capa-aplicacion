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

// Function to connect to MongoDB
//ENV DEV
//const conectarDB = async () => {
//    try {
//        await mongoose.connect(process.env.MONGODB_URI);
//        console.log("Conectado a la DB");
//    } catch (error) {
//        console.error("Error al conectar a la DB", error);
//        process.exit(1);
//    }
//};

//ENV PROD
// Function to connect to MongoDB with retry logic
const conectarDB = async () => {
  const maxRetries = 5;
  let retries = 0;
  
  const connect = async () => {
    try {
      console.log('Intentando conectar a MongoDB...');
      const mongoURI = process.env.NODE_ENV === 'production'
          ? process.env.PROD_MONGODB_URI
          : process.env.MONGODB_URI;
      
      console.log(`Intento ${retries + 1} - Conectando a: ${mongoURI.replace(/mongodb:\/\/([^:]+):?.*@/, 'mongodb://***:***@')}`);
      
      await mongoose.connect(mongoURI);
      console.log(`✅ DB conectada correctamente en modo ${process.env.NODE_ENV || 'desarrollo'}`);
      console.log(`✅ Host: ${mongoose.connection.host}`);
      console.log(`✅ Base de datos: ${mongoose.connection.name}`);
    } catch (error) {
      console.error('❌ Error de conexión a MongoDB:', error.message);
      
      if (retries < maxRetries) {
        retries++;
        const delay = retries * 3000; // Incremento progresivo: 3s, 6s, 9s...
        console.log(`Reintentando en ${delay/1000} segundos... (Intento ${retries} de ${maxRetries})`);
        return new Promise(resolve => setTimeout(() => resolve(connect()), delay));
      }
      
      console.error('❌ Máximo de intentos alcanzado. No se pudo conectar a MongoDB.');
      process.exit(1);
    }
  };
  
  // Esperar 5 segundos antes del primer intento para dar tiempo al contenedor de MongoDB
  console.log('Esperando 5 segundos para que MongoDB se inicialice...');
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  return connect();
};

// Function to connect to MongoDB with retry logic
// Uncomment the following lines if you want to use retry logic
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
