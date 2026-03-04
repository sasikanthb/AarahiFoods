import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin } from 'lucide-react';
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

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#FFFDF5] flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-[#D4AF37] font-serif italic text-2xl"
        >
          Milling Freshness for Bangalore...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 bg-[#F5F5DC] overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} className="absolute inset-0 z-0">
          <img src="/Aarahi Image 3.jpg" alt="Fresh Flour Dusting" className="w-full h-full object-cover" />
        </motion.div>

        {/* EYE-CATCHY: SUBTLE FLOATING GRAIN ELEMENT */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 opacity-5 hidden md:block"
        >
          <div className="w-64 h-64 border-2 border-[#D4AF37] rounded-full border-dashed" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl relative z-10">
          
          {/* BENGALURU LIVE PULSE */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#D4AF37]/20 shadow-sm">
              <MapPin size={12} className="text-red-500" />
              <span className="uppercase tracking-[0.2em] text-[9px] text-[#3E2723] font-sans font-black">Bengaluru</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[9px] font-sans font-bold text-green-700">LIVE MILLING</span>
            </div>
          </div>

          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 block text-[#8B4513] font-sans font-bold">
            A Bangalore Food Startup • Delivered in 24 Hours
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Stop Eating <br /><span className="italic text-[#D4AF37] font-light">"Dead"</span> Flour.
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-sans text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Slow-milled Sharbati Wheat. Ground at 30°C to preserve life. <br />
            Maternal care meets traditional stone-milling.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/shop">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#3E2723] text-white px-12 py-5 rounded-full text-lg font-bold border-2 border-[#3E2723] transition-all shadow-xl font-sans"
              >
                Claim Founder's Kit
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. THE SCIENCE */}
      <section className="py-24 bg-[#FCF9F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center text-left">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6 font-serif">The Science of Freshness</h2>
              <div className="space-y-8 font-sans">
                <motion.div variants={cardHover} initial="initial" whileHover="hover" className="border-l-4 border-red-200 pl-8 p-6 rounded-r-2xl transition-all cursor-default">
                  <h4 className="text-red-800 font-bold uppercase text-[10px] tracking-[0.2em] mb-2">Industrial Flour</h4>
                  <p className="text-gray-500 text-sm italic">"Dead Calories" — High-speed rollers at 90°C destroy nutrients.</p>
                </motion.div>
                <motion.div variants={cardHover} initial="initial" whileHover="hover" className="border-l-4 border-[#D4AF37] pl-8 bg-white py-8 rounded-r-[2rem] shadow-xl border border-transparent cursor-default">
                  <h4 className="text-[#D4AF37] font-bold uppercase text-[10px] tracking-[0.2em] mb-2">Aarahi Fresh</h4>
                  <p className="text-[#3E2723] font-bold">"Living Nutrition" — Cold-milled at 28°C. Delivered in 24 hours across Bangalore.</p>
                </motion.div>
              </div>
            </div>
            <motion.div variants={floating} animate="animate" className="flex justify-center">
              <div className="relative p-4 bg-white rounded-[3rem] shadow-2xl rotate-2 max-w-sm border border-[#F3E5AB]">
                <img src="/Aarahi Image 2.jpg" alt="Aarahi Atta Bag" className="w-full rounded-[2.5rem]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER MANIFESTO */}
      <section className="py-24 bg-white border-y border-gray-50 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div whileHover={{ scale: 1.01 }} className="bg-[#F5F5DC] rounded-[3rem] p-12 md:p-20 relative flex flex-col md:flex-row items-center gap-12 border border-[#D4AF37]/20 shadow-sm transition-all">
            <div className="md:w-3/5">
              <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-widest text-xs mb-4 block">Founder's Note</span>
              <h2 className="text-4xl font-bold text-[#3E2723] mb-6 leading-tight italic">
                "I couldn't find flour I trusted for my family's health. I decided to bring back the purity our kitchens once had."
              </h2>
              <p className="text-gray-700 font-sans italic mb-8 text-lg leading-relaxed">
                "We aren't a factory; we are a dedicated kitchen for Bangalore families. Every bag is milled with maternal care and uncompromising honesty."
              </p>
              <div>
                <div className="text-[#3E2723] font-bold text-2xl">Aalekhya Reddy</div>
                <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-bold mt-1">Founder, Aarahi Foods</div>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
               <motion.div whileHover={{ rotate: 5, scale: 1.05 }} className="w-72 h-72 rounded-full bg-white border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer">
                 <span className="text-gray-300 italic font-sans text-sm">Founder Photo</span>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. THE 24-HOUR OBSESSION TIMELINE */}
      <section className="py-24 bg-[#FCF9F2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#3E2723] mb-20 italic font-serif">The 24-Hour Obsession</h2>
          <div className="relative text-left">
            <div className="absolute left-5 md:left-1/2 h-full w-0.5 bg-[#D4AF37]/30 -translate-x-1/2"></div>
            <div className="space-y-24">
              {[
                { time: "05", title: "The Selection", desc: "Inspecting premium MP Sharbati for moisture and purity. Only the best grains are approved." },
                { time: "09", title: "Cold-Milling", desc: "Stone chakki starts. We monitor temperature every 15 mins to ensure it never crosses 30°C." },
                { time: "04", title: "Delivery Run", desc: "Packed in breathable bags and dispatched across Bangalore immediately. Freshness delivered." }
              ].map((step, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex w-full md:w-1/2 justify-start ${index % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'}`}>
                    <motion.div variants={cardHover} initial="initial" whileHover="hover" className="w-full md:w-80 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 z-10 cursor-pointer">
                      <div className="font-bold text-[#3E2723] mb-2 font-serif text-xl">{step.time} AM: {step.title}</div>
                      <p className="text-sm text-gray-500 font-sans leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>
                  <div className="absolute left-5 md:left-1/2 w-12 h-12 bg-[#FFFDF5] border-2 border-[#D4AF37] rounded-full flex items-center justify-center font-bold text-[#D4AF37] -translate-x-1/2 z-20 shadow-sm">{step.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#3E2723] text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 italic text-[#D4AF37]">Aarahi Foods</h2>
        <p className="font-sans text-gray-400 mb-8 max-w-lg mx-auto">Traditional milling. Bangalore freshness.</p>
        <div className="pt-8 border-t border-white/10 text-[10px] text-gray-500 uppercase tracking-widest font-sans">
          © 2026 Aarahi Foods • Traditional Quality • Bangalore
        </div>
      </footer>

      {/* 6. SYNCED APP-STYLE BOTTOM NAVIGATION BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 z-[9999] flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:hidden">
        
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
          <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-white"></span>
          </span>
          <span className="text-[8px] font-black italic font-serif leading-none uppercase">Aarahi</span>
          <span className="text-[10px] font-black uppercase tracking-tighter">Shop</span>
        </Link>
        
      </div>

    </div>
  );
};

export default Home;