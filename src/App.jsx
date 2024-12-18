import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./Pages/DashBoard/DashBoard";
import LoginPage from "./Pages/LoginScreen/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
