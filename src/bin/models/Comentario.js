const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComentarioSchema = new Schema({
    Texto: String,
    Fecha: Date,
    Id_usuario: [
          {type: Schema.Types.ObjectId,
            ref: "Usuario"
            }
         ],
    Id_comentarios:  [
          {type: Schema.Types.ObjectId,
            ref: "Publicacion"
         }
       ]

})

const Comentario = mongoose.model('Comentario', ComentarioSchema);

module.exports = Comentario;