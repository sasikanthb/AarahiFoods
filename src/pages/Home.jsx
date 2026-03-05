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
      <div className="h-screen w-full bg-[#3E2723] flex flex-col items-center justify-center overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.h2
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[#D4AF37] font-serif italic text-5xl"
          >
            Aarahi
          </motion.h2>
          <p className="text-[#D4AF37]/80 uppercase tracking-[0.4em] text-xs mt-3">
            Milling Fresh for Bengaluru
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-24">

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 bg-[#F5F5DC] overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} className="absolute inset-0 z-0">
          <img src="/Aarahi Image 3.jpg" alt="Fresh Atta" className="w-full h-full object-cover" loading="lazy"/>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl relative z-10">

          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 bg-white px-4 py-1 rounded-full border border-[#D4AF37]/30 shadow-sm">
              <MapPin size={12} className="text-red-500"/>
              <span className="uppercase text-[10px] font-bold tracking-widest">Bengaluru</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold text-green-700">LIVE MILLING</span>
            </div>
          </div>

          <span className="uppercase tracking-[0.3em] text-[10px] mb-6 block text-[#8B4513] font-bold">
            Freshly Milled in Bengaluru Delivered Within 24 Hours
          </span>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Stop Eating <br/>
            <span className="italic text-[#D4AF37] font-light">"Dead"</span> Flour.
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Slow-milled Sharbati Wheat. Ground at 30°C to protect natural nutrition.
          </p>

          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3E2723] text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl"
            >
              Order Fresh Atta
            </motion.button>
          </Link>

        </motion.div>
      </section>

      {/* SCIENCE SECTION */}
      <section className="py-24 bg-[#FCF9F2]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-10">The Science of Freshness</h2>

            <motion.div variants={cardHover} initial="initial" whileHover="hover" className="mb-6 p-6 bg-white rounded-xl border">
              <h4 className="text-red-700 font-bold uppercase text-xs mb-2">Industrial Flour</h4>
              <p className="text-gray-500 italic">
                Packaged atta is produced using high-speed roller mills that generate heat at 90°C, destroying nutrients.
              </p>
            </motion.div>

            <motion.div variants={cardHover} initial="initial" whileHover="hover" className="p-6 bg-white rounded-xl border">
              <h4 className="text-[#D4AF37] font-bold uppercase text-xs mb-2">Aarahi Fresh</h4>
              <p className="font-bold">
                Living Nutrition - Stone-milled in small batches at low temperatures to preserve fibre, nutrients, and natural oils.
              </p>
            </motion.div>
          </div>

          <motion.div variants={floating} animate="animate" className="flex justify-center">
            <img src="/Aarahi Image 2.jpg" className="rounded-3xl shadow-xl"/>
          </motion.div>

        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6">

          <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-bold">
            Founder's Story
          </span>

          <h2 className="text-4xl font-bold italic mt-4 mb-6">
            "I couldn't find flour I trusted for my family's health. I decided to start milling it myself."
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto mb-10">
            Aarahi Foods began with a simple belief that families deserve fresh, honest food. Every batch we mill is made with the same care we use for our own home.
          </p>

          <div className="font-bold text-xl">Aalekhya Reddy</div>
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] mt-1">
            Founder • Aarahi Foods
          </div>

        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-[#FCF9F2] text-center">
        <h2 className="text-4xl font-bold mb-16 italic">From Wheat to Your Kitchen in 24 Hours</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto px-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">05 AM</h3>
            <p>We only use premium Sharbati wheat known for soft rotis.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">09 AM</h3>
            <p>Stone-milled at a slow pace maintaining low temperature to preserve nutrition.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">04 PM</h3>
            <p>Freshly milled, packed and delivered across Bengaluru the same day.</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3E2723] text-white py-16 text-center">
        <h2 className="text-3xl text-[#D4AF37] italic">Aarahi Foods</h2>
        <p className="text-gray-400 mt-2">Freshly Milled Atta for Bengaluru Families</p>

        <div className="mt-8 text-xs text-gray-500 uppercase tracking-widest">
          © 2026 Aarahi Foods
        </div>
      </footer>

      {/* WHATSAPP ORDER BUTTON */}
      <a
        href="https://wa.me/918904561616"
        className="fixed bottom-28 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-[9999] hover:scale-110 transition-transform flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.48 5.228 3.48 8.404c0 6.556-5.332 11.888-11.888 11.888-2.007 0-3.974-.509-5.714-1.472l-6.273 1.697zm6.333-3.805c1.648.978 3.447 1.492 5.285 1.492 5.632 0 10.213-4.581 10.213-10.213 0-2.729-1.062-5.294-2.99-7.222s-4.493-2.99-7.223-2.99c-5.631 0-10.213 4.581-10.213 10.213 0 1.902.521 3.75 1.507 5.352l-.994 3.63 3.712-.994zm11.215-7.312c-.076-.127-.278-.203-.581-.354s-1.792-.885-2.071-.986-.48-.152-.681.152-.783.986-.96 1.189-.354.228-.657.076c-.303-.152-1.279-.471-2.435-1.502-.899-.801-1.505-1.791-1.682-2.094s-.019-.468.132-.619c.136-.136.303-.354.455-.531s.202-.303.303-.505.051-.379-.025-.531-.682-1.644-.934-2.251c-.246-.593-.494-.512-.681-.522l-.581-.01c-.202 0-.531.076-.808.379s-1.061 1.037-1.061 2.529 1.086 2.935 1.238 3.137 2.137 3.263 5.176 4.57c.723.311 1.287.496 1.726.635.726.231 1.387.199 1.909.121.581-.087 1.792-.733 2.045-1.441s.253-1.315.177-1.441z"/></svg>
      </a>

      {/* MOBILE NAVIGATION SYNCED */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-100 px-6 py-3 z-[9999] flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:hidden">
        
        <Link to="/" className="flex flex-col items-center text-[#3E2723] transition-transform active:scale-95">
          <HomeIcon size={22} strokeWidth={2.5} />
          <span className="text-[9px] font-black mt-1 uppercase tracking-tighter">Home</span>
        </Link>
        
        <Link to="/about" className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-all active:scale-95">
          <HelpCircle size={22} />
          <span className="text-[9px] font-black mt-1 uppercase tracking-tighter text-nowrap">Why Aarahi</span>
        </Link>
        
        <button className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-all active:scale-95">
          <Search size={22} />
          <span className="text-[9px] font-black mt-1 uppercase tracking-tighter">Search</span>
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