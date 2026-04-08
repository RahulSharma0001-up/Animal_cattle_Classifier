import { Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home.jsx';
import Classify from './pages/Classify.jsx';
import Gallery from './pages/Gallery.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Classify', path: '/classify' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand-logo">
          <div className="brand-mark">AC</div>
          <div>
            <span>Animal</span>
            <strong>Classifier</strong>
          </div>
        </div>
        <nav className="app-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="page-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classify" element={<Classify />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </main>

      <footer className="app-footer">
        <p>© 2026 Animal Classifier — Cattle & Buffalo Type Recognition</p>
      </footer>
    </div>
  );
}

export default App;
