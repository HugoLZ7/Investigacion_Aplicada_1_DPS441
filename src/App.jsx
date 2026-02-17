import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import History from "./pages/History";
import Returns from "./pages/Returns";
import "./styles/layout.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/returns" element={<Returns />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
