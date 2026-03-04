import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin, ArrowDown, ShieldCheck, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- ANIMATION VARIANTS ---
const textSettle = {
  initial: { y: 40, opacity: 0, filter: "blur(10px)" },
  animate: { 
    y: 0, 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } 
  }
};

const pulseAction = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
};

const cardHover = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -10,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // High-end Scroll Progress Bar for the 100-crore look
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#3E2723] flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-[#D4AF37] font-serif italic text-4xl mb-4 tracking-tighter uppercase font-black">Aarahi</div>
          <div className="flex items-center gap-2 text-white/20 font-sans text-[10px] uppercase tracking-[0.4em]">
             <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></motion.span>
             Milling Freshness for Bangalore...
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-32">
      
      {/* 1. TOP PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-[#D4AF37] z-[10002] origin-left" style={{ scaleX }} />

      {/* 2. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 bg-[#F5F5DC] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.3, opacity: 0 }} 
          animate={{ scale: 1, opacity: 0.18 }} 
          transition={{ duration: 4 }}
          className="absolute inset-0 z-0"
        >
          <img src="/Aarahi Image 3.jpg" alt="Fresh Flour" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div variants={textSettle} initial="initial" animate="animate" className="max-w-6xl relative z-10">
          <div className="flex justify-center mb-8">
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full border border-[#D4AF37]/30 shadow-2xl">
              <MapPin size={14} className="text-red-500" />
              <span className="uppercase tracking-[0.3em] text-[11px] text-[#3E2723] font-sans font-black">Bengaluru</span>
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-sans font-black text-green-700">LIVE MILLING</span>
            </motion.div>
          </div>

          <h1 className="text-7xl md:text-[11rem] font-bold mb-8 leading-[0.8] tracking-tighter uppercase">
            Stop Eating <br /><span className="italic text-[#D4AF37] font-light normal-case">"Dead"</span> Flour.
          </h1>
          <p className="text-xl md:text-3xl mb-14 font-sans text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Slow-milled at 28°C to keep the life inside. <br />
            From our stones to your home in 24 hours.
          </p>
          <Link to="/shop">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 30px 60px rgba(62,39,35,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3E2723] text-white px-16 py-7 rounded-full text-xl font-bold font-sans uppercase tracking-[0.2em] shadow-2xl transition-all"
            >
              Start Fresh Today
            </motion.button>
          </Link>
        </motion.div>
        
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 opacity-20">
          <ArrowDown size={30} />
        </motion.div>
      </section>

      {/* 3. THE SCIENCE (EYE-CATCHY CARDS) */}
      <section className="py-40 bg-[#FCF9F2] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-12 text-left">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">The Science <br/>of Living.</h2>
              <div className="space-y-10">
                <motion.div variants={cardHover} initial="initial" whileHover="hover" className="border-l-4 border-red-200 pl-10 py-4 group">
                  <p className="text-[11px] font-black uppercase text-red-300 tracking-[0.4em] mb-3">Industrial Standard</p>
                  <p className="text-3xl text-gray-400 italic font-light group-hover:text-red-900 transition-colors duration-500">90°C rollers kill the wheat germ.</p>
                </motion.div>
                <motion.div variants={cardHover} initial="initial" whileHover="hover" className="border-l-8 border-[#D4AF37] pl-10 py-8 bg-white rounded-r-[4rem] shadow-2xl">
                  <p className="text-[11px] font-black uppercase text-[#D4AF37] tracking-[0.4em] mb-4">Aarahi Fresh</p>
                  <p className="text-4xl font-black leading-tight text-[#3E2723]">Milled at 28°C. <br/>Vitality preserved.</p>
                </motion.div>
              </div>
            </div>
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [2, -2, 2] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative p-10 bg-white rounded-[5rem] shadow-2xl border-[15px] border-white group"
            >
              <img src="/Aarahi Image 2.jpg" alt="Aarahi Bag" className="w-full rounded-[3rem] transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute -bottom-10 -right-10 bg-[#D4AF37] text-[#3E2723] p-12 rounded-full font-black text-3xl italic shadow-2xl">
                100%<br/><span className="text-xs uppercase tracking-widest not-italic">Pure</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER MANIFESTO (SACRED GLOW) */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="bg-[#F5F5DC] rounded-[5rem] p-16 md:p-32 relative flex flex-col md:flex-row items-center gap-24 shadow-inner border border-[#D4AF37]/10 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] -mr-48 -mt-48" />
            <div className="md:w-3/5 text-left relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <ShieldCheck size={26} className="text-[#D4AF37]" />
                <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-[0.5em] text-[11px]">The Mother's Promise</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-[#3E2723] mb-12 leading-[1.1] italic tracking-tighter">
                "I realized that the flour we were feeding our children had lost its soul."
              </h2>
              <p className="text-2xl text-gray-700 font-sans italic mb-12 leading-relaxed font-light">
                "Every bag we mill is treated with the same care as the food I put on my own dining table."
              </p>
              <div className="text-[#3E2723] font-black text-4xl uppercase tracking-tighter">Aalekhya Reddy</div>
              <div className="text-[11px] uppercase tracking-[0.5em] text-[#D4AF37] font-sans font-bold mt-2">Founder, Aarahi Foods</div>
            </div>
            <div className="md:w-2/5 flex justify-center relative">
               <div className="w-[450px] h-[450px] rounded-full bg-white border-[20px] border-white shadow-[0_60px_120px_rgba(0,0,0,0.15)] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                 <div className="bg-gray-100 h-full w-full flex items-center justify-center text-gray-300 italic">Founder Portrait</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. THE 24-HOUR OBSESSION TIMELINE (MASSIVE REVEAL) */}
      <section className="py-40 bg-[#FCF9F2]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-[9rem] font-black mb-40 italic font-serif tracking-tighter uppercase leading-none">24-Hour Obsession.</h2>
          <div className="space-y-64">
            {[
              { time: "05", title: "THE SELECTION", desc: "Inspecting premium MP Sharbati for moisture and soul." },
              { time: "09", title: "PRECISION MILLING", desc: "Stone chakki starts. We monitor temperature every 15 minutes." },
              { time: "04", title: "FINAL DISPATCH", desc: "Delivered across Bangalore while the nutrients are still active." }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 100 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-24 text-left group"
              >
                <div className="text-[18rem] font-black text-[#D4AF37]/10 italic leading-none group-hover:text-[#D4AF37]/25 transition-all duration-700 select-none">{step.time}</div>
                <div className="relative">
                  <h4 className="font-sans font-black text-xs tracking-[0.5em] text-[#D4AF37] mb-6 uppercase tracking-widest">{step.title}</h4>
                  <p className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-[#3E2723] text-white py-48 text-center px-6">
        <motion.h2 
          whileHover={{ scale: 1.02 }}
          className="text-7xl md:text-[20rem] font-black italic text-[#D4AF37] mb-12 uppercase tracking-tighter leading-none"
        >
          Aarahi
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-12 text-[11px] font-black uppercase tracking-[0.5em] text-white/30 mb-20">
           <span className="hover:text-white transition-colors cursor-pointer">Instagram</span>
           <span className="hover:text-white transition-colors cursor-pointer">WhatsApp</span>
           <span className="hover:text-white transition-colors cursor-pointer">Bangalore HQ</span>
        </div>
        <div className="pt-16 border-t border-white/5 text-[10px] text-white/10 uppercase tracking-[0.8em] font-sans">
          © 2026 Aarahi Foods Private Limited • Traditional Freshness
        </div>
      </footer>

      {/* 7. APP-STYLE NAVIGATION (STUNNING REDESIGN) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-3xl border-t border-gray-100 px-10 py-6 z-[9999] flex justify-between items-center shadow-[0_-25px_60px_rgba(0,0,0,0.12)] md:hidden">
        
        <Link to="/" className="flex flex-col items-center text-[#3E2723] active:scale-90 transition-all">
          <HomeIcon size={28} strokeWidth={2.5} />
          <span className="text-[10px] font-black mt-1.5 uppercase tracking-tighter">Home</span>
        </Link>
        
        <Link to="/about" className="flex flex-col items-center text-gray-400 active:scale-90 transition-all">
          <HelpCircle size={28} strokeWidth={2.5} />
          <span className="text-[10px] font-black mt-1.5 uppercase tracking-tighter">Why Me</span>
        </Link>
        
        <motion.div variants={pulseAction} animate="animate">
          <Link to="/shop" className="relative bg-[#3E2723] text-[#D4AF37] px-8 py-5 rounded-[2.5rem] flex flex-col items-center shadow-2xl -mt-20 active:scale-95 transition-transform border-[6px] border-white">
            <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white"></span>
            </span>
            <span className="text-[12px] font-black uppercase tracking-tighter">Aarahi Shop</span>
            <span className="text-[8px] font-black italic opacity-50 tracking-tighter">Milling Live</span>
          </Link>
        </motion.div>

        <Link to="/shop" className="flex flex-col items-center text-gray-400 active:scale-90 transition-all">
          <Search size={28} strokeWidth={2.5} />
          <span className="text-[10px] font-black mt-1.5 uppercase tracking-tighter">Search</span>
        </Link>
        
      </div>

    </div>
  );
};

export default Home;