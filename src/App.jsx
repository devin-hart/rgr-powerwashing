import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import GraffitiRemoval from './pages/GraffitiRemoval';
import GlassRestoration from './pages/GlassRestoration';
import AntiGraffiti from './pages/AntiGraffiti';
import ExteriorCleaning from './pages/ExteriorCleaning';
import WindowFilmRemoval from './pages/WindowFilmRemoval';
import WindowCleaning from './pages/WindowCleaning';
import AboutPage from './pages/AboutPage';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Faq from './pages/Faq';
import ContactPage from './pages/ContactPage';
import './App.css';

function ScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main section'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => {
      sec.classList.add('reveal');
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        <ScrollReveal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graffiti-removal" element={<GraffitiRemoval />} />
          <Route path="/glass-restoration" element={<GlassRestoration />} />
          <Route path="/anti-graffiti" element={<AntiGraffiti />} />
          <Route path="/exterior-cleaning" element={<ExteriorCleaning />} />
          <Route path="/window-film-removal" element={<WindowFilmRemoval />} />
          <Route path="/window-cleaning" element={<WindowCleaning />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
