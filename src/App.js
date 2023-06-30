
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import About from './Components/about/About';
import Services from './Components/Services/Services';
import Qualifications from './Components/Qualifications/Qualifications';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualifications/>
      <Contact/>
      <Footer/>
    </div>
    
  );
}

export default App;
