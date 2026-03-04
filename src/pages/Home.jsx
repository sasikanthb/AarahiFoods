import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin, Wind, ShieldCheck, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for the Hero Image
  const yRange = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#3E2723] flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.h2 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[#D4AF37] font-serif italic text-6xl mb-6 tracking-tighter"
          >
            Aarahi
          </motion.h2>
          <motion.p 
            animate={{ opacity: [0.4, 1, 0.4] }}
            className="text-[#D4AF37]/60 font-sans text-[10px] uppercase tracking-[0.6em] font-black"
          >
            Milling Fresh for Bengaluru
          </motion.p>
        </motion.div>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{ duration: 1 }}
          className="mt-12 h-[1px] bg-[#D4AF37]/40"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-32">
      
      {/* 1. CINEMATIC HERO (PARALLAX) */}
      <section className="relative h-[95vh] flex items-center justify-center text-center px-6 bg-[#F5F5DC] overflow-hidden">
        <motion.div style={{ y: yRange }} className="absolute inset-0 z-0 opacity-20 scale-110">
          <img src="/Aarahi Image 3.jpg" alt="Fresh Flour" className="w-full h-full object-cover" />
        </motion.div>

        {/* LIVE STATUS TICKER */}
        <div className="absolute top-10 w-full flex justify-center z-20">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-xl border border-[#D4AF37]/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[9px] font-sans font-black uppercase tracking-[0.3em]">Live Mill: Batch 04 in Progress</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl relative z-10">
          <h1 className="text-7xl md:text-[10rem] font-bold mb-8 leading-[0.8] tracking-tighter uppercase">
            Stop Eating <br />
            <span className="italic text-[#D4AF37] font-light normal-case">"Dead"</span> Flour.
          </h1>
          <p className="text-xl md:text-3xl mb-16 font-sans text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Stone-milled at 28°C to keep nutrients alive. <br />
            Delivered fresh across <span className="text-[#3E2723] font-bold">Bengaluru</span> in 24 hours.
          </p>
          <Link to="/shop">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3E2723] text-white px-20 py-7 rounded-full text-xl font-black shadow-2xl uppercase tracking-[0.2em] font-sans"
            >
              Order Fresh
            </motion.button>
          </Link>
        </motion.div>
        
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 opacity-20">
          <ArrowDown size={30} />
        </motion.div>
      </section>

      {/* 2. THE SCIENCE (HIGH-END CONTRAST) */}
      <section className="py-40 bg-[#FCF9F2]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">The Science <br/>of Living.</h2>
            <div className="space-y-10">
              <div className="border-l-4 border-red-200 pl-10 py-2">
                <p className="text-[10px] font-black uppercase text-red-300 tracking-[0.5em] mb-4">Industrial Roller</p>
                <p className="text-3xl text-gray-400 italic font-light leading-snug">90°C heat kills the nutrients. You're eating empty starch.</p>
              </div>
              [Image of stone mill vs roller mill nutrition]
              <motion.div whileHover={{ x: 15 }} className="border-l-[12px] border-[#D4AF37] pl-10 py-10 bg-white rounded-r-[4rem] shadow-2xl transition-all">
                <p className="text-[10px] font-black uppercase text-[#D4AF37] tracking-[0.5em] mb-4">Aarahi Cold-Mill</p>
                <p className="text-4xl font-black leading-tight">28°C Stone Ground. <br/>Vitality preserved.</p>
              </motion.div>
            </div>
          </div>
          <motion.div whileHover={{ rotate: 2 }} className="relative group">
             <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full blur-3xl scale-125 opacity-0 group-hover:opacity-100 transition-opacity" />
             <img src="/Aarahi Image 2.jpg" alt="Aarahi Bag" className="relative w-full max-w-md mx-auto rounded-[5rem] shadow-2xl border-[15px] border-white" />
          </motion.div>
        </div>
      </section>

      {/* 3. FOUNDER MANIFESTO (TRUST & EMOTION) */}
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
                <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-[0.6em] text-[12px]">Ancestral Trust</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-[#3E2723] mb-12 leading-[1.1] italic tracking-tighter">
                "I started Aarahi to bring back the purity our families deserve."
              </h2>
              <p className="text-3xl text-gray-700 font-sans italic mb-12 leading-relaxed font-light italic">"Every bag is treated with the same care as the food I put on my own dining table."</p>
              <div className="text-[#3E2723] font-black text-4xl uppercase tracking-tighter">Aalekhya Reddy</div>
              <div className="text-[12px] uppercase tracking-[0.6em] text-[#D4AF37] font-sans font-bold mt-2">Founder, Aarahi Foods</div>
            </div>
            <div className="md:w-2/5 flex justify-center">
               <div className="w-80 h-80 rounded-full bg-white border-[16px] border-white shadow-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                 <div className="bg-gray-100 h-full w-full flex items-center justify-center text-gray-300 italic text-sm font-black uppercase">Portrait</div>
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
              { time: "09", title: "STONE MILLING", desc: "Grinding at 28°C to keep nutrients active and alive." },
              { time: "04", title: "DELIVERY", desc: "Delivered across Bengaluru while the vitality is peaking." }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                className="flex flex-col md:flex-row items-center gap-24 group"
              >
                <div className="text-[18rem] font-black text-[#D4AF37]/10 italic leading-none group-hover:text-[#D4AF37]/25 transition-all duration-700 select-none">{step.time}</div>
                <div>
                  <h4 className="font-sans font-black text-[10px] tracking-[0.6em] text-[#D4AF37] mb-6 uppercase">{step.title}</h4>
                  <p className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER (LUXURY EXIT) */}
      <footer className="bg-[#3E2723] text-white py-48 text-center px-6">
        <motion.h2 whileHover={{ scale: 1.02 }} className="text-8xl md:text-[15rem] font-black italic text-[#D4AF37] mb-12 uppercase tracking-tighter leading-none">Aarahi</motion.h2>
        <p className="text-[10px] uppercase tracking-[1.5em] opacity-30 font-sans">Milled Fresh in Bengaluru</p>
      </footer>

      {/* 6. SYNCED MOBILE NAVIGATION (STUNNING FLOATING STYLE) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[92%] z-[9999] md:hidden">
        <div className="bg-white/90 backdrop-blur-2xl border border-white/40 rounded-[3rem] px-8 py-5 flex justify-between items-center shadow-[0_30px_60px_rgba(0,0,0,0.18)]">
          
          <Link to="/" className="flex flex-col items-center text-[#3E2723]">
            <HomeIcon size={24} strokeWidth={2.5} />
            <span className="text-[9px] font-black mt-2 uppercase tracking-tighter">Home</span>
          </Link>
          
          <Link to="/about" className="flex flex-col items-center text-gray-400">
            <HelpCircle size={24} />
            <span className="text-[9px] font-black mt-2 uppercase tracking-tighter text-nowrap">Why Me</span>
          </Link>
          
          <button className="flex flex-col items-center text-gray-400">
            <Search size={24} />
            <span className="text-[9px] font-black mt-2 uppercase tracking-tighter">Search</span>
          </button>

          <Link to="/shop" className="relative bg-[#3E2723] text-[#D4AF37] px-5 py-3 rounded-[1.5rem] flex flex-col items-center shadow-lg active:scale-90 transition-transform">
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
            <span className="text-[8px] font-black italic font-serif leading-none uppercase tracking-tighter">Aarahi</span>
            <span className="text-[10px] font-black uppercase tracking-tighter">Shop</span>
          </Link>
          
        </div>
      </div>

    </div>
  );
};

export default Home;