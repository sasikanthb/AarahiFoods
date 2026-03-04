import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin, ShieldCheck, Zap, Star, ArrowRight, Wind, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for 100-crore feel
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#3E2723] flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.h1 
            animate={{ opacity: [0.3, 1, 0.3], letterSpacing: ["0.2em", "0.5em", "0.2em"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-[#D4AF37] font-serif italic text-6xl md:text-8xl mb-6"
          >
            Aarahi
          </motion.h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-[#D4AF37]/30" />
            <p className="text-[#D4AF37] font-sans text-[10px] uppercase tracking-[0.6em] font-black">
              Milling Vitality for Bengaluru
            </p>
            <div className="h-[1px] w-12 bg-[#D4AF37]/30" />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-32">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 bg-[#F5F5DC] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img src="/Aarahi Image 3.jpg" alt="Pure Flour" className="w-full h-full object-cover" />
        </motion.div>

        <div className="max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full border border-[#D4AF37]/20 shadow-2xl mb-12"
          >
            <MapPin size={14} className="text-red-500 animate-bounce" />
            <span className="uppercase tracking-[0.3em] text-[10px] font-sans font-black">Live from our Bengaluru Mill</span>
            <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-7xl md:text-[10rem] font-bold mb-10 leading-[0.85] tracking-tighter uppercase"
          >
            Stop Eating <br />
            <span className="italic text-[#D4AF37] font-light normal-case">"Dead"</span> Flour.
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-3xl mb-16 font-sans text-gray-700 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Aarahi is slow-milled Sharbati Wheat. <br />
            Ground at <span className="text-[#3E2723] font-bold underline decoration-[#D4AF37]">30°C</span> to preserve the life inside the grain.
          </motion.p>

          <Link to="/shop">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#D4AF37", color: "#3E2723" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3E2723] text-white px-20 py-8 rounded-full text-xl font-black shadow-[0_25px_50px_rgba(62,39,35,0.3)] uppercase tracking-widest transition-colors duration-300"
            >
              Claim Freshness Now
            </motion.button>
          </Link>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION: THE TRUST CARDS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            { icon: <Wind className="text-[#D4AF37]" />, title: "Cold-Milled", desc: "Never crosses 28°C. Oils stay intact." },
            { icon: <Award className="text-[#D4AF37]" />, title: "Pure Sharbati", desc: "The gold standard of MP Wheat grains." },
            { icon: <Zap className="text-[#D4AF37]" />, title: "24Hr Fresh", desc: "Milled today, on your tawa tomorrow." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="mb-6 p-4 bg-[#F5F5DC] rounded-2xl inline-block group-hover:bg-[#3E2723] transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 font-sans text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. THE SCIENCE: SPLIT SCREEN MAGIC */}
      <section className="py-32 bg-[#FCF9F2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-[#D4AF37] font-sans font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">The Aarahi Standard</span>
            <h2 className="text-5xl md:text-8xl font-bold mb-10 leading-none tracking-tighter">Vitality <br/>Preserved.</h2>
            
            <div className="space-y-6">
              <div className="p-8 bg-white rounded-[2.5rem] shadow-xl flex items-center gap-8 border-l-[12px] border-[#D4AF37]">
                <div className="text-4xl font-black italic text-[#D4AF37]">28°</div>
                <p className="font-sans font-bold text-[#3E2723]">Traditional Stone Milling. <br/><span className="text-gray-400 font-normal">Keeping life-giving enzymes alive.</span></p>
              </div>
              <div className="p-8 bg-red-50 rounded-[2.5rem] flex items-center gap-8 border-l-[12px] border-red-200 opacity-50">
                <div className="text-4xl font-black italic text-red-300">90°</div>
                <p className="font-sans font-bold text-red-900 leading-tight italic">Industrial High-Heat Rollers. <br/><span className="text-red-400 font-normal">Destroys nutrients instantly.</span></p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: 2, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#D4AF37] blur-[120px] opacity-20" />
            <img src="/Aarahi Image 2.jpg" alt="Aarahi Package" className="relative z-10 w-full rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.2)] border-[20px] border-white" />
          </motion.div>
        </div>
      </section>

      {/* 4. SOCIAL PROOF / FOUNDER NOTE */}
      <section className="py-40 px-6 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="flex justify-center gap-2 mb-10 text-[#D4AF37]">
            <Star fill="#D4AF37" size={20} /><Star fill="#D4AF37" size={20} /><Star fill="#D4AF37" size={20} /><Star fill="#D4AF37" size={20} /><Star fill="#D4AF37" size={20} />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold italic mb-12 tracking-tight">
            "We aren’t a factory. We are a dedicated kitchen for Bengaluru families who refuse to compromise."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-200 mb-6 overflow-hidden border-4 border-[#F5F5DC]">
               <div className="bg-[#D4AF37] w-full h-full flex items-center justify-center text-white text-xs font-black italic uppercase">Portrait</div>
            </div>
            <p className="text-[#3E2723] font-black uppercase tracking-[0.4em] text-xs">Aalekhya Reddy</p>
            <p className="text-[#D4AF37] font-sans text-[10px] font-bold mt-1">FOUNDER, AARAHI FOODS</p>
          </div>
        </motion.div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#3E2723] text-white py-40 px-6 text-center">
        <motion.h2 
          whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
          className="text-8xl md:text-[15rem] font-bold italic text-[#D4AF37] mb-12 tracking-tighter opacity-10 uppercase"
        >
          Aarahi
        </motion.h2>
        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto opacity-50">
          <p className="text-[10px] uppercase tracking-widest font-sans">© 2026 Aarahi Foods • Bengaluru Freshness</p>
          <div className="flex gap-10 text-[10px] uppercase tracking-widest font-sans">
            <Link to="/about">Our Philosophy</Link>
            <Link to="/shop">Store</Link>
            <a href="https://wa.me/919741236515">Contact Support</a>
          </div>
        </div>
      </footer>

      {/* 6. FLOATING PREMIUM MOBILE NAVIGATION */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] z-[9999] md:hidden">
        <div className="bg-white/80 backdrop-blur-2xl border border-white/40 rounded-[2.5rem] px-8 py-5 flex justify-between items-center shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
          
          <Link to="/" className="flex flex-col items-center text-[#3E2723] transition-transform active:scale-75">
            <HomeIcon size={24} strokeWidth={2.5} />
            <span className="text-[9px] font-black mt-1 uppercase tracking-tighter">Home</span>
          </Link>
          
          <Link to="/about" className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-transform active:scale-75">
            <HelpCircle size={24} />
            <span className="text-[9px] font-black mt-1 uppercase tracking-tighter">Why Me</span>
          </Link>

          <button className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-transform active:scale-75">
            <Search size={24} />
            <span className="text-[9px] font-black mt-1 uppercase tracking-tighter">Search</span>
          </button>
          
          <Link to="/shop" className="relative bg-[#3E2723] text-[#D4AF37] px-5 py-3 rounded-2xl flex flex-col items-center shadow-2xl active:scale-90 transition-all">
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
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