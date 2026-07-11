import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Placement Quiz', path: '/placement-quiz' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 dark:bg-black/90 shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="container-custom flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold">T</div>
          <span className="hidden sm:inline font-semibold text-gray-900 dark:text-white">Texas</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((n) => (
            <Link key={n.name} to={n.path} className="text-sm text-gray-700 hover:text-blue-600 transition dark:text-gray-200 dark:hover:text-blue-400">
              {n.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-gray-300 bg-white/80 px-3 py-2 text-sm shadow-sm transition hover:bg-gray-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="hidden sm:inline-block px-3 py-2 bg-green-500 text-white rounded-md">WhatsApp</a>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md bg-gray-100 text-gray-900 dark:bg-zinc-900 dark:text-white">{isOpen ? '✕' : '☰'}</button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-zinc-800">
          <div className="container-custom py-4">
            {navItems.map((n) => (
              <Link key={n.name} to={n.path} onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 dark:text-gray-200">{n.name}</Link>
            ))}
            <button onClick={toggleTheme} className="mt-2 flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
              {theme === 'dark' ? '☀️ Light mode' : '🌙 Dark mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
