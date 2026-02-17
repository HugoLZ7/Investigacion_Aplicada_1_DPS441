import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/home.css";
import "../styles/history.css";

function History() {
  const navigate = useNavigate();
  const { historial, devolverEquipo } = useContext(AppContext);

  return (
    <>
      {/* Navbar reutilizado */}
      <div className="navbar">
        <h2>LabStock</h2>
        <div className="nav-links">
          <span onClick={() => navigate("/")}>Inicio</span>
          <span onClick={() => navigate("/returns")}>Devoluciones</span>
          <span onClick={() => navigate("/login")}>Cerrar Sesión</span>
        </div>
      </div>

      <div className="history-container">
        <h3 className="history-title">Historial de Préstamos</h3>

        {historial.length === 0 ? (
          <p className="empty-text">No hay equipos prestados actualmente.</p>
        ) : (
          <div className="history-grid">
            {historial.map((item) => (
              <div key={item.id} className="history-card">
                <img src={item.img} alt={item.nombre} className="history-img" />
                <h4>{item.nombre}</h4>
                <p>Prestado por: {item.usuario}</p>
                <p>Fecha: {item.fecha}</p>

                <button
                  className="btn-devolver"
                  onClick={() => devolverEquipo(item.id)}
                >
                  Devolver
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default History;
