const express = require("express");
const cors = require ('cors');
const mongoose = require('mongoose');
const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());

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

app.post('/novoUsuario', (req,res) => {
    const dados = req.body;
    console.log(dados);
})

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`);
});