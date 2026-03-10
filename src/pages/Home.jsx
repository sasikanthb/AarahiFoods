import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin, Wind, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- NEW: GRAIN POUR COMPONENT ---
const GrainPour = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 4500); // Pouring stops after 4.5s
    return () => clearTimeout(timer);
  }, []);

  const grains = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    size: Math.random() * 6 + 3,
    // Gold for Wheat, Dark Brown for Ragi
    color: i % 2 === 0 ? '#D4AF37' : '#5D4037', 
    duration: Math.random() * 1.2 + 0.8
  }));

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
          {grains.map((grain) => (
            <motion.div
              key={grain.id}
              initial={{ y: -20, x: `${grain.x}vw`, opacity: 0 }}
              animate={{ y: '110vh', opacity: [0, 1, 1, 0], rotate: 360 }}
              transition={{ duration: grain.duration, delay: grain.delay, ease: "easeIn" }}
              className="absolute rounded-full"
              style={{
                width: grain.size,
                height: grain.size * 1.4,
                backgroundColor: grain.color,
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

// --- ANIMATION FOR THE SHAKING/FLOATING BAG ---
const floatingBag = {
  animate: {
    y: [0, -20, 0],
    rotate: [-1, 2, -1],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
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
  const { scrollY } = useScroll();

  const yGrains = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const bgTransition = useTransform(scrollY, [0, 800, 1500], ["#F5F5DC", "#FFFDF5", "#FDFBF7"]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#3E2723] flex flex-col items-center justify-center overflow-hidden">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <motion.h2 animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="text-[#D4AF37] font-serif italic text-4xl md:text-6xl mb-4 tracking-tighter">Aarahi</motion.h2>
          <motion.p className="text-[#D4AF37]/80 font-sans text-[10px] uppercase tracking-[0.5em] font-black">Milling Fresh for Bengaluru</motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div style={{ backgroundColor: bgTransition }} className="min-h-screen text-[#3E2723] font-serif overflow-x-hidden pb-24 transition-colors duration-700">
      
      {/* 1. NEW: THE GRAIN POUR EFFECT (TRRIGERS ON LOAD) */}
      <GrainPour />

      {/* BACKGROUND PARTICLES */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div style={{ y: yGrains }} className="absolute top-20 left-[10%] w-12 h-12 bg-[#8B4513]/5 rounded-full blur-xl" />
      </div>

      {/* 2. HERO SECTION (5-4-9 CONCEPT) */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <motion.div style={{ opacity: heroOpacity }} className="max-w-4xl relative z-10">
          
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-10">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-5 py-2 rounded-full border border-[#D4AF37]/20 shadow-lg">
              <MapPin size={14} className="text-red-500 animate-pulse" />
              <span className="uppercase tracking-[0.2em] text-[9px] text-[#3E2723] font-sans font-black">
                Milled in Bengaluru • Delivered within 24 Hours
              </span>
              <span className="flex h-2 w-2 relative ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[9px] font-sans font-bold text-green-700 uppercase tracking-tighter ml-1 text-nowrap">Live Milling</span>
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-tight tracking-tighter">
            Stop Eating <br />
            <span className="relative inline-block">
              <span className="italic text-[#D4AF37] font-light">"Dead"</span>
              <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 1, duration: 1 }} className="absolute -bottom-2 left-0 h-[2px] bg-[#D4AF37]/30" />
            </span> Flour.
          </h1>

          <p className="text-xl md:text-2xl mb-12 font-sans text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Slow-milled Sharbati Wheat. Ground at 30°C to protect natural nutrition.
          </p>

          <Link to="/shop">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#3E2723] text-[#D4AF37] px-14 py-6 rounded-2xl text-xs font-black uppercase tracking-[0.3em] shadow-2xl">
              Claim Founder's Kit
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* 3. SCIENCE SECTION (SHAKING BAG) */}
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723]">The Science of Freshness</h2>
            <div className="space-y-8 font-sans">
              <motion.div variants={cardHover} initial="initial" whileHover="hover" className="border-l-4 border-red-200 pl-8 p-6 rounded-r-2xl bg-white/30 transition-all">
                <h4 className="text-red-800 font-bold uppercase text-[10px] tracking-[0.2em] mb-2 font-black">Industrial Flour</h4>
                <p className="text-gray-500 text-sm italic">Roller mills reach 90°C, destroying essential nutrients before they reach you.</p>
              </motion.div>
              <motion.div variants={cardHover} initial="initial" whileHover="hover" className="border-l-4 border-[#D4AF37] pl-8 bg-white py-8 rounded-r-[2rem] shadow-xl">
                <h4 className="text-[#D4AF37] font-bold uppercase text-[10px] tracking-[0.2em] mb-2 font-black">Aarahi Fresh</h4>
                <p className="text-[#3E2723] font-bold">Stone-milled at 28 RPM (Ultra-slow) to keep the grain alive and the nutrition intact.</p>
              </motion.div>
            </div>
          </div>
          {/* THE SHAKING BAG */}
          <motion.div variants={floatingBag} animate="animate" className="flex justify-center relative">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4AF37_0%,_transparent_70%)] opacity-20 blur-3xl" />
             <img src="/Aarahi Image 2.jpg" alt="Aarahi Atta Bag" className="relative z-10 w-full max-w-sm rounded-[3rem] shadow-2xl border-8 border-white" />
          </motion.div>
        </div>
      </section>

      {/* 4. MILL METRICS (5-4-9 Logic) */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                <Wind className="mx-auto text-[#D4AF37] mb-4" />
                <div className="text-2xl font-bold font-sans">30°C</div>
                <div className="text-[10px] uppercase font-black text-gray-400">Cold Milling</div>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                <Zap className="mx-auto text-[#D4AF37] mb-4" />
                <div className="text-2xl font-bold font-sans">28 RPM</div>
                <div className="text-[10px] uppercase font-black text-gray-400">Slow Grind</div>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 col-span-2 md:col-span-1">
                <MapPin className="mx-auto text-[#D4AF37] mb-4" />
                <div className="text-2xl font-bold font-sans">24H</div>
                <div className="text-[10px] uppercase font-black text-gray-400">Fresh Delivery</div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. FOUNDER STORY & FOOTER */}
      <section className="py-24 relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#3E2723] text-[#D4AF37] rounded-[5rem] p-16 md:p-24 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 italic max-w-3xl mx-auto leading-snug">
              "I couldn't find flour I trusted for my family's health. I decided to start milling it myself."
            </h2>
            <p className="text-lg text-white/70 font-sans italic">— Aalekhya Reddy, Founder</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#3E2723] text-white py-20 px-6 text-center border-t border-white/5">
        <h2 className="text-4xl font-bold mb-4 italic text-[#D4AF37]">Aarahi</h2>
        <p className="font-sans text-gray-500 mb-8 max-w-lg mx-auto uppercase tracking-widest text-[9px] font-black italic">Bengaluru's Premier Cold-Milled Flour</p>
        <div className="pt-8 text-[9px] text-gray-600 uppercase tracking-widest font-sans">© 2026 Aarahi Foods • FSSAI Certified</div>
      </footer>

    </motion.div>
  );
};

export default Home;