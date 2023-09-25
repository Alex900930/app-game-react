import React from 'react'
import './Login.css';
import Button from "./components/Button";
import TextField from "./components/TextField";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useToken } from '../../Context/TokenContext';
import {faLock} from '@fortawesome/free-solid-svg-icons';


const Login = () => {
  const [body, setBody] = useState({username: '', password: ''});
  const { setToken } = useToken();
  const history = useNavigate();

  const handleChange = e => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        const data = await response.json();
        const authToken = data.token;
        setToken(authToken);
        history('/app');
      } else {
        console.error("Autenticación Fallida");
      }

    } catch (error) {
      console.error('Error al realizar la autenticación:', error);
    }
  };

  const onSubmitForm = () => {
    history('/registro');
  }

  return (
    <div className="login-container">
      <FontAwesomeIcon icon={faLock} className="security-icon" />
      <h2>Iniciar Sesión</h2>
      <form className="login-form">
        <TextField
          type={"text"}
          name={"username"}
          placeholder={"Nombre de Usuario"}
          value={body.username}
          onChange={handleChange}
          required />
        <TextField
          type={"password"}
          name={"password"}
          placeholder={"Contraseña"}
          value={body.password}
          onChange={handleChange}
          required />
       <Button
         onClick={() => onSubmit()}
       />
        <a href="/registro" onClick={() => onSubmitForm()}>Crear Cuenta</a>

      </form>
    </div>
  )
}
export default Login
