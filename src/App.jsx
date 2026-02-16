import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/layout.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<h1>LabStock</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
