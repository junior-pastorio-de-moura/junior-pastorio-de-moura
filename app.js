const express = require('express');
const app = express();
const dotenv = require('dotenv');
const usuarioRoutes = require('./routes/usuarioRoutes');
const mainRoutes = require('./routes/mainRoutes');

dotenv.config();

// Configurações
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/', mainRoutes);
app.use('/', usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
