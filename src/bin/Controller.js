const mongoose = require('mongoose');
const Usuario = require('./models/Usuario');
const Publicacion = require('./models/Publicacion');
const Comentario = require('./models/Comentario');
const Historial = require('./models/Historial');

class Controller {
    constructor() {
        this.connect();
    }
    async connect(){
        try {
            await mongoose.connect(
                'mongodb://localhost:27017/backend', { useNewUrlParser: true}
            )
            console.log('Connected to DB');
        } catch (err) {
            console.error(err);
        }
    }

    getUsuarios(res) {
        Usuario.find({}, (err, usuarios) => {
            if (err) throw err;
            res.send(usuarios);
        })
    }

    getPublicaciones(res) {
        Publicacion.find({}, (err, publicaciones) => {
            if (err) throw err;
            res.send(publicaciones);
        })
    }
    addUsuario(res, data) {
        Usuario.create(data, (err, usuario) => {
            if (err) throw err;
            res.send({
                msg: 'Usuario Added',
                usuario: usuario
            })
        })
    }
}

exports.controller = new Controller();