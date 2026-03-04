import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin, ShieldCheck, Zap, Star, Wind, ArrowDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { scrollY } = useScroll();
  
  // High-end parallax: The Hero text moves slower than the background
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => { 
    const timer = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timer); 
  }, []);

  if (loading) return (
    <div className="h-screen w-full bg-[#3E2723] flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.h1 
          animate={{ letterSpacing: ["0.2em", "0.5em", "0.2em"] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-[#D4AF37] font-serif italic text-7xl mb-6"
        >
          Aarahi
        </motion.h1>
        <p className="text-[#D4AF37]/40 font-sans text-[10px] uppercase tracking-[0.6em] font-black">Crafting Vitality</p>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-32">
      
      {/* 1. THE CINEMATIC OPENER */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 bg-[#F5F5DC] overflow-hidden">
        {/* GRAIN OVERLAY FOR TEXTURE */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-20"></div>
        
        <motion.div style={{ opacity }} className="absolute inset-0 z-0 scale-110">
          <img src="/Aarahi Image 3.jpg" className="w-full h-full object-cover" alt="Pure Flour" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FFFDF5]"></div>
        </motion.div>
        
        <motion.div style={{ y: y1 }} className="max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-4 bg-[#3E2723] text-[#D4AF37] px-8 py-3 rounded-full shadow-2xl mb-12 border border-[#D4AF37]/30"
          >
            <MapPin size={14} className="animate-pulse" />
            <span className="uppercase tracking-[0.4em] text-[10px] font-sans font-black text-nowrap">Bengaluru's Only Cold-Mill</span>
          </motion.div>
          
          <h1 className="text-[15vw] md:text-[12rem] font-bold mb-8 leading-[0.75] tracking-tighter uppercase inline-block">
            LIVING <br />
            <span className="italic text-[#D4AF37] font-light normal-case">Flour.</span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.8 }} 
            className="text-2xl md:text-4xl mb-16 font-sans text-gray-800 max-w-4xl mx-auto leading-tight font-light tracking-tight"
          >
            Stop eating industrial "dead" starch. <br />
            Stone-milled at <span className="font-bold underline decoration-[#D4AF37] decoration-4">28°C</span> to protect the soul of the grain.
          </motion.p>
          
          <Link to="/shop">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#D4AF37", color: "#3E2723" }} 
              whileTap={{ scale: 0.95 }} 
              className="bg-[#3E2723] text-white px-24 py-10 rounded-full text-2xl font-black shadow-[0_40px_80px_rgba(62,39,35,0.4)] uppercase tracking-[0.2em] transition-all duration-500"
            >
              Shop The Batch
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* 2. THE SCIENCE (HIGH-END GRID) */}
      <section className="py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-32 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[#D4AF37] font-sans font-black uppercase tracking-[0.6em] text-[12px] mb-8 block">Laboratory Verified</span>
            <h2 className="text-6xl md:text-9xl font-bold mb-12 leading-none tracking-tighter uppercase">Freshness <br/>Defined.</h2>
            
            <div className="space-y-12">
              <div className="group cursor-default">
                <div className="flex items-center gap-6 mb-4">
                  <div className="w-12 h-12 bg-[#F5F5DC] rounded-full flex items-center justify-center text-[#D4AF37] group-hover:bg-[#3E2723] transition-all">
                    <Wind size={20} />
                  </div>
                  <h4 className="text-2xl font-bold uppercase tracking-tight">Cold-Stone Process</h4>
                </div>
                <p className="text-gray-500 font-sans text-lg border-l-2 border-gray-100 pl-8 ml-6 leading-relaxed">Industrial mills burn nutrients at 90°C. We maintain 28°C to keep enzymes alive.</p>
              </div>
              
              <div className="group cursor-default">
                <div className="flex items-center gap-6 mb-4">
                  <div className="w-12 h-12 bg-[#F5F5DC] rounded-full flex items-center justify-center text-[#D4AF37] group-hover:bg-[#3E2723] transition-all">
                    <Zap size={20} />
                  </div>
                  <h4 className="text-2xl font-bold uppercase tracking-tight">24-Hour Pulse</h4>
                </div>
                <p className="text-gray-500 font-sans text-lg border-l-2 border-gray-100 pl-8 ml-6 leading-relaxed">Milled on order. Packed immediately. On your tawa while the vitality is peaking.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }} 
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }} 
            viewport={{ once: true }} 
            className="relative"
          >
            <div className="absolute -inset-10 bg-[#D4AF37]/10 blur-[100px] rounded-full"></div>
            <img src="/Aarahi Image 2.jpg" alt="Aarahi Package" className="relative z-10 w-full rounded-[5rem] shadow-[0_60px_120px_rgba(0,0,0,0.2)] border-[25px] border-white" />
          </motion.div>
        </div>
      </section>

      {/* 3. THE FOUNDER'S SIGNATURE SECTION */}
      <section className="py-40 bg-[#3E2723] text-[#D4AF37] px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16">
            <Star fill="#D4AF37" className="mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-bold italic mb-16 leading-[1.2] tracking-tight">
            "I couldn't find flour I trusted for my family's health. So I brought back the purity of the olden days for yours."
          </h2>
          <div className="h-[1px] w-40 bg-[#D4AF37]/30 mx-auto mb-10"></div>
          <p className="text-xl font-black uppercase tracking-[0.5em] mb-2">Aalekhya Reddy</p>
          <p className="text-[10px] font-sans font-bold opacity-60">FOUNDER & GUARDIAN OF QUALITY</p>
        </div>
      </section>

      {/* 4. THE 24-HOUR TIMELINE (APP STYLE) */}
      <section className="py-40 bg-[#FFFDF5] px-6 text-center">
        <span className="text-gray-400 font-sans font-black uppercase tracking-[0.6em] text-[12px] mb-8 block">Our Obsession</span>
        <h2 className="text-7xl md:text-9xl font-bold mb-32 tracking-tighter uppercase">The Cycle.</h2>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 text-left">
          {[
            { time: "05:00", label: "Harvest Selection", desc: "Picking the finest Sharbati wheat grains from MP's black soil belts." },
            { time: "09:00", label: "Stone Milling", desc: "Traditional stones start their slow, cool journey. Monitored for heat." },
            { time: "16:00", label: "Bengaluru Dispatch", desc: "Packed in breathable bags and rushed to your home within hours." }
          ].map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              className="relative p-12 bg-white rounded-[4rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="text-5xl font-black italic text-[#D4AF37]/20 mb-6">{step.time}</div>
              <h4 className="text-2xl font-bold mb-4 uppercase tracking-tight">{step.label}</h4>
              <p className="text-gray-500 font-sans leading-relaxed">{step.desc}</p>
              <ChevronRight className="absolute bottom-10 right-10 text-[#D4AF37]" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER (LUXURY BRANDING) */}
      <footer className="bg-[#FFFDF5] border-t border-gray-100 py-40 px-6 text-center">
        <motion.h2 whileInView={{ opacity: [0, 1] }} className="text-[20vw] font-black italic text-[#D4AF37]/10 uppercase leading-none select-none">Aarahi</motion.h2>
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-10 opacity-40 font-sans font-bold text-[10px] uppercase tracking-[0.4em]">
          <p>© 2026 Aarahi Foods • Bengaluru Freshness</p>
          <div className="flex gap-12">
            <Link to="/about">Why Me</Link>
            <Link to="/shop">Shop</Link>
            <a href="https://wa.me/919741236515">WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* 6. THE FLOATING LUXURY NAV */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[450px] z-[9999]">
        <div className="bg-[#3E2723]/95 backdrop-blur-3xl border border-white/10 rounded-[3rem] px-10 py-6 flex justify-between items-center shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
          <Link to="/" className="flex flex-col items-center text-[#D4AF37]"><HomeIcon size={24} strokeWidth={2.5} /><span className="text-[8px] font-black mt-2 uppercase">Home</span></Link>
          <Link to="/about" className="flex flex-col items-center text-white/40"><HelpCircle size={24} /><span className="text-[8px] font-black mt-2 uppercase text-nowrap">Why Me</span></Link>
          <button className="flex flex-col items-center text-white/40"><Search size={24} /><span className="text-[8px] font-black mt-2 uppercase text-nowrap">Search</span></button>
          <Link to="/shop" className="relative bg-[#D4AF37] text-[#3E2723] px-6 py-4 rounded-[2rem] flex flex-col items-center shadow-2xl transition-all active:scale-90">
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative h-4 w-4 rounded-full bg-red-500 border-2 border-white"></span>
            </span>
            <span className="text-[8px] font-black italic font-serif leading-none uppercase">Aarahi</span>
            <span className="text-[12px] font-black uppercase tracking-tighter">Shop</span>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;