const mongoose = require('mongoose');
mongoose.Promise = Promise;

const EventoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    data: {
        type: String,
        required: true,
    },
    horario:{
        type: String,
    },
    createAt:{
        type: Date,
        default: Date.now,
    }
});


module.exports = mongoose.model('Eventos', EventoSchema);