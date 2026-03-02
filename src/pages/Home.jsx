import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic3.png';
import blacktheme from '../assets/images/blacktheme.png';
const categories = [
    { name: "Protein Bars", color: "bg-[#4A3728]" },
    { name: "Muesli", color: "bg-[#D4A373]" },
    { name: "Nut Butters", color: "bg-[#2C1810]" },
    { name: "Energy Bars", color: "bg-[#9D0208]" },
    { name: "Mini Protein Bars", color: "bg-[#3E2723]" },
    { name: "Dark Cocoa", color: "bg-[#1A1A1A]" },
];

const AnimatedHighlightText = ({ children, className = "" }) => (
    <motion.span
        className={`relative inline-block z-10 ${className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
    >
        {children}
        <motion.span
            className="absolute left-0 bottom-0 h-[2px] bg-red-600 rounded-none -z-10"
            variants={{
                hidden: { width: '0%' },
                visible: { width: '100%', transition: { duration: 0.6, ease: 'easeOut' } }
            }}
        />
    </motion.span>
);

const Home = () => {
    return (
        <div className="w-full">
            <style>
                {`
                @keyframes fadeSequence1 {
                    0%, 25% { opacity: 1; }
                    33%, 92% { opacity: 0; }
                    100% { opacity: 1; }
                }
                @keyframes fadeSequence2 {
                    0%, 25% { opacity: 0; }
                    33%, 58% { opacity: 1; }
                    66%, 100% { opacity: 0; }
                }
                @keyframes fadeSequence3 {
                    0%, 58% { opacity: 0; }
                    66%, 92% { opacity: 1; }
                    100% { opacity: 0; }
                }
                `}
            </style>
            {/* Hero Section */}

            <section className="relative min-h-[30vh] flex flex-col items-center justify-center bg-background overflow-hidden pt-10">
                <div style={{ backgroundColor: "#040000b4", position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }} className="msgbar w-full py-3 text-center text-white mb-8 mt-16 border-t border-b border-primary/20">
                    <span className="text-sm font-medium tracking-wide">We’re re-building the world’s trust in food.</span>
                </div>
            </section>
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10"
                >

                    <h1 className="text-5xl md:text-4xl font-display font-bold leading-tight mb-8">
                        We’re bringing back trust in everyday food →  <span className="text-primary">The taste you remember. The purity you deserve.</span>
                    </h1>
                    <div className='real-food-section mt-[21px] mb-[30px] font-ibm text-[18.5px] leading-[29.5px] font-medium'>
                        <AnimatedHighlightText className="customizeparagraph animated-text-line">
                            We bring back real, traditional food made the right way.
                        </AnimatedHighlightText>
                    </div>
                    {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/shop" className="bg-secondary text-white px-10 py-5 rounded-full font-bold hover:bg-primary transition-colors duration-300 flex items-center justify-center">
                            Shop All <ArrowRight size={20} className="ml-2" />
                        </Link>
                        <Link to="/story" className="border-2 border-secondary text-secondary px-10 py-5 rounded-full font-bold hover:bg-secondary hover:text-white transition-colors duration-300 flex items-center justify-center">
                            Read The Truth
                        </Link>
                    </div> */}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[600px] flex items-center justify-center relativeImage"
                >
                    {/* Visual Abstract representation of "Clean Food" */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#F5E6E6] rounded-full blur-3xl opacity-50 animate-pulse"></div>

                        {/* Jumping Image Sequence */}
                        <motion.div
                            className="relative z-10 w-80 h-80"
                            animate={{
                                y: [0, -40, 0, -40, 0],
                                rotate: [0, -5, 5, -5, 0],
                            }}
                            transition={{
                                duration: 3,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                        >
                            <img
                                src={pic1}
                                alt="Delicious Item 1"
                                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
                                style={{
                                    animation: "fadeSequence1 9s infinite 0s"
                                }}
                            />
                            <img
                                src={pic2}
                                alt="Delicious Item 2"
                                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
                                style={{
                                    animation: "fadeSequence2 9s infinite 3s"
                                }}
                            />
                            <img
                                src={blacktheme}
                                alt="Delicious Item 3"
                                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
                                style={{
                                    animation: "fadeSequence3 9s infinite 6s"
                                }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            {/* </section> */}

            {/* Categories Grid */}
            <section className="py-24 bg-white containergrid">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">We make food the way it was meant to be.</h2>
                            <AnimatedHighlightText className="customizeparagraph text-lg">
                                Food so pure, we stand by every grain we deliver.
                            </AnimatedHighlightText>
                            <AnimatedHighlightText className="customizeparagraph text-lg max-w-3xl">
                                Freshly milled atta made from carefully selected wheat —
                            </AnimatedHighlightText>
                            <AnimatedHighlightText className="customizeparagraph text-lg max-w-3xl">
                                crafted for softer rotis, better digestion, and real satisfaction
                            </AnimatedHighlightText>
                        </div>
                    </div>


                </div>
            </section>

            {/* Truth Section */}
            <section className="py-24 bg-secondary text-white relative overflow-hidden">
                <div className="container mx-auto px-6 ">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-16 items-center">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase mb-6 block">Our Philosophy</span>
                            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                                Real food is <br /><span className="text-primary">flawed.</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                It started with a simple realization  Food today lost its true taste.
                                So we went back to the roots. From selecting the right wheat to slow milling for better nutrition,we chose the harder path to bring you atta that feels like home.
                                Because good food isn’t just eaten,
                                it’s remembered.

                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-primary/20 p-3 rounded-full mr-6 text-primary">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">100% Clean Label</h4>
                                        <p className="text-gray-400">Ingredients you can read and find in your kitchen.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-primary/20 p-3 rounded-full mr-6 text-primary">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">No Hidden Sugars</h4>
                                        <p className="text-gray-400">We don't hide sugar under 50 different names.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px]"></div>
                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl">
                                <h3 className="text-3xl font-bold mb-6">The Truth Academy</h3>
                                <p className="text-gray-400 mb-8">
                                    We're also fixing food journalism. Get the latest science-backed truths about nutrition, fitness, and health.
                                </p>
                                <button className="w-full bg-white text-secondary font-bold py-4 rounded-xl hover:bg-primary hover:text-white transition-colors duration-300">
                                    Enter The Academy
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
