import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold italic text-[#3E2723] tracking-tighter">
          Aarahi<span className="text-[#D4AF37]">.</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 font-sans text-xs uppercase tracking-widest font-bold text-[#3E2723]">
          <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#D4AF37] transition-colors">Our Story</Link>
          <Link to="/shop" className={`px-6 py-2 rounded-full transition-all ${
            isScrolled ? 'bg-[#3E2723] text-white' : 'border-2 border-[#3E2723]'
          }`}>
            Book Slot
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;