import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
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
    { name: 'Courses', path: '/courses' },
    { name: 'Programs', path: '/programs' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 dark:bg-gray-900/70 shadow' : 'bg-transparent'}`}>
      <div className="container-custom flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold">T</div>
          <span className="hidden sm:inline font-semibold">Texas</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((n) => (
            <Link key={n.name} to={n.path} className="text-sm hover:text-blue-600 transition">
              {n.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="hidden sm:inline-block px-3 py-2 bg-green-500 text-white rounded-md">WhatsApp</a>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md bg-gray-100 dark:bg-gray-800">{isOpen ? '✕' : '☰'}</button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t">
          <div className="container-custom py-4">
            {navItems.map((n) => (
              <Link key={n.name} to={n.path} onClick={() => setIsOpen(false)} className="block py-2">{n.name}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
