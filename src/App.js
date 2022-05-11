import "./scss/main.scss";
import Nav from "./components/Nav.js";
import { Router } from "@reach/router";
import Home from "./components/home";
import Work from "./components/work";

function App() {
  return (
    <div className="App">
      <Nav />

      <Router>
        <Home path="/" />
        <Work path="/work" />
      </Router>
    </div>
  );
}

export default App;
