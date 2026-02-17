import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();
  const { user, equipos, registrarPrestamo, setUser } = useContext(AppContext);

  const reservar = (nombre) => {
    registrarPrestamo(nombre);
    alert("Equipo reservado correctamente");
  };

  const cerrarSesion = () => {
    setUser(null);
    navigate("/login");
  };

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar">
        <h2>LabStock</h2>
        <div className="nav-links">
          <span onClick={() => navigate("/")}>Inicio</span>
          <span onClick={() => navigate("/history")}>Historial</span>
          <span onClick={cerrarSesion}>Cerrar Sesión</span>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="home-container">
        <h3 className="welcome">
          Bienvenido, {user.nombre} 👋
        </h3>

        <div className="equipos-grid">
          {equipos.map((eq, index) => (
            <div key={index} className="equipo-card">
              <img src={eq.img} alt={eq.nombre} className="equipo-img" />
              <h4>{eq.nombre}</h4>
              <p className="stock">
                Disponibles: <span>{eq.stock}</span>
              </p>

              <button
                className={
                  eq.stock === 0 ? "btn-reservar btn-disabled" : "btn-reservar"
                }
                disabled={eq.stock === 0}
                onClick={() => reservar(eq.nombre)}
              >
                {eq.stock === 0 ? "No Disponible" : "Reservar"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
