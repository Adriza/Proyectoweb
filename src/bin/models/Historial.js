const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorialSchema = new Schema({
    Texto: String,
    Fecha: Date,
    Id_usuario: [
          {type: Schema.Types.ObjectId,
            ref: "Usuario"
            }
         ]

})


const Historial = mongoose.model('Historial', HistorialSchema);

module.exports = Historial;