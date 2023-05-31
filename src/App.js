
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import About from './Components/about/About';
import Services from './Components/Services/Services';
import Qualifications from './Qualifications/Qualifications';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualifications/>
    </div>
    
  );
}

export default App;
