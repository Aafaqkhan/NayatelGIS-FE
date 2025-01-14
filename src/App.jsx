import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./Pages/DashBoard/DashBoard";
import LoginPage from "./Pages/LoginScreen/LoginPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import MapboxExample from "./Components/MapBox3D_build";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          {/* <Route path="/dashboard" element={<MapboxExample />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
