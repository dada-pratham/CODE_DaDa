import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Guides from './components/Guides';
import AboutUs from './components/AboutUs';
import Supporter from './components/Supporter.jsx';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Supporter />
      <Courses />
      <Guides />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
