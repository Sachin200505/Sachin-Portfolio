import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import TechJourney from './components/TechJourney';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import FloatingChatbot from './components/FloatingChatbot';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
<div className="min-h-screen overflow-x-hidden">
          <ScrollProgress />
          <Navbar />
          <main>
            <Home />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Certifications />
            <Resume />
            <TechJourney />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <FloatingChatbot />
        </div>
      </Router>
    </ThemeProvider>
  );
}



export default App;