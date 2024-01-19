// server.js
const express = require('express');
const cors = require('cors'); // Adicione esta linha
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors()); // Adicione esta linha
app.use(express.json());

app.post('/makeRequest', async (req, res) => {
  try {
    const googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbx9vcCZdnecoI2PzsTOJLqo1qMAHCA919C_GgAT7THrTBdu6wvg3OR_EMG5jrwIaBouMw/exec';
    // 

    // Faz a solicitação para o script do Google Apps
    const response = await axios.post(googleAppsScriptUrl, req.body);

    // Retorna a resposta do script do Google Apps ao cliente
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
