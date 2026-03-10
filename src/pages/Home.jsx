import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin, Wind, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { scrollY } = useScroll();

  // --- CREATIVE PARALLAX ANIMATIONS ---
  // Background particles move at different speeds as you scroll
  const yGrains = useTransform(scrollY, [0, 1000], [0, 400]);
  const yFlourDust = useTransform(scrollY, [0, 1000], [0, -200]);
  const rotateGrains = useTransform(scrollY, [0, 1000], [0, 90]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const bgTransition = useTransform(
    scrollY, 
    [0, 800, 1500], 
    ["#F5F5DC", "#FFFDF5", "#FDFBF7"]
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#3E2723] flex flex-col items-center justify-center overflow-hidden">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <motion.h2 animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="text-[#D4AF37] font-serif italic text-4xl md:text-6xl mb-4 tracking-tighter">Aarahi</motion.h2>
          <motion.p animate={{ letterSpacing: ["0.2em", "0.5em", "0.2em"] }} transition={{ repeat: Infinity, duration: 3 }} className="text-[#D4AF37]/80 font-sans text-[10px] uppercase tracking-[0.5em] font-black">Milling Fresh for Bengaluru-V2</motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div style={{ backgroundColor: bgTransition }} className="min-h-screen text-[#3E2723] font-serif overflow-x-hidden pb-24 transition-colors duration-700">
      
      {/* --- CREATIVE FLOATING PARTICLES (Global) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div style={{ y: yGrains, rotate: rotateGrains }} className="absolute top-20 left-[10%] w-12 h-12 bg-[#8B4513]/5 rounded-full blur-xl" />
        <motion.div style={{ y: yFlourDust }} className="absolute top-60 right-[5%] w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-[100px]" />
        <motion.div style={{ y: yGrains }} className="absolute bottom-40 left-[20%] w-16 h-16 bg-[#8B4513]/5 rounded-full blur-2xl" />
      </div>

      {/* 1. CREATIVE HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <motion.div style={{ opacity: heroOpacity }} className="max-w-4xl relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex justify-center mb-10"
          >
            <div className="flex items-center gap-2 bg-white/40 backdrop-blur-md px-6 py-2 rounded-full border border-[#D4AF37]/20 shadow-xl">
              <MapPin size={14} className="text-red-500 animate-bounce" />
              <span className="uppercase tracking-[0.3em] text-[10px] text-[#3E2723] font-sans font-black">
                Bengaluru's Freshness Revolution
              </span>
            </div>
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-tight tracking-tighter">
            Stop Eating <br />
            <span className="relative inline-block">
              <span className="italic text-[#D4AF37] font-light">"Dead"</span>
              <motion.span 
                initial={{ width: 0 }} 
                animate={{ width: "100%" }} 
                transition={{ delay: 1, duration: 1 }}
                className="absolute -bottom-2 left-0 h-[2px] bg-[#D4AF37]/30" 
              />
            </span> Flour.
          </h1>

          <p className="text-xl md:text-2xl mb-12 font-sans text-gray-700 max-w-2xl mx-auto leading-relaxed font-light">
            We don't stock bags. We <span className="font-bold border-b-2 border-[#D4AF37]">mill your order</span> at ultra-low speeds to keep nutrition alive.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/shop">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#8B4513" }} 
                whileTap={{ scale: 0.95 }} 
                className="bg-[#3E2723] text-[#D4AF37] px-14 py-6 rounded-2xl text-xs font-black uppercase tracking-[0.3em] shadow-2xl transition-all"
              >
                Experience Living Grain
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Floating Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#D4AF37]/50 flex flex-col items-center gap-2"
        >
          <span className="text-[8px] uppercase tracking-widest font-black">Scroll to Mill</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </motion.div>
      </section>

      {/* 2. THE CHAKKI (MILL) SECTION */}
      <section className="py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            
            {/* Left side: The Illustration/Bag */}
            <motion.div 
              whileHover={{ rotate: 0 }}
              initial={{ rotate: -3 }}
              className="relative aspect-square bg-white rounded-[4rem] shadow-2xl p-12 flex items-center justify-center border border-gray-100"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F5F5DC_0%,_transparent_70%)] opacity-50" />
              <img src="/Aarahi Image 2.jpg" alt="Aarahi Atta Bag" className="relative z-10 w-full h-full object-contain drop-shadow-2xl" />
              
              {/* Floating badges around the bag */}
              <motion.div animate={{ y: [0, -10, 0] }} className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex flex-col items-center gap-1 border border-[#D4AF37]/20">
                <Wind className="text-[#D4AF37]" size={20} />
                <span className="text-[8px] font-black uppercase">Cold-Milled</span>
              </motion.div>
            </motion.div>

            {/* Right side: Text */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">Milled at <span className="text-[#D4AF37]">28 RPM.</span></h2>
              <p className="font-sans text-gray-600 text-lg leading-relaxed italic">
                Commercial mills run at high speeds, reaching 90°C. This literally "cooks" the flour before it reaches your tawa. 
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50">
                   <div className="text-3xl font-bold text-[#D4AF37] mb-2 font-sans">30°C</div>
                   <div className="text-[10px] uppercase font-black text-gray-400">Nutrient Preservation</div>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50">
                   <div className="text-3xl font-bold text-[#D4AF37] mb-2 font-sans">100%</div>
                   <div className="text-[10px] uppercase font-black text-gray-400">Whole Grain Fiber</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER MANIFESTO (Visual Polish) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#3E2723] text-[#D4AF37] rounded-[5rem] p-16 md:p-24 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-[#D4AF37]/10 transition-all" />
            <div className="relative z-10 max-w-3xl">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 block opacity-60">Founder's Mission</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-snug">
                "I realized that most diseases start in the gut, and the gut starts with our <span className="italic underline decoration-1">Daily Atta</span>."
              </h2>
              <p className="text-lg text-white/70 font-sans italic mb-12">— Aalekhya Reddy</p>
              <Link to="/about">
                <button className="border border-[#D4AF37] text-[#D4AF37] px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#3E2723] transition-all">
                  Read Our Story
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Nav remain same as your version */}
      <footer className="bg-[#3E2723] text-white py-20 px-6 text-center border-t border-white/5">
        <h2 className="text-4xl font-bold mb-4 italic text-[#D4AF37]">Aarahi</h2>
        <p className="font-sans text-gray-500 mb-8 max-w-lg mx-auto uppercase tracking-widest text-[9px] font-black">21226008000549 • FSSAI Certified Milling</p>
        <div className="pt-8 text-[9px] text-gray-600 uppercase tracking-[0.3em] font-sans">
          © 2026 Aarahi Foods • Made for the health of Bengaluru
        </div>
      </footer>
      {/* 4. MOBILE NAVIGATION BAR (Restoring the App Feel) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 z-[10000] flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:hidden">
        
        <Link to="/" className="flex flex-col items-center text-[#3E2723] transition-transform active:scale-95">
          <HomeIcon size={22} strokeWidth={2.5} />
          <span className="text-[9px] font-bold mt-1 uppercase tracking-tighter">Home</span>
        </Link>
        
        <Link to="/about" className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-all active:scale-95">
          <HelpCircle size={22} />
          <span className="text-[9px] font-bold mt-1 uppercase tracking-tighter text-nowrap">Why Me</span>
        </Link>

        <button className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-all active:scale-95">
          <Search size={22} />
          <span className="text-[9px] font-bold mt-1 uppercase tracking-tighter">Search</span>
        </button>
        
        <Link to="/shop" className="relative bg-[#3E2723] text-[#D4AF37] px-4 py-2 rounded-xl flex flex-col items-center shadow-lg active:scale-95 transition-transform">
          {/* THE BLINKING RED NOTIFICATION DOT */}
          <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-white"></span>
          </span>
          <span className="text-[8px] font-black italic font-serif leading-none uppercase">Aarahi</span>
          <span className="text-[10px] font-black uppercase tracking-tighter">Shop</span>
        </Link>
        
      </div>
    </motion.div>
  );
};

export default Home;