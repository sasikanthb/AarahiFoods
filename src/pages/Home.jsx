import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 bg-[#F5F5DC] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img src="/Aarahi Image 3.jpg" alt="Fresh Flour" className="w-full h-full object-cover" />
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl relative z-10">
          <div className="flex justify-center mb-6 text-red-600">
             <MapPin size={24} className="animate-bounce" />
          </div>
          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 block text-[#8B4513] font-sans font-bold">
            A Bangalore Food Startup • Delivered in 24 Hours
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Stop Eating <br /><span className="italic text-[#D4AF37] font-light">"Dead"</span> Flour.
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-sans text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Slow-milled Sharbati Wheat. Ground at 30°C to preserve life. <br />
            Maternal care meets traditional stone-milling.
          </p>
          <Link to="/shop">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3E2723] text-white px-12 py-5 rounded-full text-lg font-bold border-2 border-[#3E2723] transition-all shadow-xl font-sans"
            >
              Aarahi Shop
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* 2. THE SCIENCE */}
      <section className="py-24 bg-[#FCF9F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center text-left">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6 font-serif tracking-tight text-nowrap">The Science of Freshness</h2>
              <div className="space-y-8 font-sans">
                <div className="border-l-4 border-red-200 pl-8 p-6">
                  <h4 className="text-red-800 font-bold uppercase text-[10px] tracking-[0.2em] mb-2">Industrial Flour</h4>
                  <p className="text-gray-500 text-sm italic">"Dead Calories" — High-speed rollers at 90°C destroy nutrients.</p>
                </div>
                <div className="border-l-4 border-[#D4AF37] pl-8 bg-white py-8 rounded-r-2xl shadow-xl">
                  <h4 className="text-[#D4AF37] font-bold uppercase text-[10px] tracking-[0.2em] mb-2 text-nowrap">Aarahi Fresh</h4>
                  <p className="text-[#3E2723] font-bold">"Living Nutrition" — Cold-milled at 28°C. Delivered in 24 hours.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/Aarahi Image 2.jpg" alt="Aarahi Bag" className="w-full max-w-sm rounded-[3rem] shadow-2xl border-8 border-white" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MOBILE NAVIGATION (4-BUTTON SYNCED) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 z-[9999] flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:hidden">
        <Link to="/" className="flex flex-col items-center text-[#3E2723]">
          <HomeIcon size={22} strokeWidth={2.5} />
          <span className="text-[9px] font-bold mt-1 uppercase">Home</span>
        </Link>
        
        <Link to="/about" className="flex flex-col items-center text-gray-400">
          <HelpCircle size={22} />
          <span className="text-[9px] font-bold mt-1 uppercase text-nowrap">Why Me</span>
        </Link>
        
        <button className="flex flex-col items-center text-gray-400">
          <Search size={22} />
          <span className="text-[9px] font-bold mt-1 uppercase">Search</span>
        </button>

        <Link to="/shop" className="relative bg-[#3E2723] text-[#D4AF37] px-4 py-2 rounded-xl flex flex-col items-center shadow-lg active:scale-95 transition-transform">
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative h-3 w-3 rounded-full bg-red-500 border-2 border-white"></span>
          </span>
          <span className="text-[8px] font-black italic font-serif leading-none uppercase">Aarahi</span>
          <span className="text-[10px] font-black uppercase tracking-tighter">Shop</span>
        </Link>
      </div>

    </div>
  );
};

export default Home;