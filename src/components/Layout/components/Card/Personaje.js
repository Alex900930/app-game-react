import React from 'react'

const Personaje = ({nombre_personaje,caracteristicas}) => {
  return (
    <div className="personaje">
      <div className="imagen_personaje"></div>
      <div className="detalle">
        <h2>{nombre_personaje}</h2>
        <p>{caracteristicas}</p>
        <div className="btn">
          <h6>Leer Mas</h6>
        </div>
      </div>

    </div>
  )
}
export default Personaje
