import Juego from "./Juego";
import React, {useEffect, useState} from "react";
import { useToken } from '../../../../Context/TokenContext';
import './Card.css';

const Card = () => {
  const { token } = useToken();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/obtenerDatos", {
      method: "GET",
      headers: {
        "Authorization": `${token}`,
        "Content-Type": "application/json",
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then(data =>  setData(data))
      .finally(()=>setLoading(false))
      .catch(error => console.log(error));
  }, []);

  return (
      <>
        <h1 className="titulocss">JUEGOS</h1>
        <div className="card-grid">
          {loading && <div>Loading...</div>}
          {data &&
            data.map((juego) => (
              <Juego key={juego.id} juego={juego} className="personaje" />
            ))}
        </div>
      </>


  )
}
export default Card
