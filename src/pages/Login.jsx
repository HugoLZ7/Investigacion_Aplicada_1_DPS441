import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/auth.css";

function Login() {
  const navigate = useNavigate();
  const { loginUsuario } = useContext(AppContext);

  const [carnet, setCarnet] = useState("");
  const [password, setPassword] = useState("");

  const ingresar = () => {
    if (!carnet || !password) {
      alert("Ingrese carnet y contraseña");
      return;
    }

    const ok = loginUsuario(carnet, password);

    if (ok) {
      navigate("/");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="user"
          className="auth-image"
        />

        <h2 className="auth-title">Bienvenido a LabStock</h2>
        <p className="auth-subtitle">Inicia sesión para continuar</p>

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
          <span>🔒</span>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="auth-button" onClick={ingresar}>
          Ingresar
        </button>

        <p className="auth-link" onClick={() => navigate("/register")}>
          ¿No tienes cuenta? Registrarse
        </p>

        <div className="social-section">
          <p>O continuar con</p>
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

export default Login;
