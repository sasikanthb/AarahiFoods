import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin, Wind, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- ANIMATION VARIANTS ---
const floatingBag = {
  animate: {
    y: [0, -15, 0],
    rotate: [-1, 1, -1],
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
  const { scrollY } = useScroll();

  // Parallax & Background Transitions
  const bgTransition = useTransform(scrollY, [0, 800, 1500], ["#F5F5DC", "#FFFDF5", "#FFFFFF"]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#3E2723] flex flex-col items-center justify-center overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <motion.h2 
            animate={{ letterSpacing: ["0.1em", "0.4em", "0.1em"], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#D4AF37] font-serif italic text-5xl md:text-7xl mb-6 tracking-tighter"
          >
            Aarahi
          </motion.h2>
          <div className="flex items-center gap-4 justify-center">
            <span className="h-[1px] w-12 bg-[#D4AF37]/20"></span>
            <motion.p 
              className="text-[#D4AF37]/80 font-sans text-[10px] uppercase tracking-[0.6em] font-black"
            >
              Milling Fresh for Bengaluru
            </motion.p>
            <span className="h-[1px] w-12 bg-[#D4AF37]/20"></span>
          </div>
        </motion.div>
        <motion.div 
          initial={{ width: 0 }} 
          animate={{ width: "160px" }} 
          transition={{ duration: 1.5, ease: "easeInOut" }} 
          className="mt-12 h-[1px] bg-[#D4AF37] shadow-[0_0_20px_#D4AF37]" 
        />
      </div>
    );
  }

  return (
    <motion.div style={{ backgroundColor: bgTransition }} className="min-h-screen text-[#3E2723] font-serif overflow-x-hidden pb-24 transition-colors duration-1000">
      
      {/* 1. HERO SECTION (5-4-9 CONCEPT) */}
      <section className="relative h-[95vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <motion.div style={{ opacity: heroOpacity }} className="max-w-4xl relative z-10">
          
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-[#D4AF37]/20 shadow-sm">
              <MapPin size={14} className="text-red-500 animate-pulse" />
              <span className="uppercase tracking-[0.2em] text-[9px] text-[#3E2723] font-sans font-black">
                Milled in Bengaluru • Delivered within 24 Hours
              </span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[9px] font-sans font-bold text-green-700 uppercase">Live Milling</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-tight tracking-tighter">
            Stop Eating <br />
            <span className="italic text-[#D4AF37] font-light">"Dead"</span> Flour.
          </h1>

          <p className="text-xl md:text-2xl mb-12 font-sans text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Slow-milled Sharbati Wheat & Sprouted Ragi. <br />
            Ground at 30°C to protect natural nutrition.
          </p>

          <Link to="/shop">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#3E2723] text-[#D4AF37] px-14 py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl">
              Claim Founder's Kit
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* 2. THE SCIENCE SECTION */}
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723]">The Science of Freshness</h2>
            <div className="space-y-8 font-sans">
              <motion.div variants={cardHover} initial="initial" whileHover="hover" className="border-l-4 border-red-200 pl-8 p-6 rounded-r-2xl bg-white/40 transition-all cursor-default">
                <h4 className="text-red-800 font-bold uppercase text-[10px] tracking-[0.2em] mb-2 font-black">Industrial Flour</h4>
                <p className="text-gray-500 text-sm italic">Packaged atta is produced using high-speed mills that reach 90°C, destroying nutrients.</p>
              </motion.div>
              <motion.div variants={cardHover} initial="initial" whileHover="hover" className="border-l-4 border-[#D4AF37] pl-8 bg-white py-8 rounded-r-[2rem] shadow-xl border border-transparent">
                <h4 className="text-[#D4AF37] font-bold uppercase text-[10px] tracking-[0.2em] mb-2 font-black">Aarahi Fresh</h4>
                <p className="text-[#3E2723] font-bold">Stone-milled at 28 RPM (Ultra-slow) to keep the grain alive and the nutrition intact.</p>
              </motion.div>
            </div>
          </div>
          <motion.div variants={floatingBag} animate="animate" className="flex justify-center relative">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4AF37_0%,_transparent_70%)] opacity-20 blur-3xl" />
             <img src="/Aarahi Image 2.jpg" alt="Aarahi Atta Bag" className="relative z-10 w-full max-w-sm rounded-[3rem] shadow-2xl border-8 border-white rotate-2" />
          </motion.div>
        </div>
      </section>

      {/* 3. FOUNDER MANIFESTO */}
      <section className="py-24 relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div whileHover={{ scale: 1.01 }} className="bg-[#F5F5DC] rounded-[4rem] p-12 md:p-20 relative flex flex-col md:flex-row items-center gap-12 border border-[#D4AF37]/20 shadow-sm">
            <div className="md:w-3/5 text-left">
              <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-widest text-xs mb-4 block">Founder's Note</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-6 leading-tight italic">
                "I couldn't find flour I trusted for my family's health. I decided to start milling it myself."
              </h2>
              <p className="text-gray-700 font-sans italic mb-8 text-lg leading-relaxed">
                "Aarahi Foods began with a simple belief that families deserve fresh, honest food. Every bag is milled with maternal care and uncompromising honesty."
              </p>
              <div>
                <div className="text-[#3E2723] font-bold text-2xl">Aalekhya Reddy</div>
                <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-bold mt-1">Founder, Aarahi Foods</div>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
               <div className="w-64 h-64 rounded-full bg-white border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center grayscale text-gray-300 italic text-xs">
                 PHOTO
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. THE TIMELINE (24H LOOP) */}
      <section className="py-24 relative z-10 bg-white/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#3E2723] mb-20 italic">The 24-Hour Freshness Loop</h2>
          <div className="relative text-left">
            <div className="absolute left-5 md:left-1/2 h-full w-0.5 bg-[#D4AF37]/30 -translate-x-1/2"></div>
            <div className="space-y-20">
              {[
                { time: "05 AM", title: "The Selection", desc: "We select only AAA-grade grains from local farmers." },
                { time: "09 AM", title: "Cold-Milling", desc: "Stone-milling at 28 RPM to preserve natural oils." },
                { time: "04 PM", title: "Final Run", desc: "Freshly packed and dispatched across Bengaluru." }
              ].map((step, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex w-full md:w-1/2 justify-start ${index % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'}`}>
                    <div className="w-full md:w-80 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 z-10">
                      <div className="font-bold text-[#3E2723] mb-2 font-serif text-xl uppercase tracking-tighter">{step.time}: {step.title}</div>
                      <p className="text-sm text-gray-500 font-sans leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-5 md:left-1/2 w-10 h-10 bg-[#FFFDF5] border-2 border-[#D4AF37] rounded-full flex items-center justify-center font-bold text-[#D4AF37] text-xs -translate-x-1/2 z-20 shadow-sm">{index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#3E2723] text-white py-24 px-6 text-center border-t border-white/5">
        <h2 className="text-4xl font-bold mb-4 italic text-[#D4AF37]">Aarahi</h2>
        <p className="font-sans text-gray-500 mb-8 max-w-lg mx-auto uppercase tracking-widest text-[9px] font-black">21226008000549 • FSSAI Certified Milling</p>
        <div className="pt-8 border-t border-white/5 text-[9px] text-gray-600 uppercase tracking-widest font-sans">© 2026 Aarahi Foods • Bengaluru</div>
      </footer>

    </motion.div>
  );
};

export default Home;