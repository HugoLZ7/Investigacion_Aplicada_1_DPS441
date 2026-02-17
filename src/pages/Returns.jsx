import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/home.css";
import "../styles/history.css";

function Returns() {
  const navigate = useNavigate();
  const { devoluciones } = useContext(AppContext);

  return (
    <>
      <div className="navbar">
        <h2>LabStock</h2>
        <div className="nav-links">
          <span onClick={() => navigate("/")}>Inicio</span>
          <span onClick={() => navigate("/history")}>Historial</span>
        </div>
      </div>

      <div className="history-container">
        <h3 className="history-title">Registro de Devoluciones</h3>

        {devoluciones.length === 0 ? (
          <p className="empty-text">Aún no hay devoluciones registradas.</p>
        ) : (
          <div className="history-grid">
            {devoluciones.map((item) => (
              <div key={item.id} className="history-card">
                <img src={item.img} alt={item.nombre} className="history-img" />
                <h4>{item.nombre}</h4>
                <p>Usuario: {item.usuario}</p>
                <p>Devuelto: {item.fechaDevolucion}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Returns;
