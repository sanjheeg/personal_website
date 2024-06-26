import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./Components/NavBar";
import { Banner } from "./Components/Banner";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Certifications } from "./Components/Certifications.js"
import { Baking } from "./Components/Baking.js"
import { Experience } from './Components/Experience.js';

function App() {
  return (  
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Baking />
    </div>
  );
}

export default App;