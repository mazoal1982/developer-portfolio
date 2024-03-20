import './App.css';
import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
