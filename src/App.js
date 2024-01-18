//import logo from '../assets/img/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Importing React and the components
import React from "react";

import { NavBar } from "./components/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import Portfolio from "./components/Portfolio";
import { Home } from "./components/Home";
import Footer from "./components/Footer";

// App component
function App() {
  return (
    <Router>
    <div className="App">
            
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
          
      </div>
    </Router>
  );
}

export default App;
