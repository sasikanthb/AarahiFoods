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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <img
                    src={logo}
                    alt="Healthy Food"
                    className="text-2xl font-display text-secondary tracking-tight"
                    width={60}
                    height={100}
                />
                {/* <Link to="/" className="text-2xl font-display text-secondary tracking-tight">
                    Aarahi Foods
                </Link> */}

                {/* Desktop Menu */}
                {/* <div className="hidden md:flex items-center space-x-8">
                    <Link to="/shop" className="text-secondary hover:text-primary transition-colors font-medium">Shop</Link>
                    <Link to="/byob" className="text-secondary hover:text-primary transition-colors font-medium">B.Y.O.B.</Link>
                    <Link to="/new-launches" className="text-secondary hover:text-primary transition-colors font-medium">New Launches</Link>
                    <Link to="/story" className="text-secondary hover:text-primary transition-colors font-medium">Our Story</Link>
                    <Link to="/learn" className="text-secondary hover:text-primary transition-colors font-medium">Learn</Link>
                </div> */}

                {/* <div className="hidden md:flex items-center space-x-6">
                    <button className="text-secondary hover:text-primary transition-colors">
                        <User size={24} />
                    </button>
                    <button className="text-secondary hover:text-primary transition-colors relative">
                        <ShoppingBag size={24} />
                        <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
                    </button>
                </div> */}

                {/* Mobile menu button */}
                {/* <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-secondary">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button> */}
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            <Link to="/shop" className="text-lg font-medium text-secondary" onClick={() => setIsOpen(false)}>Shop</Link>
                            <Link to="/byob" className="text-lg font-medium text-secondary" onClick={() => setIsOpen(false)}>B.Y.O.B.</Link>
                            <Link to="/new-launches" className="text-lg font-medium text-secondary" onClick={() => setIsOpen(false)}>New Launches</Link>
                            <Link to="/story" className="text-lg font-medium text-secondary" onClick={() => setIsOpen(false)}>Our Story</Link>
                            <Link to="/learn" className="text-lg font-medium text-secondary" onClick={() => setIsOpen(false)}>Learn</Link>
                            <Link to="/account" className="text-lg font-medium text-secondary" onClick={() => setIsOpen(false)}>Account</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
