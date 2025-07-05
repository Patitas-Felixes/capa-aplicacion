const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const usuarioModel = require("../models/usuario.model.js");

passport.use(new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
        try {
            const usuario = await usuarioModel.findOne({ email });
            if (!usuario) {
                return done(null, false, { message: "Usuario no encontrado" });
            }
            const passwordCorrecto = await usuario.compararPassword(password);
            if (!passwordCorrecto) {
                return done(null, false, { message: "Contraseña incorrecta" });
            }
            return done(null, usuario);
        } catch (err) {
            return done(err);
        }
    }
));

passport.serializeUser((usuario, done) => done(null, usuario._id));
passport.deserializeUser(async (id, done) => {
    try {
        const usuario = await usuarioModel.findById(id);
        done(null, usuario);
    } catch (err) {
        done(err);
    }

});

module.exports = passport;