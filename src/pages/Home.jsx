import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

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
      <div className="h-screen w-full bg-[#FFFDF5] flex items-center justify-center font-serif italic text-[#D4AF37] text-2xl">
        Milling Freshness for Bangalore...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-32">
      
      {/* 1. CREATIVE LOGO (THE PRESTIGE BADGE) */}
      <nav className="relative z-50 flex justify-center pt-12 pb-6">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative">
          <div className="bg-[#3E2723] border-[3px] border-[#C5A059] px-10 py-4 rounded-[2rem] shadow-2xl flex flex-col items-center min-w-[180px]">
            <h1 className="text-[#D4AF37] text-4xl font-black tracking-tighter leading-none mb-1">AARAHI</h1>
            <div className="flex items-center gap-2 w-full">
              <div className="h-[1px] bg-[#D4AF37]/40 flex-grow"></div>
              <span className="text-[#D4AF37] text-[8px] font-sans font-black uppercase tracking-[0.5em]">FOODS</span>
              <div className="h-[1px] bg-[#D4AF37]/40 flex-grow"></div>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} className="absolute inset-0 z-0">
          <img src="/Aarahi Image 3.jpg" alt="Background" className="w-full h-full object-cover" />
        </motion.div>

        <div className="max-w-4xl relative z-10">
          <span className="uppercase tracking-[0.3em] text-[10px] mb-6 block text-[#8B4513] font-sans font-bold">
            Bangalore Food Startup • Delivered in 24 Hours
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Stop Eating <br /><span className="italic text-[#D4AF37] font-light">"Dead"</span> Flour.
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-sans text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Slow-milled Sharbati Wheat. Ground at 30°C to preserve life. <br />
            Traditional stone-milling meets modern purity.
          </p>
          <motion.a 
            href="https://wa.me/919741236515?text=Hi%20Aarahi%20Foods!%20I'd%20like%20to%20order%20fresh%20flour."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-[#3E2723] text-white px-12 py-5 rounded-full text-lg font-bold shadow-xl font-sans inline-flex items-center gap-3"
          >
            Order Fresh <MessageCircle size={20} />
          </motion.a>
        </div>
      </section>

      {/* 3. THE SCIENCE */}
      <section className="py-24 bg-[#FCF9F2]">
        <div className="max-w-6xl mx-auto px-6 text-left">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl font-bold font-serif italic text-[#3E2723]">The Science of Freshness</h2>
              <div className="space-y-6 font-sans">
                <motion.div variants={cardHover} initial="initial" whileHover="hover" className="border-l-4 border-red-200 pl-8 p-6 bg-white/30 rounded-r-2xl">
                  <h4 className="text-red-800 font-bold uppercase text-[10px] tracking-widest mb-1">Industrial Flour</h4>
                  <p className="font-bold italic text-[#3E2723]">Milled at 90°C</p>
                  <p className="text-gray-500 text-sm mt-2">High-speed rollers burn the wheat germ. Built for Shelf Life, not Your Life.</p>
                </motion.div>
                <motion.div variants={cardHover} initial="initial" whileHover="hover" className="border-l-4 border-[#D4AF37] pl-8 p-6 bg-white rounded-r-2xl shadow-xl">
                  <h4 className="text-[#D4AF37] font-bold uppercase text-[10px] tracking-widest mb-1">Aarahi Fresh</h4>
                  <p className="font-bold italic text-[#3E2723]">Stone-Milled at 28°C</p>
                  <p className="text-[#3E2723]/80 text-sm mt-2 font-sans">Slow-milled to keep nutrition alive. Sun-soaked MP Sharbati. Zero chemicals.</p>
                </motion.div>
              </div>
            </div>
            <motion.div variants={floating} animate="animate" className="flex justify-center">
              <img src="/Aarahi Image 2.jpg" alt="Aarahi Bag" className="w-full max-w-sm rounded-[3rem] shadow-2xl rotate-2" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER MANIFESTO */}
      <section className="py-24 bg-white border-y border-gray-50 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#F5F5DC] rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 border border-[#D4AF37]/20">
            <div className="md:w-3/5">
              <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-widest text-xs mb-4 block">Founder's Note</span>
              <h2 className="text-4xl font-bold text-[#3E2723] mb-6 leading-tight italic">
                "I couldn't find flour I trusted for my family's health. I decided to fix the supply chain myself."
              </h2>
              <p className="text-gray-700 font-sans italic mb-8 text-lg">
                "We aren't a factory; we are a dedicated kitchen for Bangalore families. Every bag is milled with care and precision."
              </p>
              <div>
                <div className="text-[#3E2723] font-bold text-2xl">Aalekhya Reddy</div>
                <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-bold mt-1">Founder, Aarahi Foods</div>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
               <div className="w-72 h-72 rounded-full bg-white border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden">
                 <span className="text-gray-300 italic text-sm">Founder Photo</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 24-HOUR TIMELINE */}
      <section className="py-24 bg-[#FCF9F2] text-left">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20 italic">The 24-Hour Obsession</h2>
          <div className="relative">
            <div className="absolute left-5 md:left-1/2 h-full w-0.5 bg-[#D4AF37]/30 -translate-x-1/2"></div>
            <div className="space-y-24">
              {[
                { time: "05", title: "The Selection", desc: "Inspecting premium MP Sharbati for moisture and purity." },
                { time: "09", title: "Cold-Milling", desc: "Stone chakki starts. We ensure it never crosses 30°C." },
                { time: "04", title: "Delivery Run", desc: "Packed and dispatched across Bangalore immediately." }
              ].map((step, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex w-full md:w-1/2 justify-start ${index % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'}`}>
                    <div className="w-full md:w-80 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 z-10">
                      <div className="font-bold text-[#3E2723] mb-2 text-xl italic">{step.time} AM: {step.title}</div>
                      <p className="text-sm text-gray-500 font-sans">{step.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-5 md:left-1/2 w-12 h-12 bg-[#FFFDF5] border-2 border-[#D4AF37] rounded-full flex items-center justify-center font-bold text-[#D4AF37] -translate-x-1/2 z-20 shadow-sm">{step.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHATSAPP LIVE STATUS BAR */}
      <motion.a 
        href="https://wa.me/919741236515" 
        target="_blank"
        className="fixed bottom-28 right-6 z-[10000] flex flex-col items-end gap-2"
      >
        <div className="bg-white px-3 py-1 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Online Now</span>
        </div>
        <div className="bg-[#25D366] text-white p-4 rounded-2xl shadow-2xl flex items-center justify-center active:scale-90 transition-transform">
          <MessageCircle size={28} />
        </div>
      </motion.a>

    </div>
  );
};

export default Home;