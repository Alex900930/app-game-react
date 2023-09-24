import './Juego.css';

const Juego = ({juego}) => {
  return (
    <div className="juegocss">
      <img
        src={juego.thumbnail}
        alt={juego.title}
        className="juegoimg"
      />
      <h2>{juego.title}</h2>
    </div>
  )
}
export default Juego
