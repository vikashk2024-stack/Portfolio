import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SpotlightGrid from './components/SpotlightGrid';
import AiAssistantModal from './components/AiAssistantModal';

// Lazy-load below-fold sections
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Leadership = lazy(() => import('./components/Leadership'));
const Contact = lazy(() => import('./components/Contact'));

const SECTIONS = ['hero', 'about', 'skills', 'experience', 'projects', 'certifications', 'leadership', 'contact'];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Theme toggle
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Scroll progress + active section detection
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const el = document.getElementById(SECTIONS[i]);
      if (el && el.offsetTop - 140 <= scrollTop) {
        setActiveSection(SECTIONS[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const fallback = (
    <div className="flex items-center justify-center py-20">
      <div className="h-7 w-7 rounded-full border-2 border-sky-400 border-t-transparent animate-spin" />
    </div>
  );

  return (
    <div className="relative min-h-screen">
      {/* Dynamic Ambient Background & Mouse Spotlight */}
      <SpotlightGrid />

      {/* Top Scroll Indicator */}
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={fallback}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Leadership />
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Floating AI Agent Terminal Dock */}
      <AiAssistantModal />
    </div>
  );
}

export default App;

