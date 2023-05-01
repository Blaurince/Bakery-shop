
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 
function App() {
  return (
    <div className="App">   
     <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/menu" exact element={<Menu/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
        </Routes>
        {<Footer /> }
      </Router>
    </div>
  );
}

export default App;

