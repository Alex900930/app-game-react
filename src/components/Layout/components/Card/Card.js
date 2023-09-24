import {useState, useEffect} from "react";
import Personaje from "./Personaje";

const Card = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/obtenerDatos")
      .then(response => response.json())
      .then(data =>  setData(data))
      .catch(error => console.log(error));
  }, []);
  let nombre_personaje = "Vegueta";
  let caracteristicas = "Buen Peleador, 1er Super Sayayin";
  return (
    <div className="card">
      <h1>Lsita de Video Juegos</h1>
      <ul>
        {data && data.map((juego) => <li key={juego.id}>{juego.title}</li>)}
      </ul>
      <Personaje nombre_personaje={nombre_personaje} caracteristicas={caracteristicas}/>
    </div>


  )
}
export default Card
