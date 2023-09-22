import React from 'react'
import './Login.css';
import Button from "./components/Button";
import TextField from "./components/TextField";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";

const Login = () => {
  const [body, setBody] = useState({username: '', password: ''});

  const handleChange = e => {
    setBody({
      [e.target.name]: e.target.value,
    });
    console.log(body);
  }

  const onSubmit = () => {
    console.log(body);
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

      </form>
    </div>
  )
}
export default Login
