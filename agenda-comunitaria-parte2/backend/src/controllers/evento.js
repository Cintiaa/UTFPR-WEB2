const express = require('express');

const Evento = require('../models/evento');
const tokenVerify = require('../auth');


const router = express.Router();

router.post('/evento', tokenVerify, async (req, res) => {

    try {

        const evento = await Evento.create(req.body);
        //res.status(200).json({ message: 'Evento cadastrado com sucesso!' });

        console.log(evento)
        return res.json({ evento, message: 'Evento cadastrado com sucesso!' });


    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: 'Falha na tentativa de cadastro, tente novamente!' });
    }
});


module.exports = router;