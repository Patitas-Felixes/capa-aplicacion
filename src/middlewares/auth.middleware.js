const estaAutenticado = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ message: "Acceso no autorizado. Inicia sesión." });
};

const esAdmin = (req, res, next) => {
    console.log(req.user);
    if (req.user && req.user.es_admin) {
        return next();
    }
    res.status(403).json({ message: "Acceso denegado: solo para administradores." });
};

module.exports = { estaAutenticado, esAdmin };