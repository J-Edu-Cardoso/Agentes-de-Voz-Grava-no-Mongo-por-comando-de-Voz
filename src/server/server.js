const express = require('express');
const path = require('path');
const app = express();

// Configurar para servir arquivos estáticos da pasta static
app.use(express.static(path.join(__dirname, 'static')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
