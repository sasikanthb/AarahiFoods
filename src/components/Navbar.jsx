import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/about' },
    { name: 'Shop', path: '/shop' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 px-6 py-4 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* BRAND LOGO */}
        <Link 
          to="/" 
          className="text-2xl font-bold italic text-[#3E2723] tracking-tighter"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Aarahi<span className="text-[#D4AF37]">.</span>
        </Link>

        {/* DESKTOP LINKS (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-10 font-sans text-xs uppercase tracking-widest font-bold text-[#3E2723]">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="hover:text-[#D4AF37] transition-colors">
              {link.name}
            </Link>
          ))}
          <Link to="/shop" className="bg-[#3E2723] text-white px-6 py-2 rounded-full hover:bg-[#D4AF37] transition-all">
            Book Slot
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON (Hidden on Desktop) */}
        <button 
          className="md:hidden text-[#3E2723] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-[#3E2723] transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#3E2723] ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#3E2723] transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white absolute top-full left-0 w-full border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-6 font-sans text-sm uppercase tracking-widest font-bold text-[#3E2723]">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#D4AF37]"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/shop" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#3E2723] text-white py-4 rounded-xl text-center shadow-lg shadow-[#3E2723]/20"
              >
                Book Milling Slot
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;