import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- ANIMATION VARIANTS ---
const textSettle = {
  initial: { y: 20, opacity: 0, filter: "blur(5px)" },
  animate: { 
    y: 0, 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: "easeOut" } 
  }
};

const pulseAction = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
};

const cardHover = {
  initial: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: { 
    scale: 1.03, 
    boxShadow: "0px 20px 40px rgba(212, 175, 55, 0.15)",
    transition: { duration: 0.3 }
  }
};

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#FFFDF5] flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-[#D4AF37] font-serif italic text-2xl"
        >
          Milling Freshness for Bangalore...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 bg-[#F5F5DC] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 3 }}
          className="absolute inset-0 z-0 opacity-15"
        >
          <img src="/Aarahi Image 3.jpg" alt="Fresh Flour" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div variants={textSettle} initial="initial" animate="animate" className="max-w-4xl relative z-10">
          
          {/* LIVE STATUS BADGE */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full border border-[#D4AF37]/20 shadow-xl">
              <MapPin size={12} className="text-red-500" />
              <span className="uppercase tracking-[0.2em] text-[10px] text-[#3E2723] font-sans font-black">Bengaluru</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[9px] font-sans font-bold text-green-700">LIVE MILLING</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-tight tracking-tighter uppercase">
            Stop Eating <br /><span className="italic text-[#D4AF37] font-light normal-case">"Dead"</span> Flour.
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-sans text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Slow-milled Sharbati Wheat. Ground at 30°C to preserve life. <br />
            Traditional stone-milling meets uncompromising freshness.
          </p>
          <Link to="/shop">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3E2723] text-white px-14 py-6 rounded-full text-lg font-bold border-2 border-[#3E2723] shadow-2xl font-sans uppercase tracking-widest"
            >
              Claim Founder's Kit
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* 2. THE SCIENCE */}
      <section className="py-24 bg-[#FCF9F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6 font-serif tracking-tight leading-none">The Science <br/>of Freshness.</h2>
              <div className="space-y-8 font-sans">
                <motion.div variants={cardHover} initial="initial" whileHover="hover" className="border-l-4 border-red-200 pl-8 p-6 bg-white/30 rounded-r-2xl transition-all cursor-default">
                  <h4 className="text-red-800 font-bold uppercase text-[10px] tracking-[0.3em] mb-2">Industrial Flour</h4>
                  <p className="text-gray-500 text-sm italic">"Dead Calories" — High-speed rollers at 90°C destroy nutrients.</p>
                </motion.div>
                <motion.div variants={cardHover} initial="initial" whileHover="hover" className="border-l-8 border-[#D4AF37] pl-8 bg-white py-10 rounded-r-[3rem] shadow-2xl transition-all cursor-default">
                  <h4 className="text-[#D4AF37] font-bold uppercase text-[10px] tracking-[0.3em] mb-2 font-black">Aarahi Fresh</h4>
                  <p className="text-[#3E2723] font-bold text-xl">"Living Nutrition" — Cold-milled at 28°C. Delivered in 24 hours.</p>
                </motion.div>
              </div>
            </div>
            <motion.div animate={{ rotate: [0, 2, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="flex justify-center">
              <div className="relative p-6 bg-white rounded-[4rem] shadow-2xl max-w-sm border-8 border-white">
                <img src="/Aarahi Image 2.jpg" alt="Aarahi Atta Bag" className="w-full rounded-[3rem]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER MANIFESTO */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#F5F5DC] rounded-[4rem] p-12 md:p-24 relative flex flex-col md:flex-row items-center gap-16 shadow-sm border border-[#D4AF37]/10">
            <div className="md:w-3/5 text-left">
              <h2 className="text-4xl md:text-6xl font-bold text-[#3E2723] mb-10 leading-tight italic tracking-tighter">
                "I realized that the flour we were feeding our children had lost its soul."
              </h2>
              <p className="text-gray-700 font-sans italic mb-12 text-xl leading-relaxed">
                "Every bag we mill is treated with the same care as the food I put on my own dining table."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
                <div>
                  <div className="text-[#3E2723] font-black text-2xl uppercase tracking-tighter">Aalekhya Reddy</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-sans font-bold">Founder, Aarahi Foods</div>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
               <div className="w-80 h-80 rounded-full bg-white border-[12px] border-white shadow-2xl overflow-hidden grayscale">
                 <div className="bg-gray-100 h-full w-full flex items-center justify-center text-gray-300 italic">Portrait</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-[#3E2723] text-white py-32 px-6 text-center">
        <h2 className="text-6xl md:text-9xl font-black italic text-[#D4AF37] tracking-tighter uppercase mb-4">Aarahi</h2>
        <div className="pt-12 border-t border-white/5 text-[10px] text-white/30 uppercase tracking-[0.5em] font-sans">
          © 2026 Aarahi Foods • Bangalore
        </div>
      </footer>

      {/* 5. APP-STYLE BOTTOM NAVIGATION (CLEAN & EYE-CATCHY) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 px-8 py-5 z-[9999] flex justify-between items-center shadow-[0_-20px_50px_rgba(0,0,0,0.1)] md:hidden">
        
        {/* HOME */}
        <Link to="/" className="flex flex-col items-center text-[#3E2723] active:scale-90 transition-all">
          <HomeIcon size={24} strokeWidth={2.5} />
          <span className="text-[10px] font-black mt-1 uppercase tracking-tighter">Home</span>
        </Link>
        
        {/* WHY ME */}
        <Link to="/about" className="flex flex-col items-center text-gray-400 active:scale-90 transition-all">
          <HelpCircle size={24} strokeWidth={2.5} />
          <span className="text-[10px] font-black mt-1 uppercase tracking-tighter">Why Me</span>
        </Link>
        
        {/* AARAHI SHOP (BREATHING MIDDLE BUTTON) */}
        <motion.div variants={pulseAction} animate="animate">
          <Link to="/shop" className="relative bg-[#3E2723] text-[#D4AF37] px-6 py-4 rounded-3xl flex flex-col items-center shadow-2xl -mt-12 active:scale-95 transition-transform border-4 border-white">
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
            <span className="text-[11px] font-black uppercase tracking-tighter">Aarahi Shop</span>
            <span className="text-[7px] font-black italic opacity-60">Milling Live</span>
          </Link>
        </motion.div>

        {/* SEARCH */}
        <Link to="/shop" className="flex flex-col items-center text-gray-400 active:scale-90 transition-all">
          <Search size={24} strokeWidth={2.5} />
          <span className="text-[10px] font-black mt-1 uppercase tracking-tighter">Search</span>
        </Link>
        
      </div>

    </div>
  );
};

export default Home;