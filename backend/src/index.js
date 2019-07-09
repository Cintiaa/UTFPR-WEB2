const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');


const authRouter = require('./controllers/auth');
const indexRouter = require('./controllers/index');
const eventoRouter = require('./controllers/evento');

const app = express();


//Configurando conexão com o banco de dados
mongoose.connect('mongodb://agenda:agenda123@ds151086.mlab.com:51086/db-agenda', { useNewUrlParser: true })
    .then(() => {
        console.log('Conexão com o banco de dados realizada com sucesso!!');
    }).catch((error) => {
        console.log('Erro na conexão com o banco de dados', error);
    });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/home', eventoRouter);

const porta = process.env.PORT || '3000';
app.listen(porta, () => {
    console.log('Servidor rodando na porta ', porta);
});
module.exports = app;