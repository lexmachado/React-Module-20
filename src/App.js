import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route  
                path="/home" 
                element={<Home />} 
              />
              /* Create a route to display a single thought's comments based on its `thoughtId` provided in the URL */
              <Route 
                path="/aboutme" 
                element={<AboutMe />} 
              />

              <Route  
                path="/portfolio" 
                element={<Portfolio />} 
              />
              <Route  
                path="/contact" 
                element={<Contact />} 
              />
              <Route  
                path="/resume" 
                element={<Resume />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
