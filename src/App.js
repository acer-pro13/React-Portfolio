import { Routes, Route } from "react-router-dom";
import Home from "./home.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
