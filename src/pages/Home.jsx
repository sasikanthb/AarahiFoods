import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin, ShieldCheck, Zap, Wind, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#3E2723] flex flex-col items-center justify-center overflow-hidden">
        <motion.h2 
          animate={{ opacity: [0.5, 1, 0.5] }} 
          transition={{ repeat: Infinity, duration: 2 }} 
          className="text-[#D4AF37] font-serif italic text-4xl md:text-6xl mb-4 tracking-tighter"
        >
          Aarahi
        </motion.h2>
        <motion.p 
          animate={{ letterSpacing: ["0.2em", "0.5em", "0.2em"] }} 
          transition={{ repeat: Infinity, duration: 3 }} 
          className="text-[#D4AF37]/80 font-sans text-[10px] uppercase tracking-[0.5em] font-black"
        >
          Milling Fresh for Bengaluru
        </motion.p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[95vh] flex items-center justify-center text-center px-6 bg-[#F5F5DC] overflow-hidden border-b border-[#D4AF37]/10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} className="absolute inset-0 z-0">
          <img src="/Aarahi Image 3.jpg" alt="Fresh Flour" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl relative z-10 px-4">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full border border-[#D4AF37]/30 shadow-xl">
              <MapPin size={14} className="text-red-500 animate-pulse" />
              <span className="uppercase tracking-[0.2em] text-[10px] text-[#3E2723] font-sans font-black">Bengaluru Live Milling</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative h-2 w-2 rounded-full bg-green-500"></span>
              </span>
            </div>
          </div>

          <h1 className="text-6xl md:text-[9rem] font-bold mb-10 leading-[0.85] tracking-tighter uppercase">
            Stop Eating <br /><span className="italic text-[#D4AF37] font-light normal-case">"Dead"</span> Flour.
          </h1>
          
          <div className="space-y-6 mb-12">
            <p className="text-2xl md:text-4xl font-sans text-[#3E2723] leading-tight font-medium tracking-tight">
              Slow-milled <span className="text-[#D4AF37] italic">Sharbati Wheat</span>. <br/>
              Ground at <span className="underline decoration-[#D4AF37] decoration-4 underline-offset-8">30°C</span> to preserve life.
            </p>
            <p className="text-lg md:text-xl font-sans text-gray-500 italic max-w-xl mx-auto leading-relaxed">
              Maternal care meets traditional stone-milling.
            </p>
          </div>

          <Link to="/shop">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3E2723] text-white px-20 py-6 rounded-full text-xl font-black shadow-2xl uppercase tracking-widest border-2 border-[#3E2723] transition-all"
            >
              Order Fresh
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* 2. THE SCIENCE COMPARISON */}
      <section className="py-32 bg-[#FCF9F2]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeInUp} className="text-left space-y-10">
            <h2 className="text-4xl md:text-7xl font-bold text-[#3E2723] font-serif leading-none uppercase tracking-tighter">The Science <br/>of Freshness</h2>
            <div className="space-y-6">
              <div className="p-6 border-l-4 border-red-200 bg-white/50">
                <h4 className="text-red-800 font-bold uppercase text-[10px] tracking-widest mb-1">Industrial Roller Flour</h4>
                <p className="text-3xl font-bold text-gray-400 tracking-tight">90°C <span className="text-sm font-normal italic">— Nutrients Burnt</span></p>
              </div>
              
              <div className="p-8 border-l-8 border-[#D4AF37] bg-white shadow-2xl rounded-r-3xl">
                <h4 className="text-[#D4AF37] font-bold uppercase text-[10px] tracking-widest mb-1 font-black">Aarahi Cold-Milled</h4>
                <p className="text-5xl font-bold text-[#3E2723] tracking-tight">30°C <span className="text-sm font-normal italic">— Living Nutrition</span></p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={floating} animate="animate" className="flex justify-center">
             <div className="relative p-6 bg-white rounded-[4rem] shadow-2xl rotate-2 max-w-md border border-[#F3E5AB]">
                <img src="/Aarahi Image 2.jpg" alt="Aarahi Package" className="w-full rounded-[3.5rem]" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3. FOUNDER MANIFESTO */}
      <section className="py-32 bg-white border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="bg-[#F5F5DC] rounded-[4rem] p-12 md:p-24 relative flex flex-col md:flex-row items-center gap-16 border border-[#D4AF37]/20 shadow-inner">
            <div className="md:w-3/5 text-left">
              <ShieldCheck className="text-[#D4AF37] mb-6" size={40} />
              <h2 className="text-4xl md:text-6xl font-bold text-[#3E2723] mb-8 leading-tight italic tracking-tight">
                "I started Aarahi to bring back the purity our kitchens once had. Every bag is milled with maternal care."
              </h2>
              <div className="space-y-2">
                <div className="text-[#3E2723] font-bold text-3xl">Aalekhya Reddy</div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-sans font-black">Founder, Aarahi Foods</div>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
               <div className="w-72 h-72 rounded-full bg-white border-[12px] border-white shadow-2xl overflow-hidden grayscale">
                 <div className="bg-gray-100 h-full w-full flex items-center justify-center text-gray-300 italic text-sm uppercase font-black">Portrait</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. THE 24-HOUR OBSESSION TIMELINE */}
      <section className="py-32 bg-[#FCF9F2] px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-[#3E2723] mb-24 italic font-serif tracking-tighter uppercase">The 24-Hour Obsession</h2>
          <div className="space-y-12">
            {[
              { time: "05 AM", icon: <Star size={20}/>, h: "Selection", d: "Inspecting premium MP Sharbati for moisture and soul." },
              { time: "09 AM", icon: <Wind size={20}/>, h: "Milling", d: "Grinding at 28°C to keep nutrients active and alive." },
              { time: "04 PM", icon: <Zap size={20}/>, h: "Delivery", d: "Delivered across Bengaluru while the vitality is peaking." }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-10 bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 text-left hover:shadow-xl transition-all"
              >
                <div className="text-5xl font-black text-[#D4AF37] italic opacity-40">{s.time}</div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {s.icon}
                    <h4 className="font-sans font-black text-xs tracking-widest text-[#3E2723] uppercase">{s.h}</h4>
                  </div>
                  <p className="text-gray-500 text-lg leading-relaxed font-light">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#3E2723] text-white py-32 text-center px-6">
        <motion.h2 whileInView={{ opacity: [0, 1] }} className="text-8xl md:text-[15rem] font-bold italic text-[#D4AF37] mb-8 opacity-10 select-none uppercase leading-none">Aarahi</motion.h2>
        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-widest font-sans opacity-50">© 2026 Aarahi Foods • Bengaluru Freshness</p>
          <div className="flex gap-10 text-[10px] uppercase tracking-widest font-sans opacity-50">
            <Link to="/about">Why Me</Link>
            <Link to="/shop">Shop</Link>
            <a href="https://wa.me/919741236515">WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* 6. SYNCED MOBILE NAVIGATION */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] z-[9999] md:hidden">
        <div className="bg-white/90 backdrop-blur-2xl border border-white/40 rounded-[3.5rem] px-8 py-5 flex justify-between items-center shadow-[0_25px_50px_rgba(0,0,0,0.15)]">
          <Link to="/" className="flex flex-col items-center text-[#3E2723] transition-transform active:scale-90">
            <HomeIcon size={24} strokeWidth={2.5} />
            <span className="text-[9px] font-black mt-1 uppercase tracking-tighter">Home</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-transform active:scale-90">
            <HelpCircle size={24} />
            <span className="text-[9px] font-black mt-1 uppercase text-nowrap">Why Me</span>
          </Link>
          <button className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-transform active:scale-90">
            <Search size={24} />
            <span className="text-[9px] font-black mt-1 uppercase">Search</span>
          </button>
          <Link to="/shop" className="relative bg-[#3E2723] text-[#D4AF37] px-5 py-3 rounded-2xl flex flex-col items-center shadow-2xl active:scale-90 transition-all">
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative h-4 w-4 rounded-full bg-red-500 border-2 border-white"></span>
            </span>
            <span className="text-[8px] font-black italic font-serif leading-none uppercase tracking-tighter">Aarahi</span>
            <span className="text-[11px] font-black uppercase tracking-tighter">Shop</span>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;