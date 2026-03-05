import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- ANIMATION VARIANTS ---
const floating = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

const cardHover = {
  initial: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)", borderColor: "rgba(212, 175, 55, 0.1)" },
  hover: { 
    scale: 1.03, 
    borderColor: "#D4AF37",
    boxShadow: "0px 20px 40px rgba(212, 175, 55, 0.2)",
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
          Aarahi: Milling Freshness for Bangalore...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 bg-[#F5F5DC] overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} className="absolute inset-0 z-0">
          <img src="/Aarahi Image 3.jpg" alt="Fresh Flour" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl relative z-10 px-4">
          
          {/* Hero Badge - Updated Location Line [cite: 3, 4] */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#D4AF37]/20 shadow-sm">
              <MapPin size={12} className="text-red-500" />
              <span className="uppercase tracking-[0.2em] text-[9px] text-[#3E2723] font-sans font-black">
                Freshly Milled in Bengaluru Delivered Within 24 Hours [cite: 4]
              </span>
            </div>
          </div>

          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 block text-[#8B4513] font-sans font-bold">
            A Bangalore Food Startup • Delivered in 24 Hours
          </span>

          {/* Hero Headline - Kept Strong [cite: 5, 6] */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
            Stop Eating <br /><span className="italic text-[#D4AF37] font-light normal-case">"Dead"</span> Flour. [cite: 6]
          </h1>
          
          {/* Hero Description - Updated [cite: 7, 8, 9] */}
          <p className="text-xl md:text-2xl mb-12 font-sans text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Slow-milled Sharbati Wheat. Ground at 30°C to protect natural nutrition. [cite: 8, 9]
          </p>

          <Link to="/shop">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3E2723] text-white px-16 py-6 rounded-full text-lg font-bold border-2 border-[#3E2723] shadow-2xl uppercase tracking-widest"
            >
              Order Fresh Atta
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* 2. THE SCIENCE SECTION */}
      <section className="py-24 bg-[#FCF9F2] px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center text-left">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] font-serif tracking-tight">The Science of Freshness</h2>
            <div className="space-y-6">
              {/* Industrial Flour - Updated [cite: 10, 11] */}
              <motion.div variants={cardHover} initial="initial" whileHover="hover" className="p-6 border-l-4 border-red-200 bg-white/50 rounded-r-2xl">
                <h4 className="text-red-800 font-bold uppercase text-[10px] tracking-widest mb-1">Industrial Flour</h4>
                <p className="text-gray-500 text-sm italic">
                  Packaged atta is produced using high-speed roller mills that generate heat at 90°C, destroying nutrients. [cite: 11]
                </p>
              </motion.div>
              {/* Aarahi Fresh - Updated [cite: 12, 13] */}
              <motion.div variants={cardHover} initial="initial" whileHover="hover" className="p-8 border-l-8 border-[#D4AF37] bg-white shadow-2xl rounded-r-3xl">
                <h4 className="text-[#D4AF37] font-bold uppercase text-[10px] tracking-widest mb-1">Aarahi Fresh</h4>
                <p className="text-[#3E2723] font-bold text-xl">
                  Living Nutrition - Stone-milled in small batches at low temperatures to preserve fibre, nutrients, and natural oils. [cite: 13]
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div variants={floating} animate="animate" className="flex justify-center">
             <div className="relative p-4 bg-white rounded-[3rem] shadow-2xl rotate-2 max-w-sm border border-[#F3E5AB]">
                <img src="/Aarahi Image 2.jpg" alt="Aarahi Package" className="w-full rounded-[2.5rem]" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3. FOUNDER STORY */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[#D4AF37] font-sans font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Founder's Story</span>
          {/* Founder Story Headline - Updated [cite: 15, 17] */}
          <h2 className="text-4xl md:text-5xl font-bold italic mb-10 tracking-tight leading-tight">
            "I couldn't find flour I trusted for my family's health. I decided to start milling it myself." [cite: 17]
          </h2>
          {/* Founder Story Paragraph - Updated [cite: 18, 19] */}
          <p className="text-gray-600 font-sans text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            Aarahi Foods began with a simple belief that families deserve fresh, honest food. Every bag is milled with maternal care and uncompromising honesty. [cite: 19]
          </p>
          <div className="flex flex-col items-center">
            <div className="text-[#3E2723] font-bold text-2xl uppercase tracking-tighter font-serif">Aalekhya Reddy</div>
            <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-sans font-black mt-1">Founder • Aarahi Foods</div>
          </div>
        </div>
      </section>

      {/* 4. THE 24-HOUR TIMELINE */}
      <section className="py-24 bg-[#FCF9F2] px-6 text-center">
        {/* Timeline Title - Updated [cite: 20, 21] */}
        <h2 className="text-4xl md:text-7xl font-bold text-[#3E2723] mb-24 italic tracking-tighter uppercase font-serif">
          From Wheat to Your Kitchen in 24 Hours [cite: 21]
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Step 1 - Updated [cite: 22, 23] */}
          <motion.div variants={cardHover} initial="initial" whileHover="hover" className="bg-white p-12 rounded-[3rem] shadow-xl text-left border border-gray-100">
            <div className="text-4xl font-black text-[#D4AF37] italic mb-6 opacity-30">05 AM</div>
            <h4 className="font-sans font-black text-xs tracking-widest text-[#3E2723] uppercase mb-4">The Selection</h4>
            <p className="text-gray-500 font-sans leading-relaxed">
              We only use premium Sharbati wheat known for soft rotis. [cite: 23]
            </p>
          </motion.div>
          {/* Step 2 - Updated [cite: 24, 25] */}
          <motion.div variants={cardHover} initial="initial" whileHover="hover" className="bg-white p-12 rounded-[3rem] shadow-xl text-left border border-gray-100">
            <div className="text-4xl font-black text-[#D4AF37] italic mb-6 opacity-30">09 AM</div>
            <h4 className="font-sans font-black text-xs tracking-widest text-[#3E2723] uppercase mb-4">Cold-Milling</h4>
            <p className="text-gray-500 font-sans leading-relaxed">
              Stone-milled at a slow pace maintaining low temperature to preserve nutrition. [cite: 25]
            </p>
          </motion.div>
          {/* Step 3 - Updated [cite: 26, 27] */}
          <motion.div variants={cardHover} initial="initial" whileHover="hover" className="bg-white p-12 rounded-[3rem] shadow-xl text-left border border-gray-100">
            <div className="text-4xl font-black text-[#D4AF37] italic mb-6 opacity-30">04 PM</div>
            <h4 className="font-sans font-black text-xs tracking-widest text-[#3E2723] uppercase mb-4">Delivery Run</h4>
            <p className="text-gray-500 font-sans leading-relaxed">
              Freshly milled, packed and delivered across Bengaluru the same day. [cite: 27]
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#3E2723] text-white py-32 text-center px-6">
        <h2 className="text-7xl md:text-9xl font-bold italic text-[#D4AF37] mb-8 select-none uppercase opacity-10">Aarahi</h2>
        {/* Footer Text - Updated [cite: 28, 29] */}
        <p className="text-[10px] uppercase tracking-[1em] opacity-30 font-sans">
          Freshly Milled Atta for Bengaluru Families [cite: 29]
        </p>
      </footer>

      {/* 6. BOTTOM NAVIGATION BAR [cite: 30, 31] */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-100 px-6 py-4 z-[9999] flex justify-between items-center shadow-lg md:hidden">
        <Link to="/" className="flex flex-col items-center text-[#3E2723] transition-transform active:scale-90">
          <HomeIcon size={24} strokeWidth={2.5} />
          <span className="text-[9px] font-black mt-1 uppercase tracking-tighter">Home</span>
        </Link>
        {/* Bottom Nav Text - Updated [cite: 31] */}
        <Link to="/about" className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-transform active:scale-90">
          <HelpCircle size={24} />
          <span className="text-[9px] font-black mt-1 uppercase tracking-tighter text-nowrap">Why Aarahi [cite: 31]</span>
        </Link>
        <button className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-transform active:scale-90">
          <Search size={24} />
          <span className="text-[9px] font-black mt-1 uppercase tracking-tighter text-nowrap">Search</span>
        </button>
        <Link to="/shop" className="relative bg-[#3E2723] text-[#D4AF37] px-6 py-3 rounded-2xl flex flex-col items-center shadow-2xl active:scale-90 transition-all">
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
          </span>
          <span className="text-[7px] font-black italic font-serif leading-none uppercase tracking-tighter">Aarahi</span>
          <span className="text-[11px] font-black uppercase tracking-tighter">Shop</span>
        </Link>
      </div>

    </div>
  );
};

export default Home;