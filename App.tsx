import { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import Demo from './demo';
import Navbar from './Component/Navbar';
import './Component/Navbar.css';
import About from './Component/About'; 
import Home from './Component/Home';
import Contact from './Component/Contact';
import Services from './Component/Services';


const App: Component = () => {
  return (
    <div>
      {/* Navbar component */}
      <Navbar />

      {/* Router for navigation */}
      <Router>
        {/* Define routes here */}
        <Route path="/" component={Demo} />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={Services} />
       
      </Router>
    </div>
  );
};

export default App;
