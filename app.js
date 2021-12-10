const express = require("express");
const cors = require ('cors');
const mongoose = require('mongoose');
const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());
const users = require('./models/user.model')

// console com o banco de dados mongoDB
mongoose.connect('mongodb://localhost:27017/Cookmaster', {
    useUnifiedTopology: true,
}, (err) => {
    if(err){
        console.log(err)
    }else
    console.log('Conectado ao banco de dados')
});

// rota GET para endereço inicial do projeto
app.get('/index', (request, response) => {
    return response.status(200).json({
mensagem: 'você acessou a rota GET /index',
    });
});

app.post('/novoUsuario', async (req,res) => {
    const dados = req.body;
    //console.log(dados);
    await Users.create(dados).then((user) => {
        return res.status(201).json({
            users.create(dados)
            
        });
    }).catch((err) => {
        return res.status(400).json({
            err
        })
    })
})

app.listen(PORT, () => {
    console.log('servidor rodando na porta ${PORT}');
});