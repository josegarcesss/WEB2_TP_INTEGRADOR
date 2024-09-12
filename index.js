const express = require('express');
const app = express();

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

const axios = require('axios');

app.get('/api/artworks', async (req, res) => {
  try {
    const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al consumir la API' });
  }
});

    