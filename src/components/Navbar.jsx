import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/about' },
    { name: 'Shop', path: '/shop' },
  ];

  return (
    <nav className="fixed w-full z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold italic text-[#3E2723] tracking-tighter">
          Aarahi<span className="text-[#D4AF37]">Foods.</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-sans text-xs uppercase tracking-widest font-bold text-[#3E2723]">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="hover:text-[#D4AF37] transition-colors">
              {link.name}
            </Link>
          ))}
          <Link to="/shop" className="bg-[#3E2723] text-white px-6 py-2 rounded-full hover:bg-[#D4AF37] transition-all">
            Order Now
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-[#3E2723]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-[#3E2723] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#3E2723] ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#3E2723] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 font-sans text-sm uppercase tracking-widest font-bold">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="py-2 border-b border-gray-50">
                  {link.name}
                </Link>
              ))}
              <Link to="/shop" onClick={() => setIsOpen(false)} className="bg-[#3E2723] text-white py-4 rounded-xl text-center mt-2">
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;