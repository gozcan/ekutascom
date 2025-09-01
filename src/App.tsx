import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects'; // ← eklendi
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <MainLayout>
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
        />{' '}
        {/* ← eklendi */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </MainLayout>
  );
}
