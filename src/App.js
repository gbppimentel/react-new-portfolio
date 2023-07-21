import "./assets/css/App.css";
import Landing from "./Landing";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Landing />
      </header>
    </div>
  );
}

export default App;
