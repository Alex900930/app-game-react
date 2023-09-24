import express from 'express';
import fetch from "node-fetch";
import cors from 'cors';
const app = express();
const port = 5000;

app.use(cors());

app.get('/api/obtenerDatos', async (req, res) => {
  try {
    const response = await fetch('https://www.freetogame.com/api/games');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener datos' });
  }
});


app.listen(port, () => {
  console.log(`Servidor backend en ejecución en el puerto ${port}`);
});
