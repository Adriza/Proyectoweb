const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PublicacionSchema = new Schema({
    Texto: String,
    Fecha: Date,
    Id_usuario: [
        {type: Schema.Types.ObjectId,
          ref: "Usuario"
          }
       ],
       
   
      


    
})

const Publicacion = mongoose.model('Publicacion', PublicacionSchema);

module.exports = Publicacion;