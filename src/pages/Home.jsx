import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin, ShieldCheck, Zap, Wind, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#3E2723] flex flex-col items-center justify-center">
        <motion.h1 
          animate={{ opacity: [0.3, 1, 0.3] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-[#D4AF37] font-serif italic text-6xl"
        >
          Aarahi
        </motion.h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 bg-[#F5F5DC]">
        <div className="absolute inset-0 opacity-10">
          <img src="/Aarahi Image 3.jpg" className="w-full h-full object-cover" alt="Background" />
        </div>

        <div className="max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/90 px-4 py-1.5 rounded-full border border-[#D4AF37]/20 shadow-sm mb-8"
          >
            <MapPin size={12} className="text-red-500 animate-pulse" />
            <span className="uppercase tracking-widest text-[9px] font-sans font-black">Bengaluru Live Milling</span>
          </motion.div>

          <h1 className="text-7xl md:text-[10rem] font-bold mb-6 leading-[0.85] tracking-tighter uppercase">
            LIVING <br />
            <span className="italic text-[#D4AF37] font-light normal-case">Flour.</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 font-sans text-gray-600 max-w-2xl mx-auto font-light">
            Stop eating "dead" industrial starch. <br />
            Stone-milled at <span className="font-bold text-[#3E2723]">28°C</span> to keep nutrients alive.
          </p>

          <Link to="/shop">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3E2723] text-white px-16 py-6 rounded-full text-lg font-bold shadow-2xl uppercase tracking-widest"
            >
              Order Fresh
            </motion.button>
          </Link>
        </div>
      </section>

      {/* 2. THE TRUST SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Wind className="text-[#D4AF37]" size={32} />
            <h3 className="text-2xl font-bold italic">Cold-Milled</h3>
            <p className="text-gray-500 font-sans text-sm">Traditional stones keep the process under 30°C to preserve natural oils.</p>
          </div>
          <div className="space-y-4">
            <ShieldCheck className="text-[#D4AF37]" size={32} />
            <h3 className="text-2xl font-bold italic">Maternal Care</h3>
            <p className="text-gray-500 font-sans text-sm">Every batch is treated with the same honesty as a mother's home cooking.</p>
          </div>
          <div className="space-y-4">
            <Zap className="text-[#D4AF37]" size={32} />
            <h3 className="text-2xl font-bold italic">24-Hour Fresh</h3>
            <p className="text-gray-500 font-sans text-sm">We mill today and deliver tomorrow. Freshness has a time limit.</p>
          </div>
        </div>
      </section>

      {/* 3. THE SCIENCE */}
      <section className="py-24 bg-[#FCF9F2] px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="text-left">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter">Vitality <br/>Protected.</h2>
            <div className="bg-white p-8 rounded-[3rem] shadow-xl border-l-[12px] border-[#D4AF37]">
              <p className="text-2xl font-bold leading-tight">Stone Ground at 28°C.</p>
              <p className="mt-4 text-gray-500 font-sans">Unlike factory rollers that burn nutrients at 90°C, our process keeps the "soul" of the wheat alive.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/Aarahi Image 2.jpg" alt="Aarahi Package" className="w-full max-w-sm rounded-[4rem] shadow-2xl border-[15px] border-white rotate-2" />
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-[#3E2723] text-white py-32 text-center px-6">
        <h2 className="text-7xl md:text-[12rem] font-bold italic text-[#D4AF37] mb-8 opacity-10 uppercase">Aarahi</h2>
        <p className="text-[10px] uppercase tracking-[1em] opacity-30 font-sans">Traditional Quality • Bengaluru</p>
      </footer>

      {/* 5. FLOATING MOBILE NAV */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] z-[9999] md:hidden">
        <div className="bg-white/90 backdrop-blur-xl border border-white/40 rounded-[2.5rem] px-8 py-4 flex justify-between items-center shadow-2xl">
          <Link to="/" className="flex flex-col items-center text-[#3E2723]">
            <HomeIcon size={22} strokeWidth={2.5} />
            <span className="text-[9px] font-black mt-1 uppercase">Home</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center text-gray-400">
            <HelpCircle size={22} />
            <span className="text-[9px] font-black mt-1 uppercase text-nowrap">Why Me</span>
          </Link>
          <button className="flex flex-col items-center text-gray-400">
            <Search size={22} />
            <span className="text-[9px] font-black mt-1 uppercase">Search</span>
          </button>
          <Link to="/shop" className="relative bg-[#3E2723] text-[#D4AF37] px-5 py-3 rounded-2xl flex flex-col items-center shadow-2xl">
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative h-4 w-4 rounded-full bg-red-500 border-2 border-white"></span>
            </span>
            <span className="text-[7px] font-black italic uppercase leading-none font-serif">Aarahi</span>
            <span className="text-[11px] font-black uppercase tracking-tighter">Shop</span>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;