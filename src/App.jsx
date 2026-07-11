import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import PlacementQuiz from './pages/PlacementQuiz';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme) return storedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
    document.documentElement.style.backgroundColor = theme === 'dark' ? '#000000' : '#ffffff';
    document.body.style.backgroundColor = theme === 'dark' ? '#000000' : '#ffffff';
    document.body.style.backgroundImage = theme === 'dark'
      ? 'radial-gradient(circle at top, rgba(30, 41, 59, 0.7) 0%, rgba(2, 6, 23, 0.98) 45%, #000000 100%)'
      : 'none';
    document.body.style.color = theme === 'dark' ? '#f3f4f6' : '#111827';
    const root = document.getElementById('root');
    if (root) {
      root.style.backgroundColor = theme === 'dark' ? '#000000' : '#ffffff';
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <div
        className="min-h-screen text-gray-900 transition-colors duration-300 dark:text-gray-100"
        style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}
      >
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main
          className="min-h-screen pt-20 transition-colors duration-300"
          style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/placement-quiz" element={<PlacementQuiz />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}
