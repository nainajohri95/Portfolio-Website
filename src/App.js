import "./App.css";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skill";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
    </div>
  );
}

export default App;
