import "./scss/main.scss";
import Nav from "./components/Nav.js";
import { Router } from "@reach/router";
import Home from "./components/home";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <Nav />

      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </div>
  );
}

export default App;
