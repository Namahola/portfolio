import "./scss/main.scss";
import Nav from "./components/Nav.js";
import { Router } from "@reach/router";
import Home from "./components/home";
import About from "./components/about";
import Work from "./components/work";

function App() {
  return (
    <div className="App">
      <Nav />

      <Router>
        <Home path="/" />
        <About path="/about" />
        <Work path="/work" />
      </Router>
    </div>
  );
}

export default App;
