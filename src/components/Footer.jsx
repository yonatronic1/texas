import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState({
    quick: false,
    contact: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-slate-900 text-gray-200 dark:bg-black dark:text-zinc-300 py-8 sm:py-12 mt-12 transition-colors duration-300">
      <div className="container-custom px-4">
        {/* Brand Section - Always Visible */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-sm">T</div>
            <span className="font-semibold text-sm sm:text-base text-white">Texas</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-300">Empowering students through world-class language education in Addis Ababa.</p>
        </div>

        {/* Desktop Grid - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h4 className="font-semibold mb-3 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/placement-quiz" className="text-gray-300 hover:text-white">Placement Quiz</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm sm:text-base">Contact</h4>
            <p className="text-xs sm:text-sm text-gray-300">Bole Road, Dembel City Center, Addis Ababa</p>
            <p className="text-xs sm:text-sm mt-2 text-gray-300">Phone: <a href="tel:+251115549273" className="hover:text-white">+251 11 554 92 73</a></p>
            <p className="text-xs sm:text-sm mt-2 text-gray-300">Phone: <a href="tel:+251 927 70 70 35" className="hover:text-white">+251 11 554 92 73</a></p>
          </div>
        </div>

        {/* Mobile Accordion - Visible Only on Small Screens */}
        <div className="md:hidden space-y-3 mb-6 sm:mb-8">
          {/* Quick Links Section */}
          <div className="border border-gray-700 rounded">
            <button
              onClick={() => toggleSection('quick')}
              className="w-full px-3 py-3 flex items-center justify-between hover:bg-gray-700 transition text-sm sm:text-base"
            >
              <span className="font-semibold">Quick Links</span>
              <span className="text-lg">{expandedSections.quick ? '−' : '+'}</span>
            </button>
            {expandedSections.quick && (
              <ul className="border-t border-gray-700 px-3 py-3 space-y-2 text-xs sm:text-sm bg-gray-900 dark:bg-zinc-950">
                <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link to="/placement-quiz" className="text-gray-300 hover:text-white">Placement Quiz</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            )}
          </div>

          {/* Contact Section */}
          <div className="border border-gray-700 rounded">
            <button
              onClick={() => toggleSection('contact')}
              className="w-full px-3 py-3 flex items-center justify-between hover:bg-gray-700 transition text-sm sm:text-base"
            >
              <span className="font-semibold">Contact</span>
              <span className="text-lg">{expandedSections.contact ? '−' : '+'}</span>
            </button>
            {expandedSections.contact && (
              <div className="border-t border-gray-700 px-3 py-3 space-y-2 text-xs sm:text-sm bg-gray-900 dark:bg-zinc-950">
                <p className="text-gray-300">Bole Road, Dembel City Center, Addis Ababa</p>
                <p className="text-gray-300">Phone: <a href="tel:+251115549273" className="hover:text-white">+251 11 554 92 73</a></p>                
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 sm:pt-6 text-xs sm:text-sm text-gray-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} Texas International Study Center. All rights reserved.</div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
