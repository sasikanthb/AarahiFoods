import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin, ShoppingBag, ShieldCheck, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- ANIMATION VARIANTS ---
const navItemVariant = {
  initial: { y: 0 },
  tap: { scale: 0.85, transition: { type: "spring", stiffness: 400, damping: 10 } }
};

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#3E2723] flex flex-col items-center justify-center">
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.98, 1, 0.98] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-[#D4AF37] font-serif italic text-3xl tracking-widest uppercase font-black"
        >
          Aarahi
        </motion.div>
        <div className="mt-4 h-[1px] w-12 bg-[#D4AF37]/30 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-32">
      
      {/* 1. HERO SECTION (THE "WOW" ENTRY) */}
      <section className="relative h-[95vh] flex items-center justify-center text-center px-6 bg-[#F5F5DC] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }} 
          animate={{ scale: 1, opacity: 0.15 }} 
          transition={{ duration: 3 }} 
          className="absolute inset-0 z-0"
        >
          <img src="/Aarahi Image 3.jpg" alt="Fresh Flour" className="w-full h-full object-cover" />
        </motion.div>

        <div className="max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex justify-center mb-10"
          >
            <div className="bg-white/80 backdrop-blur-xl px-6 py-2.5 rounded-full border border-[#D4AF37]/20 shadow-xl flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="uppercase tracking-[0.4em] text-[10px] font-sans font-black text-[#3E2723]">Milling Live in Bengaluru</span>
            </div>
          </motion.div>

          <h1 className="text-7xl md:text-[11rem] font-bold mb-10 leading-[0.8] tracking-tighter uppercase">
            Stop Eating <br /><span className="italic text-[#D4AF37] font-light normal-case">"Dead"</span> Flour.
          </h1>
          
          <p className="text-xl md:text-3xl mb-16 font-sans text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Stone-milled at 28°C to keep the nutrients alive. <br />
            Delivered from our stones to your home in 24 hours.
          </p>

          <Link to="/shop">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 30px 60px rgba(62,39,35,0.3)" }} 
              whileTap={{ scale: 0.95 }} 
              className="bg-[#3E2723] text-white px-20 py-7 rounded-full text-xl font-black shadow-2xl uppercase tracking-[0.2em] font-sans"
            >
              Order Fresh
            </motion.button>
          </Link>
        </div>
        
        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }} 
          className="absolute bottom-10 opacity-20"
        >
          <ArrowDown size={30} />
        </motion.div>
      </section>

      {/* 2. THE SCIENCE (AUTHORITY) */}
      <section className="py-40 bg-[#FCF9F2]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-32 items-center">
          <div className="space-y-16 text-left">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">The Science <br/>of Living.</h2>
            <div className="space-y-12">
              <div className="border-l-4 border-red-100 pl-10 py-2">
                <p className="text-[11px] font-black uppercase text-red-300 tracking-[0.5em] mb-4">Industrial Roller</p>
                <p className="text-3xl text-gray-400 italic font-light leading-snug">90°C heat kills the nutrients. You're eating empty starch.</p>
              </div>
              <motion.div 
                whileHover={{ x: 15 }} 
                className="border-l-8 border-[#D4AF37] pl-10 py-10 bg-white rounded-r-[4rem] shadow-[0_40px_80px_rgba(0,0,0,0.05)]"
              >
                <p className="text-[11px] font-black uppercase text-[#D4AF37] tracking-[0.5em] mb-4">Aarahi Cold-Mill</p>
                <p className="text-4xl font-black leading-tight text-[#3E2723]">Stone Ground at 28°C. <br/>Vitality preserved.</p>
              </motion.div>
            </div>
          </div>
          <div className="flex justify-center group relative">
             <div className="absolute inset-0 bg-[#D4AF37]/5 rounded-full blur-[100px] scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
             <img src="/Aarahi Image 2.jpg" alt="Aarahi Bag" className="relative w-full max-w-md rounded-[5rem] shadow-[0_50px_100px_rgba(0,0,0,0.12)] border-[20px] border-white group-hover:rotate-2 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* 3. FOUNDER MANIFESTO (TRUST) */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="bg-[#F5F5DC] rounded-[5rem] p-16 md:p-32 flex flex-col md:flex-row items-center gap-24 shadow-inner border border-[#D4AF37]/10"
          >
            <div className="md:w-3/5 text-left">
              <div className="flex items-center gap-4 mb-12">
                <ShieldCheck size={30} className="text-[#D4AF37]" />
                <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-[0.6em] text-[12px]">The Mother's Promise</span>
              </div>
              <h2 className="text-5xl md:text-[5.5rem] font-bold text-[#3E2723] mb-12 leading-[1] italic tracking-tighter">
                "I started Aarahi to bring back the purity our families deserve."
              </h2>
              <p className="text-3xl text-gray-700 font-sans italic mb-12 leading-relaxed font-light">"Every bag we mill is treated with the same care as the food I put on my own dining table."</p>
              <div className="text-[#3E2723] font-black text-4xl uppercase tracking-tighter">Aalekhya Reddy</div>
              <div className="text-[12px] uppercase tracking-[0.6em] text-[#D4AF37] font-sans font-bold mt-2">Founder, Aarahi Foods</div>
            </div>
            <div className="md:w-2/5 flex justify-center">
               <div className="w-96 h-96 rounded-full bg-white border-[20px] border-white shadow-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                 <div className="bg-gray-100 h-full w-full flex items-center justify-center text-gray-400 font-black uppercase text-xs tracking-widest">Portrait</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. THE 24-HOUR TIMELINE (SCALE) */}
      <section className="py-40 bg-[#FCF9F2]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-7xl md:text-[10rem] font-black mb-40 italic font-serif tracking-tighter uppercase leading-none text-center">24-Hour Timeline.</h2>
          <div className="space-y-56">
            {[
              { time: "05", title: "THE SELECTION", desc: "Inspecting premium MP Sharbati for moisture and soul." },
              { time: "09", title: "STONE MILLING", desc: "Stone chakki starts. We monitor temperature every 15 minutes." },
              { time: "04", title: "DELIVERY", desc: "Delivered across Bangalore while the nutrients are active." }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-24 group"
              >
                <div className="text-[18rem] font-black text-[#D4AF37]/10 italic leading-none group-hover:text-[#D4AF37]/25 transition-all duration-700 select-none">{step.time}</div>
                <div className="relative">
                  <h4 className="font-sans font-black text-xs tracking-[0.6em] text-[#D4AF37] mb-6 uppercase">{step.title}</h4>
                  <p className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#3E2723] text-white py-48 text-center px-6">
        <motion.h2 whileHover={{ scale: 1.02 }} className="text-8xl md:text-[18rem] font-black italic text-[#D4AF37] mb-12 uppercase tracking-tighter leading-none">Aarahi</motion.h2>
        <p className="text-sm uppercase tracking-[1em] opacity-30 font-sans mb-20">Milled Fresh in Bengaluru</p>
        <div className="pt-20 border-t border-white/5 text-[11px] text-white/10 uppercase tracking-[0.8em] font-sans">© 2026 Aarahi Foods Private Limited</div>
      </footer>

      {/* 6. THE "STUNNING" MOBILE NAVIGATION (GLASS-FLOAT) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[92%] z-[9999] md:hidden">
        <div className="bg-white/80 backdrop-blur-3xl border border-white/50 rounded-[3rem] px-10 py-6 flex justify-between items-center shadow-[0_30px_100px_rgba(0,0,0,0.15)]">
          
          <Link to="/">
            <motion.div variants={navItemVariant} whileTap="tap" className="flex flex-col items-center text-[#3E2723]">
              <HomeIcon size={26} strokeWidth={2.5} />
              <span className="text-[10px] font-black mt-2 uppercase tracking-tighter">Home</span>
            </motion.div>
          </Link>
          
          <Link to="/about">
            <motion.div variants={navItemVariant} whileTap="tap" className="flex flex-col items-center text-gray-400">
              <HelpCircle size={26} strokeWidth={2.5} />
              <span className="text-[10px] font-black mt-2 uppercase tracking-tighter text-nowrap">Why Me</span>
            </motion.div>
          </Link>
          
          <Link to="/shop">
            <motion.div variants={navItemVariant} whileTap="tap" className="relative flex flex-col items-center group">
              {/* SUBTLE EYE-CATCHY AURA */}
              <div className="absolute -inset-6 bg-[#D4AF37]/15 rounded-full blur-2xl transition-all duration-700"></div>
              
              <div className="relative text-[#3E2723]">
                <ShoppingBag size={28} strokeWidth={2.5} />
                <span className="absolute top-0 -right-1 flex h-2.5 w-2.5">
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border-2 border-white shadow-sm"></span>
                </span>
              </div>
              <span className="text-[10px] font-black mt-2 uppercase tracking-tighter text-nowrap">Aarahi Shop</span>
            </motion.div>
          </Link>

          <Link to="/shop">
            <motion.div variants={navItemVariant} whileTap="tap" className="flex flex-col items-center text-gray-400">
              <Search size={26} strokeWidth={2.5} />
              <span className="text-[10px] font-black mt-2 uppercase tracking-tighter">Search</span>
            </motion.div>
          </Link>
          
        </div>
      </div>

    </div>
  );
};

export default Home;