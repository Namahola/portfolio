import "./scss/main.scss";
import Nav from "./components/Nav.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Work from "./components/work";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
