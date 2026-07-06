import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState({
    quick: false,
    programs: false,
    contact: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-gray-800 text-gray-200 py-8 sm:py-12 mt-12">
      <div className="container-custom px-4">
        {/* Brand Section - Always Visible */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-sm">T</div>
            <span className="font-semibold text-sm sm:text-base">Texas</span>
          </div>
          <p className="text-xs sm:text-sm">Empowering students through world-class language education in Addis Ababa.</p>
        </div>

        {/* Desktop Grid - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h4 className="font-semibold mb-3 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
              <li><Link to="/programs" className="hover:text-white">Programs</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm sm:text-base">Programs</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>IELTS & TOEFL</li>
              <li>Business English</li>
              <li>Kids Summer Program</li>
              <li>International Languages</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm sm:text-base">Contact</h4>
            <p className="text-xs sm:text-sm">Bole Road, Dembel City Center, Addis Ababa</p>
            <p className="text-xs sm:text-sm mt-2">Phone: <a href="tel:+251115549273" className="hover:text-white">+251 11 554 92 73</a></p>
            <p className="text-xs sm:text-sm">Email: <a href="mailto:info@texas.edu.et" className="hover:text-white">info@texas.edu.et</a></p>
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
              <ul className="border-t border-gray-700 px-3 py-3 space-y-2 text-xs sm:text-sm bg-gray-900">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
                <li><Link to="/programs" className="hover:text-white">Programs</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            )}
          </div>

          {/* Programs Section */}
          <div className="border border-gray-700 rounded">
            <button
              onClick={() => toggleSection('programs')}
              className="w-full px-3 py-3 flex items-center justify-between hover:bg-gray-700 transition text-sm sm:text-base"
            >
              <span className="font-semibold">Programs</span>
              <span className="text-lg">{expandedSections.programs ? '−' : '+'}</span>
            </button>
            {expandedSections.programs && (
              <ul className="border-t border-gray-700 px-3 py-3 space-y-2 text-xs sm:text-sm bg-gray-900">
                <li>IELTS & TOEFL</li>
                <li>Business English</li>
                <li>Kids Summer Program</li>
                <li>International Languages</li>
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
              <div className="border-t border-gray-700 px-3 py-3 space-y-2 text-xs sm:text-sm bg-gray-900">
                <p>Bole Road, Dembel City Center, Addis Ababa</p>
                <p>Phone: <a href="tel:+251115549273" className="hover:text-white">+251 11 554 92 73</a></p>
                <p>Email: <a href="mailto:info@texas.edu.et" className="hover:text-white">info@texas.edu.et</a></p>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 sm:pt-6 text-xs sm:text-sm text-gray-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} Texas International Study Center. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
