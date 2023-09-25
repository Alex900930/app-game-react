import express from 'express';
import fetch from "node-fetch";
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use(cors());

dotenv.config();

const secretKey = process.env.SECRET_KEY;

const users = [
  { id: 1, username: 'admin', password: 'admin' },
  { id: 2, username: 'usuario1', password: 'contrasena1' },
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Credenciales incorrectas' });
  }

  const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, { expiresIn: '5h' });

  res.json({ token });
});

app.get('/api/obtenerDatos',verifyToken, async (req, res) => {
  try {
    const response = await fetch('https://www.freetogame.com/api/games');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener datos' });
  }
});

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token no válido' });
    }

    req.user = decoded;
    next();
  });
}

app.listen(port, () => {
  console.log(`Servidor backend en ejecución en el puerto ${port}`);
});
