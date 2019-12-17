const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nombre_usuario: String,
    correo: String,
    contraseña: String
})

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;