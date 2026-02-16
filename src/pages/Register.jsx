import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/auth.css";

function Register() {
  const navigate = useNavigate();
  const { registrarUsuario } = useContext(AppContext);

  const [nombre, setNombre] = useState("");
  const [carnet, setCarnet] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");

  const registrar = () => {
    if (!nombre || !carnet || !telefono || !password) {
      alert("Complete todos los campos");
      return;
    }

    registrarUsuario({ nombre, carnet, telefono, password });
    alert("Usuario registrado correctamente");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
          alt="register"
          className="auth-image"
        />

        <h2 className="auth-title">Crear Cuenta</h2>
        <p className="auth-subtitle">Regístrate para usar LabStock</p>

        <div className="input-group">
          <span>👤</span>
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="input-group">
          <span>🎓</span>
          <input
            type="text"
            placeholder="Carnet"
            value={carnet}
            onChange={(e) => setCarnet(e.target.value)}
          />
        </div>

        <div className="input-group">
          <span>📞</span>
          <input
            type="text"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="input-group">
          <span>🔒</span>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="auth-button" onClick={registrar}>
          Registrarse
        </button>

        <p className="auth-link" onClick={() => navigate("/login")}>
          ¿Ya tienes cuenta? Iniciar Sesión
        </p>

        <div className="social-section">
          <p>O regístrate con</p>
          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>🟢</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
