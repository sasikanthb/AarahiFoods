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
            Freshly Milled in Bengaluru • Delivered in 24 Hours
          </span>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Stop Eating <br/>
            <span className="italic text-[#D4AF37] font-light">"Dead"</span> Flour.
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Slow-milled Sharbati wheat. Ground below 30°C to preserve natural nutrition. <br/>
            Fresh chakki atta delivered across Bengaluru.
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
                Stored for months. High heat roller milling destroys nutrients.
              </p>
            </motion.div>

            <motion.div variants={cardHover} initial="initial" whileHover="hover" className="p-6 bg-white rounded-xl border">
              <h4 className="text-[#D4AF37] font-bold uppercase text-xs mb-2">Aarahi Fresh</h4>
              <p className="font-bold">
                Cold-milled fresh wheat. Packed and delivered within 24 hours.
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
            "I couldn't find atta I trusted for my family.  
            So I started milling it myself."
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto mb-10">
            Aarahi Foods was started with a simple belief — food should be fresh, honest,
            and nourishing. Every batch we mill is made with the same care we use for our own home.
          </p>

          <div className="font-bold text-xl">Aalekhya Reddy</div>
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] mt-1">
            Founder • Aarahi Foods
          </div>

        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-[#FCF9F2] text-center">
        <h2 className="text-4xl font-bold mb-16 italic">Our Daily Fresh Milling</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto px-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">05 AM</h3>
            <p>Premium Sharbati wheat is inspected and selected.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">09 AM</h3>
            <p>Slow milling begins using traditional chakki process.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">04 PM</h3>
            <p>Fresh atta is packed and delivered across Bengaluru.</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3E2723] text-white py-16 text-center">
        <h2 className="text-3xl text-[#D4AF37] italic">Aarahi Foods</h2>
        <p className="text-gray-400 mt-2">Freshly Milled Atta • Bengaluru</p>

        <div className="mt-8 text-xs text-gray-500 uppercase tracking-widest">
          © 2026 Aarahi Foods
        </div>
      </footer>

      {/* WHATSAPP ORDER BUTTON */}
      <a
        href="https://wa.me/918904561616"
        className="fixed bottom-24 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl z-[9999]"
      >
        Order on WhatsApp
      </a>

      {/* MOBILE NAVIGATION */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-6 py-3 flex justify-between md:hidden">
        <Link to="/" className="flex flex-col items-center text-[#3E2723]">
          <HomeIcon size={22}/>
          <span className="text-[9px] font-bold">Home</span>
        </Link>

        <Link to="/about" className="flex flex-col items-center text-gray-500">
          <HelpCircle size={22}/>
          <span className="text-[9px] font-bold">Why Aarahi</span>
        </Link>

        <Link to="/shop" className="flex flex-col items-center text-[#3E2723]">
          <span className="text-[9px] font-bold">Shop</span>
        </Link>
      </div>

    </div>
  );
};

export default Home;