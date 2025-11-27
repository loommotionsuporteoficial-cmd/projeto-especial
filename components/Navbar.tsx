import React, { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-gold-500 text-white' : 'bg-white text-gold-600'}`}>
                <Car size={24} strokeWidth={2.5} />
              </div>
              <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                SIMAS <span className="text-gold-500">TURBO</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-100'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg ${
                isScrolled 
                  ? 'bg-gold-500 text-white hover:bg-gold-600' 
                  : 'bg-white text-gold-600 hover:bg-slate-100'
              }`}
            >
              Agendar Visita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-slate-600 hover:text-gold-600 hover:bg-gold-50 rounded-lg font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-4 px-3 py-3 bg-gold-500 text-white rounded-lg font-bold hover:bg-gold-600"
          >
            Agendar Visita
          </a>
        </div>
      </div>
    </nav>
  );
};