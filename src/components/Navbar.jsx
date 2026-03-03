import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/Pic1.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                
                {/* LOGO & BRAND NAME */}
                <Link to="/" className="flex items-center space-x-3">
                    <img
                        src={logo}
                        alt="Aarahi Foods Logo"
                        className="rounded-full shadow-sm"
                        width={50}
                        height={50}
                    />
                    <span className={`text-2xl font-bold tracking-tighter ${scrolled ? 'text-[#3E2723]' : 'text-[#3E2723]'}`}>
                        Aarahi Foods
                    </span>
                </Link>

                {/* DESKTOP MENU (UNCOMMENTED & UPDATED) */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-[#3E2723] hover:text-[#D4AF37] transition-colors font-medium">Home</Link>
                    <Link to="/about" className="text-[#3E2723] hover:text-[#D4AF37] transition-colors font-medium">Our Story</Link>
                    <Link to="/shop" className="text-[#3E2723] hover:text-[#D4AF37] transition-colors font-medium">Shop Atta</Link>
                </div>

                {/* ICONS */}
                <div className="hidden md:flex items-center space-x-6">
                    <button className="text-[#3E2723] hover:text-[#D4AF37] transition-colors">
                        <User size={22} />
                    </button>
                    <button className="text-[#3E2723] hover:text-[#D4AF37] transition-colors relative">
                        <ShoppingBag size={22} />
                        <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">0</span>
                    </button>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#3E2723]">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-6 space-y-5">
                            <Link to="/" className="text-lg font-medium text-[#3E2723]" onClick={() => setIsOpen(false)}>Home</Link>
                            <Link to="/about" className="text-lg font-medium text-[#3E2723]" onClick={() => setIsOpen(false)}>Our Story</Link>
                            <Link to="/shop" className="text-lg font-medium text-[#3E2723]" onClick={() => setIsOpen(false)}>Shop Atta</Link>
                            <hr />
                            <Link to="/account" className="text-lg font-medium text-[#3E2723]" onClick={() => setIsOpen(false)}>My Account</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;