import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin, ShoppingBag, ShieldCheck, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- ANIMATION VARIANTS ---
const floating = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

const cardHover = {
  initial: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: { 
    scale: 1.02, 
    boxShadow: "0px 20px 40px rgba(212, 175, 55, 0.1)",
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
          animate={{ opacity: [0.3, 1, 0.3] }} 
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
          initial={{ scale: 1.1, opacity: 0 }} 
          animate={{ scale: 1, opacity: 0.15 }} 
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img src="/Aarahi Image 3.jpg" alt="Fresh Flour" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl relative z-10">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full border border-[#D4AF37]/10 shadow-sm">
              <MapPin size={12} className="text-red-500" />
              <span className="uppercase tracking-[0.2em] text-[10px] font-sans font-black">Bengaluru</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[9px] font-sans font-bold text-green-700 uppercase tracking-tighter">Live Milling</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-tight tracking-tighter uppercase">
            Stop Eating <br /><span className="italic text-[#D4AF37] font-light normal-case">"Dead"</span> Flour.
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-sans text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Slow-milled at 28°C to keep the nutrients alive. <br />
            Traditional stone-milling meets uncompromising freshness.
          </p>
          <Link to="/shop">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-[#3E2723] text-white px-14 py-6 rounded-full text-lg font-bold shadow-2xl font-sans uppercase tracking-widest transition-all"
            >
              Start Fresh Today
            </motion.button>
          </Link>
        </motion.div>
        
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 opacity-20">
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* 2. THE SCIENCE (THE "AUTHORITY" SECTION) */}
      <section className="py-32 bg-[#FCF9F2]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12 text-left">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase">The Science <br/>of Living.</h2>
            <div className="space-y-10">
              <div className="border-l-4 border-red-100 pl-10 py-2">
                <p className="text-[11px] font-black uppercase text-red-300 tracking-[0.4em] mb-3">Industrial Standard</p>
                <p className="text-2xl text-gray-400 italic font-light leading-snug">High-speed 90°C rollers kill the wheat germ and destroy enzymes.</p>
              </div>
              <motion.div variants={cardHover} initial="initial" whileHover="hover" className="border-l-8 border-[#D4AF37] pl-10 py-8 bg-white rounded-r-[3rem] shadow-xl">
                <p className="text-[11px] font-black uppercase text-[#D4AF37] tracking-[0.4em] mb-4">Aarahi Cold-Mill</p>
                <p className="text-3xl font-black text-[#3E2723] leading-tight">Milled at 28°C. <br/>Vitality preserved.</p>
              </motion.div>
            </div>
          </div>
          <motion.div variants={floating} animate="animate" className="flex justify-center">
            <div className="relative p-8 bg-white rounded-[5rem] shadow-2xl border-[15px] border-white group">
              <img src="/Aarahi Image 2.jpg" alt="Aarahi Bag" className="w-full max-w-md rounded-[3rem]" />
              <div className="absolute -bottom-8 -right-8 bg-[#D4AF37] text-[#3E2723] p-10 rounded-full font-black text-2xl italic shadow-2xl">
                100%<br/><span className="text-xs uppercase tracking-widest not-italic">Pure</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. FOUNDER MANIFESTO (THE "TRUST" SECTION) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#F5F5DC] rounded-[5rem] p-16 md:p-32 relative flex flex-col md:flex-row items-center gap-20 shadow-inner border border-[#D4AF37]/10"
          >
            <div className="md:w-3/5 text-left">
              <div className="flex items-center gap-3 mb-10">
                <ShieldCheck size={24} className="text-[#D4AF37]" />
                <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-[0.5em] text-[11px]">The Mother's Promise</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#3E2723] mb-12 leading-[1.1] italic tracking-tighter">
                "I realized that the flour we were feeding our children had lost its soul."
              </h2>
              <p className="text-2xl text-gray-700 font-sans italic mb-12 leading-relaxed font-light">
                "Every bag we mill is treated with the same care as the food I put on my own dining table. No shortcuts, just purity."
              </p>
              <div>
                <div className="text-[#3E2723] font-black text-3xl uppercase tracking-tighter">Aalekhya Reddy</div>
                <div className="text-[11px] uppercase tracking-[0.5em] text-[#D4AF37] font-sans font-bold mt-2">Founder, Aarahi Foods</div>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center relative">
               <div className="w-80 h-80 rounded-full bg-white border-[16px] border-white shadow-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                 <div className="bg-gray-100 h-full w-full flex items-center justify-center text-gray-300 italic text-sm tracking-widest uppercase">Founder Photo</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. THE 24-HOUR OBSESSION (THE "SCALE" SECTION) */}
      <section className="py-40 bg-[#FCF9F2]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-8xl font-black mb-32 italic font-serif tracking-tighter uppercase leading-none text-[#3E2723]">24-Hour Obsession.</h2>
          <div className="space-y-48">
            {[
              { time: "05", title: "THE SELECTION", desc: "Inspecting premium MP Sharbati for moisture and soul." },
              { time: "09", title: "PRECISION MILLING", desc: "Stone chakki starts. We monitor temperature every 15 minutes." },
              { time: "04", title: "FINAL DISPATCH", desc: "Delivered across Bangalore while the nutrients are active." }
            ].map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-24 text-left group">
                <div className="text-[12rem] font-black text-[#D4AF37]/10 italic leading-none group-hover:text-[#D4AF37]/20 transition-colors select-none">{step.time}</div>
                <div className="relative">
                  <h4 className="font-sans font-black text-xs tracking-[0.5em] text-[#D4AF37] mb-6 uppercase tracking-widest">{step.title}</h4>
                  <p className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#3E2723] text-white py-32 text-center px-6">
        <h2 className="text-6xl md:text-[10rem] font-black italic text-[#D4AF37] mb-12 uppercase tracking-tighter leading-none">Aarahi</h2>
        <div className="pt-16 border-t border-white/5 text-[10px] text-white/10 uppercase tracking-[0.8em] font-sans">
          © 2026 Aarahi Foods • Traditional Freshness • Bangalore
        </div>
      </footer>

      {/* 6. REFINED MOBILE NAVIGATION (THE "APP" SECTION) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-3xl border-t border-gray-100 px-10 py-6 z-[9999] flex justify-between items-center shadow-[0_-25px_60px_rgba(0,0,0,0.1)] md:hidden">
        
        <Link to="/" className="flex flex-col items-center text-[#3E2723] active:scale-90 transition-all">
          <HomeIcon size={26} strokeWidth={2.5} />
          <span className="text-[10px] font-black mt-1.5 uppercase tracking-tighter">Home</span>
        </Link>
        
        <Link to="/about" className="flex flex-col items-center text-gray-400 active:scale-90 transition-all">
          <HelpCircle size={26} strokeWidth={2.5} />
          <span className="text-[10px] font-black mt-1.5 uppercase tracking-tighter">Why Me</span>
        </Link>
        
        {/* SHOP ICON (REFINED & ELEGANT) */}
        <Link to="/shop" className="relative flex flex-col items-center group active:scale-95 transition-transform">
          <div className="bg-[#3E2723] p-4 rounded-2xl shadow-2xl border border-[#D4AF37]/20 relative">
            <ShoppingBag size={28} className="text-[#D4AF37]" strokeWidth={2.5} />
            {/* SUBTLE RED NOTIFICATION DOT */}
            <span className="absolute top-2.5 right-2.5 flex h-3 w-3">
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white shadow-sm"></span>
            </span>
          </div>
          <span className="text-[10px] font-black mt-2 text-[#3E2723] uppercase tracking-tighter">Shop</span>
        </Link>

        <Link to="/shop" className="flex flex-col items-center text-gray-400 active:scale-90 transition-all">
          <Search size={26} strokeWidth={2.5} />
          <span className="text-[10px] font-black mt-1.5 uppercase tracking-tighter">Search</span>
        </Link>
        
      </div>

    </div>
  );
};

export default Home;