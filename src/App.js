import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1>Dictionary App 📚</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/estefany-rm/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code{" "}
            </a>
            by Estefany Ramirez
          </small>
        </footer>
      </div>
    </div>
  );
}
