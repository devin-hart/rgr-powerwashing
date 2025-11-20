import { useEffect, useState } from 'react';
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

const routes = {
  '/': Home,
  '/graffiti-removal': GraffitiRemoval,
  '/glass-restoration': GlassRestoration,
  '/anti-graffiti': AntiGraffiti,
  '/exterior-cleaning': ExteriorCleaning,
  '/window-film-removal': WindowFilmRemoval,
  '/window-cleaning': WindowCleaning,
  '/about': AboutPage,
  '/pricing': Pricing,
  '/blog': Blog,
  '/faq': Faq,
  '/contact': ContactPage,
};

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

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
  }, [path]);

  const navigate = (to) => {
    if (window.location.pathname !== to) {
      window.history.pushState({}, '', to);
      setPath(to);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Page = routes[path] || Home;

  return (
    <>
      <Header onNavigate={navigate} />
      <main>
        <Page />
      </main>
      <Footer />
    </>
  );
}

export default App;
