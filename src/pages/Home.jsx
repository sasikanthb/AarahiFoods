import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin, ShieldCheck, Zap, Star, Wind, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => { 
    const timer = setTimeout(() => setLoading(false), 1500); 
    return () => clearTimeout(timer); 
  }, []);

  if (loading) return (
    <div className="h-screen w-full bg-[#3E2723] flex flex-col items-center justify-center">
      <motion.h1 
        animate={{ opacity: [0.3, 1, 0.3] }} 
        transition={{ duration: 2, repeat: Infinity }} 
        className="text-[#D4AF37] font-serif italic text-6xl mb-4 text-center px-6"
      >
        Aarahi
      </motion.h1>
      <p className="text-[#D4AF37]/50 font-sans text-[9px] uppercase tracking-[0.6em]">Milling Vitality for Bengaluru</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-32">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 bg-[#F5F5DC] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/Aarahi Image 3.jpg" className="w-full h-full object-cover scale-105" alt="Pure Flour" />
        </div>
        
        <div className="max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-3 bg-white/90 px-6 py-2 rounded-full border border-[#D4AF37]/20 shadow-xl mb-10"
          >
            <MapPin size={12} className="text-red-500 animate-pulse" />
            <span className="uppercase tracking-[0.3em] text-[9px] font-sans font-black">Live Bengaluru Mill</span>
            <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }} 
            className="text-7xl md:text-[9.5rem] font-bold mb-8 leading-[0.85] tracking-tighter uppercase"
          >
            Stop Eating <br /><span className="italic text-[#D4AF37] font-light normal-case text-[8.5rem]">"Dead"</span> Flour.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }} 
            className="text-xl md:text-2xl mb-12 font-sans text-gray-700 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Slow-milled Sharbati Wheat. Ground at <span className="font-bold underline decoration-[#D4AF37]">30°C</span> to keep the nutrients alive.
          </motion.p>
          
          <Link to="/shop">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="bg-[#3E2723] text-white px-16 py-6 rounded-full text-lg font-black shadow-2xl uppercase tracking-widest"
            >
              Claim Freshness
            </motion.button>
          </Link>
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 opacity-20"><ArrowDown size={30} /></motion.div>
      </section>

      {/* 2. VALUE PROPS (TRUST CARDS) */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          { icon: <Wind size={20}/>, t: "Cold-Milled", d: "Traditional stones maintain a cool 28°C process to protect oils." },
          { icon: <Star size={20}/>, t: "Sharbati Gold", d: "Sourced directly from MP's finest wheat belts for superior texture." },
          { icon: <Zap size={20}/>, t: "24Hr Cycle", d: "Milled on demand. Arrives while the grain's vitality is peaking." }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all text-left"
          >
            <div className="text-[#D4AF37] mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{item.t}</h3>
            <p className="text-gray-500 text-sm font-sans leading-relaxed">{item.d}</p>
          </motion.div>
        ))}
      </section>

      {/* 3. THE SCIENCE SECTION */}
      <section className="py-24 bg-[#FCF9F2] px-6 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[#D4AF37] font-sans font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">The Aarahi Standard</span>
            <h2 className="text-5xl md:text-8xl font-bold mb-10 leading-none tracking-tighter uppercase">Vitality <br/>Preserved.</h2>
            <div className="p-8 bg-white rounded-[2.5rem] shadow-xl border-l-[10px] border-[#D4AF37]">
              <p className="text-2xl font-bold leading-tight italic text-[#3E2723]">Stone Ground. Maternal Care. <br/>Zero compromise on health.</p>
              <p className="mt-4 text-gray-500 font-sans text-sm italic italic">Industrial rollers hit 90°C. Our stones stay cool to keep nutrition intact.</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            className="relative flex justify-center"
          >
            <img src="/Aarahi Image 2.jpg" alt="Aarahi Package" className="w-full max-w-sm rounded-[3rem] shadow-2xl border-[12px] border-white rotate-2 hover:rotate-0 transition-all duration-500" />
          </motion.div>
        </div>
      </section>

      {/* 4. FOUNDER MANIFESTO */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="max-w-5xl mx-auto text-center"
        >
          <ShieldCheck size={40} className="mx-auto text-[#D4AF37] mb-8" />
          <h2 className="text-4xl md:text-6xl font-bold italic mb-10 tracking-tight leading-tight">
            "I couldn't find flour I trusted for my family's health. So I brought back the purity of the olden days."
          </h2>
          <div className="flex flex-col items-center">
            <p className="text-[#3E2723] font-black uppercase tracking-[0.4em] text-[10px]">Aalekhya Reddy</p>
            <p className="text-[#D4AF37] font-sans text-[8px] font-bold mt-1 uppercase">Founder, Aarahi Foods</p>
          </div>
        </motion.div>
      </section>

      {/* 5. THE 24-HOUR TIMELINE */}
      <section className="py-24 bg-[#FCF9F2] px-6">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-24 italic tracking-tighter uppercase">The 24-Hour Obsession</h2>
        <div className="max-w-4xl mx-auto space-y-10 text-left">
          {[
            { t: "05 AM", h: "Selection", d: "Hand-picking the finest Sharbati grains for our daily batch." },
            { t: "09 AM", h: "Milling", d: "Cold-milling begins. Heat is monitored to stay under 30°C." },
            { t: "04 PM", h: "Delivery", d: "Dispatched across Bengaluru. Freshness at your doorstep." }
          ].map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              className="flex items-center gap-10 bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl font-black text-[#D4AF37] italic opacity-50">{s.t}</div>
              <div>
                <h4 className="font-sans font-black text-xs tracking-widest text-[#3E2723] uppercase mb-1">{s.h}</h4>
                <p className="text-gray-500 text-sm font-sans">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-[#3E2723] text-white py-40 text-center px-6">
        <motion.h2 whileInView={{ opacity: [0, 0.1], scale: [0.9, 1] }} className="text-8xl md:text-[15rem] font-bold italic text-[#D4AF37] mb-8 select-none uppercase leading-none">Aarahi</motion.h2>
        <p className="text-[10px] uppercase tracking-[1.5em] opacity-30 font-sans">Traditional Quality • Bengaluru</p>
      </footer>

      {/* 7. FLOATING PREMIUM MOBILE NAV */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[92%] z-[9999] md:hidden">
        <div className="bg-white/80 backdrop-blur-2xl border border-white/40 rounded-[2.5rem] px-8 py-4 flex justify-between items-center shadow-2xl">
          <Link to="/" className="flex flex-col items-center text-[#3E2723] transition-transform active:scale-90">
            <HomeIcon size={22} strokeWidth={2.5} />
            <span className="text-[8px] font-black mt-1 uppercase">Home</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-transform active:scale-90">
            <HelpCircle size={22} />
            <span className="text-[8px] font-black mt-1 uppercase text-nowrap">Why Me</span>
          </Link>
          <button className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-transform active:scale-90">
            <Search size={22} />
            <span className="text-[8px] font-black mt-1 uppercase">Search</span>
          </button>
          <Link to="/shop" className="relative bg-[#3E2723] text-[#D4AF37] px-5 py-3 rounded-2xl flex flex-col items-center shadow-2xl active:scale-90 transition-all">
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
            <span className="text-[7px] font-black italic uppercase leading-none tracking-tighter font-serif">Aarahi</span>
            <span className="text-[11px] font-black uppercase tracking-tighter">Shop</span>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;