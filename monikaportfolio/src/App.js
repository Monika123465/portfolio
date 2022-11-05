import logo from './logo.svg';
import './App.css';
import Navbar from "./Pages/Navbar"
import Courosel from "./Pages/Courosel";
import Profile from "./Pages/Profile";
import Skills from "./Pages/Skills";
import ContactMe from "./Pages/ContactMe";
import Footer from "./Pages/Footer";
import Github from "./Pages/Github";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile />
    
      <Skills />
      <Courosel />
      <Github />
  
      <ContactMe />
      <Footer />
  
    
      
    </div>
  );
}

export default App;
