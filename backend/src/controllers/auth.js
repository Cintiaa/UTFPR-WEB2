const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');
const authConfig = require('../config/auth');


const router = express.Router();

router.post('/cadastro', async (req, res) => {
    const email = req.body.email;
    try {
        if (await Usuario.findOne({ email }))
            return res.status(400).json({ error: 'E-mail já cadastrado!' });

        const usuario = await Usuario.create(req.body);
        //return res.json(usuario);

        console.log(usuario)
        return res.json({ usuario });
        //res.redirect('/login');
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: 'Falha na tentativa de cadastro, tente novamente!' });
    }
});


router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {

        const usuario = await Usuario.findOne({ email });
        if (!usuario)
            return res.status(400).json({ error: 'Usuário não existe!' });

        if (!await bcrypt.compare(password, usuario.password))
            return res.status(400).json({ error: 'Senha Inválida!' });


        //Criando token de autenticação
        const token = jwt.sign({ id: usuario.id }, authConfig.secret, {
            expiresIn: 1800,
        })
        res.json({ usuario, token });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: 'Falha na tentativa de login, tente novamente!' });
    }

});


module.exports = router;