import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail'; // ← yeni eklendi
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // anında tepeye al; istersen behavior: 'smooth' yapabilirsin
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}
export default function App() {
  return (
    <MainLayout>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/services"
          element={<Services />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/projects"
          element={<Projects />}
        />
        <Route
          path="/projects/:slug"
          element={<ProjectDetail />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </MainLayout>
  );
}
