//Gerenciando a lógica das rotas de login e cadastro

const Usuario = require('../models/Usuario');

exports.showLogin = (req, res) => {
    res.render('login');
}

exports.login = (req, res) => {
    const {email, senha} = req.body;
    Usuario.findByEmail(email, (usuarios) => {
        if(usuarios && usuarios.senha === senha) {
            res.send('Login bem-sucedido!!');
        } else{
            res.send('Email ou senha incorretos!!');
        }
    });
};

exports.showRegister = (req, res) => {
    res.render('Register!');
};

exports.register = (req, res) => {
    const {nome, email, senha, cpf} = req.body;
    Usuario.createUser(nome, email, senha, cpf, () => {
        res.send('Usuário cadastrado com sucesso!');
    });
};