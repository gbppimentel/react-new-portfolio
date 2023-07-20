import "./assets/css/App.css";
import Nav from "./Nav";
import HamburgerMenu from "./Burger";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <div className="burger">
          <HamburgerMenu />
        </div>
      </header>
    </div>
  );
}

export default App;
