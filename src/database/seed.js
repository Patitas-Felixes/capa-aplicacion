const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

const marcaModel = require("../models/marca.model");
const categoriaModel = require("../models/categoria.model");
const productoModel = require("../models/producto.model");
const pedidoModel = require("../models/pedido.model");
const comentarioModel = require("../models/comentario.model");
const usuarioModel = require("../models/usuario.model");

dotenv.config();

const seedDB = async () => {
    console.log("Conectando a la DB");
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conectado a la DB");
    } catch (error) {
        console.error("Error al conectar a la DB: ", error);
        process.exit(1);
    }

    console.log("Seeding DB");
    console.log("Eliminando colecciones")
    try {
        // await marcaModel.deleteMany({});
        // await categoriaModel.deleteMany({});
        // await productoModel.deleteMany({});
        // await pedidoModel.deleteMany({});
        // await comentarioModel.deleteMany({});
        // await usuarioModel.deleteMany({});

        await marcaModel.collection.drop();
        await categoriaModel.collection.drop();
        await productoModel.collection.drop();
        await pedidoModel.collection.drop();
        await comentarioModel.collection.drop();
        await usuarioModel.collection.drop();

        console.log("Colecciones eliminadas");
    } catch (error) {
        console.error("Error al eliminar las colecciones: ", error);
        process.exit(1);
    }

    console.log("Insertando marcas");
    try {
        const marcas = await marcaModel.insertMany([
            { nombre: "Purina" },
            { nombre: "Pedigree" },
            { nombre: "Kong" },
            { nombre: "Catit" },
            { nombre: "Ferplast" },
            { nombre: "Petstar" },
            { nombre: "Vitalcan" },
            { nombre: "Frontline" },
        ]);
        console.log("Marcas insertadas");

        console.log("Insertando categorías");
        const categorias = await categoriaModel.insertMany([
            { nombre: "Alimentos", descripcion: "Comida para todo tipo de mascotas." },
            { nombre: "Snacks", descripcion: "Premios, huesos y galletas saludables." },
            { nombre: "Juguetes", descripcion: "Diversión y ejercicio para mascotas." },
            { nombre: "Accesorios", descripcion: "Collares, correas, platos, ropa y transportadoras." },
            { nombre: "Higiene", descripcion: "Limpieza, shampoo, arena y pipetas." },
            { nombre: "Antipulgas", descripcion: "Productos para el control de pulgas y garrapatas." },
            { nombre: "Salud", descripcion: "Vitaminas, suplementos y productos veterinarios." },
            { nombre: "Mascotas exóticas", descripcion: "Productos para aves, roedores y otras especies." },
            { nombre: "Entrenamiento", descripcion: "Clickers, sprays y equipos de adiestramiento." },
        ]);
        console.log("Categorías insertadas");

        console.log("Insertando productos");

        const productos = await productoModel.insertMany([{
            nombre: "Croquetas Purina Dog Chow 8 kg",
            descripcion: "Alimento seco para perro adulto",
            precio: 420.00,
            stock: 12,
            id_categoria: categorias[0]._id,
            id_marca: marcas[0]._id,
            imagen_url: "img-croquetas-purina.jpg"
        }, {
            nombre: "Croquetas Pedigree Cachorro 2 kg",
            descripcion: "Alimento seco para cachorro",
            precio: 155.00,
            stock: 6,
            id_categoria: categorias[0]._id,
            id_marca: marcas[1]._id,
            imagen_url: "img-croquetas-pedigree.jpg"
        }, {
            nombre: "Snack Crunchy Salmon",
            descripcion: "Premio para gatos, sabor salmón",
            precio: 59.00,
            stock: 33,
            id_categoria: categorias[1]._id,
            id_marca: marcas[0]._id,
            imagen_url: "img-snack-salmon.jpg"
        }, {
            nombre: "Huesito dental Pedigree",
            descripcion: "Limpieza dental para perros, sabor pollo",
            precio: 99.00,
            stock: 22,
            id_categoria: categorias[1]._id,
            id_marca: marcas[1]._id,
            imagen_url: "img-huesito-pedigree.jpg"
        }, {
            nombre: "Juguete Kong Clásico Rojo M",
            descripcion: "Juguete de goma resistente para perros",
            precio: 300.00,
            stock: 7,
            id_categoria: categorias[2]._id,
            id_marca: marcas[2]._id,
            imagen_url: "img-kong-rojo.jpg"
        }, {
            nombre: "Pelota Kong Squeezz",
            descripcion: "Pelota de goma para juegos",
            precio: 145.00,
            stock: 18,
            id_categoria: categorias[2]._id,
            id_marca: marcas[2]._id,
            imagen_url: "img-pelota-kong.jpg"
        }, {
            nombre: "Juguete ratón con sonido",
            descripcion: "Juguete electrónico para gatos",
            precio: 120.00,
            stock: 18,
            id_categoria: categorias[2]._id,
            id_marca: marcas[3]._id,
            imagen_url: "img-juguete-raton.jpg"
        }, {
            nombre: "Clicker de entrenamiento",
            descripcion: "Clicker ergonómico para adiestramiento",
            precio: 55.00,
            stock: 35,
            id_categoria: categorias[8]._id,
            id_marca: marcas[2]._id,
            imagen_url: "img-clicker.jpg"
        }, {
            nombre: "Collar ajustable azul",
            descripcion: "Collar nylon para perros medianos",
            precio: 70.00,
            stock: 40,
            id_categoria: categorias[3]._id,
            id_marca: marcas[5]._id,
            imagen_url: "img-collar-azul.jpg"
        }, {
            nombre: "Correa extensible 5 m",
            descripcion: "Correa extensible hasta 5 metros",
            precio: 180.00,
            stock: 20,
            id_categoria: categorias[3]._id,
            id_marca: marcas[5]._id,
            imagen_url: "img-correa-extensible.jpg"
        }, {
            nombre: "Bebedero portátil de viaje",
            descripcion: "Botella y bebedero plegable para paseo",
            precio: 80.00,
            stock: 22,
            id_categoria: categorias[3]._id,
            id_marca: marcas[3]._id,
            imagen_url: "img-bebedero-portatil.jpg"
        }, {
            nombre: "Comedero doble acero",
            descripcion: "Para agua y croquetas, base antideslizante",
            precio: 180.00,
            stock: 20,
            id_categoria: categorias[3]._id,
            id_marca: marcas[5]._id,
            imagen_url: "img-comedero-doble.jpg"
        }, {
            nombre: "Transportadora Ferplast Small",
            descripcion: "Transportadora para gatos y perros pequeños",
            precio: 520.00,
            stock: 10,
            id_categoria: categorias[3]._id,
            id_marca: marcas[4]._id,
            imagen_url: "img-transportadora.jpg"
        }, {
            nombre: "Camiseta perro talla M",
            descripcion: "Camiseta divertida para perro",
            precio: 130.00,
            stock: 9,
            id_categoria: categorias[3]._id,
            id_marca: marcas[4]._id,
            imagen_url: "img-camiseta.jpg"
        }, {
            nombre: "Shampoo hipoalergénico",
            descripcion: "Especial piel sensible, sin fragancia",
            precio: 89.00,
            stock: 15,
            id_categoria: categorias[4]._id,
            id_marca: marcas[1]._id,
            imagen_url: "img-shampoo.jpg"
        }, {
            nombre: "Arena Catit 5L",
            descripcion: "Arena aglutinante para gatos",
            precio: 59.00,
            stock: 30,
            id_categoria: categorias[4]._id,
            id_marca: marcas[3]._id,
            imagen_url: "img-arena-catit.jpg"
        }, {
            nombre: "Collar antipulgas Seresto",
            descripcion: "Perros pequeños, eficacia 8 meses",
            precio: 780.00,
            stock: 13,
            id_categoria: categorias[5]._id,
            id_marca: marcas[1]._id,
            imagen_url: "img-seresto.jpg"
        }, {
            nombre: "Pipetas Frontline",
            descripcion: "Pipetas antipulgas para gatos y perros",
            precio: 315.00,
            stock: 17,
            id_categoria: categorias[5]._id,
            id_marca: marcas[7]._id,
            imagen_url: "img-frontline.jpg"
        }, {
            nombre: "Vitaminas Puppy Booster",
            descripcion: "Vitaminas y minerales para perros jóvenes",
            precio: 95.00,
            stock: 14,
            id_categoria: categorias[6]._id,
            id_marca: marcas[6]._id,
            imagen_url: "img-vitaminas.jpg"
        }, {
            nombre: "Alpiste premium para aves",
            descripcion: "Bolsa de 2kg para aves pequeñas",
            precio: 89.00,
            stock: 24,
            id_categoria: categorias[7]._id,
            id_marca: marcas[0]._id,
            imagen_url: "img-alpiste.jpg"
        }, {
            nombre: "Jaula para hámster",
            descripcion: "Rueda, túneles y bebedero para roedores pequeños",
            precio: 749.00,
            stock: 8,
            id_categoria: categorias[7]._id,
            id_marca: marcas[4]._id,
            imagen_url: "img-jaula-hamster.jpg"
        }, {
            nombre: "Rascador Catit con pelota",
            descripcion: "Rascador con pelota para gatos",
            precio: 270.55,
            stock: 5,
            id_categoria: categorias[2]._id,
            id_marca: marcas[3]._id,
            imagen_url: "img-rascador.jpg"
        }]);
        console.log("Productos insertados");

        console.log("Insertando usuarios");
        const usuarios = await usuarioModel.insertMany([
            {
                nombre: "Carlos",
                apellido: "Ramírez",
                email: "carlos.ramirez@email.com",
                direccion: "Av. Siempre Viva 123",
                password: await bcrypt.hash("passwordAdmin1", 10),
                es_admin: true
            }, {
                nombre: "María",
                apellido: "López",
                email: "maria.lopez@email.com",
                direccion: "Calle de la Amistad 456",
                password: await bcrypt.hash("passwordAdmin2", 10),
                es_admin: true
            }, {
                nombre: "Antonio",
                apellido: "Zapata",
                email: "antonio.zapata@email.com",
                direccion: "Blvd. Perros 789",
                password: await bcrypt.hash("passwordAdmin3", 10),
                es_admin: true
            }, {
                nombre: "Sofía",
                apellido: "Gómez",
                email: "sofia.gomez@email.com",
                direccion: "Calle Luna 100",
                password: await bcrypt.hash("passwordAdmin4", 10),
                es_admin: true
            }, {
                nombre: "Ricardo",
                apellido: "Silva",
                email: "ricardo.silva@email.com",
                direccion: "Av. Sol 200",
                password: await bcrypt.hash("passwordAdmin5", 10),
                es_admin: true
            }, {
                nombre: "Elena",
                apellido: "Martínez",
                email: "elena.martinez@email.com",
                direccion: "Cra. del Río 350",
                password: await bcrypt.hash("contraUltraSegura1", 10),
                es_admin: false
            }, {
                nombre: "Jesús",
                apellido: "Ortega",
                email: "jesus.ortega@email.com",
                direccion: "Paseo del Mar 50",
                password: await bcrypt.hash("contraUltraSegura2", 10),
                es_admin: false
            }, {
                nombre: "Andrea",
                apellido: "Chávez",
                email: "andrea.chavez@email.com",
                direccion: "Bosques 450",
                password: await bcrypt.hash("contraUltraSegura3", 10),
                es_admin: false
            }, {
                nombre: "Claudia",
                apellido: "Hernández",
                email: "claudia.hdz@email.com",
                direccion: "Flores 555",
                password: await bcrypt.hash("contraUltraSegura4", 10),
                es_admin: false
            }, {
                nombre: "Luis",
                apellido: "Vega",
                email: "luis.vega@email.com",
                direccion: "Cañada Azul 24",
                password: await bcrypt.hash("contraUltraSegura5", 10),
                es_admin: false
            }, {
                nombre: "Marisol",
                apellido: "Santos",
                email: "marisol.santos@email.com",
                direccion: "Fracc. Jardines 300",
                password: await bcrypt.hash("contraUltraSegura6", 10),
                es_admin: false
            }, {
                nombre: "Fabio",
                apellido: "Ruiz",
                email: "fabio.ruiz@email.com",
                direccion: "Cerrada Sauce 150",
                password: await bcrypt.hash("contraUltraSegura7", 10),
                es_admin: false
            }, {
                nombre: "Ariadna",
                apellido: "Paredes",
                email: "ariadna.paredes@email.com",
                direccion: "Fronteras 452",
                password: await bcrypt.hash("contraUltraSegura8", 10),
                es_admin: false
            }, {
                nombre: "Patricio",
                apellido: "Navarrete",
                email: "patricio.nava@email.com",
                direccion: "Arboledas 98",
                password: await bcrypt.hash("contraUltraSegura9", 10),
                es_admin: false
            }
        ]);
        console.log("Usuarios insertados");

        console.log("Insertando comentarios");
        const comentarios = await comentarioModel.insertMany([
            {
                producto_id: productos[0]._id,
                usuario_id: usuarios[0]._id,
                comentario: "Muy buen producto",
                comentario_padre_id: null,
                likes: [usuarios[0]._id, usuarios[1]._id],
                dislikes: [usuarios[2]._id],
            },
            {
                producto_id: productos[2]._id,
                usuario_id: usuarios[3]._id,
                comentario: "A mi gato le encantaron estos snacks.",
                comentario_padre_id: null,
                likes: [usuarios[3]._id],
                dislikes: [],
            }
        ]);

        const comentariosHijos = await comentarioModel.insertMany([
            {
                producto_id: productos[2]._id,
                usuario_id: usuarios[5]._id,
                comentario: "¡Qué bueno! Los voy a comprar para el mío.",
                comentario_padre_id: comentarios[1]._id,
                likes: [],
                dislikes: [],
            },
            {
                producto_id: productos[0]._id,
                usuario_id: usuarios[7]._id,
                comentario: "Gracias por la recomendación, lo probaré.",
                comentario_padre_id: comentarios[0]._id,
                likes: [],
                dislikes: [],
            },
        ]);
        console.log("Comentarios insertados");

        console.log("Insertando pedidos");
        const pedidos = await pedidoModel.insertMany([
            {
                cliente_id: usuarios[0]._id,
                total: 720.00,
                estado: "Entregado",
                direccion_envio: "Av. Siempre Viva 123",
                detalles: [
                    { producto_id: productos[0]._id, cantidad: 1, precio_unitario: 420.00 },
                    { producto_id: productos[4]._id, cantidad: 1, precio_unitario: 300.00 }
                ],
            },
            {
                cliente_id: usuarios[1]._id,
                total: 260.00,
                estado: "Pagado",
                direccion_envio: "Calle de la Amistad 456",
                detalles: [
                    { producto_id: productos[2]._id, cantidad: 2, precio_unitario: 59.00 },
                    { producto_id: productos[3]._id, cantidad: 1, precio_unitario: 99.00 }
                ],
            },
            {
                cliente_id: usuarios[2]._id,
                total: 545.00,
                estado: "Pendiente",
                direccion_envio: "Blvd. Perros 789",
                detalles: [
                    { producto_id: productos[5]._id, cantidad: 2, precio_unitario: 145.00 },
                    { producto_id: productos[18]._id, cantidad: 1, precio_unitario: 95.00 }
                ],
            },
            {
                cliente_id: usuarios[9]._id,
                total: 939.00,
                estado: "Pagado",
                direccion_envio: "Cañada Azul 24",
                detalles: [
                    { producto_id: productos[16]._id, cantidad: 1, precio_unitario: 780.00 },
                    { producto_id: productos[11]._id, cantidad: 1, precio_unitario: 180.00 },
                    { producto_id: productos[8]._id, cantidad: 2, precio_unitario: 70.00 }
                ],
                // Pedido realizado hace 2 días
                createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
            },
            {
                cliente_id: usuarios[10]._id,
                total: 138.00,
                estado: "Pendiente",
                direccion_envio: "Fracc. Jardines 300",
                detalles: [
                    { producto_id: productos[2]._id, cantidad: 2, precio_unitario: 59.00 }
                ],
            },
            {
                cliente_id: usuarios[11]._id,
                total: 839.00,
                estado: "Entregado",
                direccion_envio: "Cerrada Sauce 150",
                detalles: [
                    { producto_id: productos[20]._id, cantidad: 1, precio_unitario: 749.00 },
                    { producto_id: productos[21]._id, cantidad: 1, precio_unitario: 270.00 }
                ],
                // Pedido realizado hace 5 días
                createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
            },
            {
                cliente_id: usuarios[12]._id,
                total: 902.00,
                estado: "Cancelado",
                direccion_envio: "Fronteras 452",
                detalles: [
                    { producto_id: productos[17]._id, cantidad: 2, precio_unitario: 315.00 }
                ],
            },
            {
                cliente_id: usuarios[13]._id,
                total: 269.00,
                estado: "Entregado",
                direccion_envio: "Arboledas 98",
                detalles: [
                    { producto_id: productos[19]._id, cantidad: 2, precio_unitario: 89.00 },
                    { producto_id: productos[7]._id, cantidad: 1, precio_unitario: 55.00 }
                ],
                // Pedido realizado hace 1 día
                createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
            }
        ]);
        console.log("Pedidos insertados");

        console.log("Datos insertados correctamente");
    } catch (error) {
        console.error("Error al intentar insertar: ", error);
        process.exit(1);
    } finally {
        await mongoose.connection.close();
        console.log("Conexión a la DB cerrada");
    }
}

seedDB().then(() => {
    console.log("Seeding finalizado correctamente");
    process.exit(0);
}).catch((error) => {
    console.error("Error al intentar seed: ", error);
    process.exit(1);
});
