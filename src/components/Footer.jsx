import React from 'react';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-display font-bold mb-6">THE WHOLE TRUTH</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            We're re-building the world's trust in food. No BS. Just honest ingredients.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg">Shop</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-primary transition-colors">Protein Bars</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Muesli</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Nut Butters</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Energy Bars</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Transparency</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-1 md:col-span-1">
                        <h4 className="font-bold mb-6 text-lg">Truth-seekers, unite!</h4>
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                            One, BS free, in-depth article about food & fitness. Delivered every Saturday. Free (for now).
                        </p>
                        <div className="flex border-b border-gray-600 pb-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-transparent w-full text-white placeholder-gray-500 focus:outline-none"
                            />
                            <button className="text-primary hover:text-white transition-colors">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="text-gray-500 mb-4 md:mb-0">
                        © {new Date().getFullYear()} Fitshit Health Solutions. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors"><Facebook size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
