const mongoose = require("mongoose");

/*
// ENV PROD
mongoose.connect("mongodb://database/mydatabase")
    .then(db=>console.log("DB is connected to ", db.connection.host))
    .catch(err => console.error(err));
*/
//ENV DEV
mongoose.connect("mongodb://localhost:27018/patitas_felices")
.then(db=>console.log("DB is connected to", db.connection.host))
.catch(err=>console.error(err));
