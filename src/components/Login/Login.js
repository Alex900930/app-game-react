import React from 'react'
import './Login.css';
import Button from "./components/Button";
import TextField from "./components/TextField";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLock} from '@fortawesome/free-solid-svg-icons';


const Login = () => {
  const [body, setBody] = useState({username: '', password: ''});
  const history = useNavigate();

  const handleChange = e => {
    setBody({
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = () => {
    history('/app');
  }

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
          placeholder={"Nombre de Usuario"}
          value={body.username}
          onChange={handleChange}
          required />
        <TextField
          type={"password"}
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
