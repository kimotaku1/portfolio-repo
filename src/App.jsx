import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './index.css';  // Assuming this file contains Tailwind directives
import Resume from './pages/Resume';
import ScrollToTop from './Components/ScrollToTop ';

const App = () => {
  return (
    <Router basename="/portfolio-repo" >
      <Routes>
        {/* Route for the main homepage */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Services />
              <MyWork />
              <Contact />
              <Footer />
              <ScrollToTop/>
            </>
          }
        />

        {/* Route for the Resume page */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default App;
