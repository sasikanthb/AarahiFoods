import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin, ShoppingBag, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const floating = { animate: { y: [0, -15, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } } };
const cardHover = { initial: { scale: 1 }, hover: { scale: 1.03, transition: { duration: 0.3 } } };

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#3E2723] flex flex-col items-center justify-center overflow-hidden">
        <motion.h2 animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="text-[#D4AF37] font-serif italic text-4xl md:text-6xl mb-4">Aarahi</motion.h2>
        <motion.p animate={{ letterSpacing: ["0.2em", "0.5em", "0.2em"] }} transition={{ repeat: Infinity, duration: 3 }} className="text-[#D4AF37]/80 font-sans text-[10px] uppercase tracking-[0.5em] font-black">Milling Freshness for Bangalore...</motion.p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-24 text-left">
      
      {/* 1. HERO */}
      <section className="relative h-[95vh] flex items-center justify-center text-center px-6 bg-[#F5F5DC] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img src="/Aarahi Image 3.jpg" alt="Grain" className="w-full h-full object-cover" />
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl relative z-10">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 bg-white px-5 py-2 rounded-full border border-[#D4AF37]/30 shadow-xl">
              <MapPin size={14} className="text-red-500 animate-pulse" />
              <span className="uppercase tracking-[0.1em] text-[10px] font-sans font-black">Freshly Milled in Bengaluru Delivered Within 24 Hours</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-[9rem] font-bold mb-8 leading-[0.85] tracking-tighter uppercase">Stop Eating <br /><span className="italic text-[#D4AF37] font-light normal-case tracking-normal text-nowrap">"Dead"</span> Flour.</h1>
          <p className="text-xl md:text-3xl mb-12 font-sans text-gray-700 max-w-2xl mx-auto font-medium">Slow-milled Sharbati Wheat. Ground at 30°C to protect natural nutrition.</p>
          <Link to="/shop"><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#3E2723] text-white px-16 py-6 rounded-full text-xl font-black shadow-2xl uppercase tracking-widest">Order Fresh Atta</motion.button></Link>
        </motion.div>
      </section>

      {/* 2. FEATURED PRODUCTS (THE SHOP) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-black mb-4 block text-center">Shop Best Sellers</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-16 italic text-center">Freshly Milled for You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "MP Sharbati Atta", price: "₹450", weight: "5kg" },
              { name: "Multigrain Atta", price: "₹550", weight: "5kg" },
              { name: "Khapli Wheat Atta", price: "₹650", weight: "5kg" }
            ].map((prod, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-[#FCF9F2] p-8 rounded-[3rem] border border-[#D4AF37]/10">
                <div className="aspect-square bg-white rounded-[2rem] mb-6 flex items-center justify-center"><img src="/Aarahi Image 2.jpg" alt="Pack" className="w-32 opacity-80" /></div>
                <h4 className="text-2xl font-bold mb-2">{prod.name}</h4>
                <p className="text-[#D4AF37] font-sans font-bold mb-6">{prod.weight} • {prod.price}</p>
                <Link to="/shop"><button className="w-full py-4 bg-[#3E2723] text-white rounded-full font-black uppercase text-xs tracking-widest hover:opacity-90 transition-all">Add to Cart</button></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SCIENCE */}
      <section className="py-24 bg-[#FCF9F2] px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold tracking-tighter uppercase leading-none">The Science <br/>of Freshness</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-200 pl-8 p-6 bg-white/50 rounded-r-2xl">
                <h4 className="text-red-800 font-bold uppercase text-[10px] tracking-widest mb-1">Industrial Flour</h4>
                <p className="text-gray-500 text-sm italic">Packaged atta is produced using high-speed roller mills that generate heat at 90°C, destroying nutrients.</p>
              </div>
              <div className="border-l-8 border-[#D4AF37] pl-8 bg-white py-10 rounded-r-[3rem] shadow-xl">
                <h4 className="text-[#D4AF37] font-bold uppercase text-[10px] tracking-widest mb-1">Aarahi Fresh</h4>
                <p className="font-bold text-2xl leading-tight">Living Nutrition - Stone-milled in small batches at low temperatures to preserve fibre, nutrients, and natural oils.</p>
              </div>
            </div>
          </div>
          <motion.div variants={floating} animate="animate" className="flex justify-center"><img src="/Aarahi Image 2.jpg" alt="Aarahi Bag" className="w-full max-w-sm rounded-[3rem] shadow-2xl border-8 border-white rotate-2" /></motion.div>
        </div>
      </section>

      {/* 4. FOUNDER NOTE */}
      <section className="py-32 bg-[#3E2723] text-white px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] font-black mb-8 block">Founder's Note</span>
          <h2 className="text-4xl md:text-5xl font-bold italic mb-10 leading-tight">"I couldn't find flour I trusted for my family's health. I decided to start milling it myself."</h2>
          <p className="text-[#D4AF37]/70 font-sans text-xl leading-relaxed mb-10 italic">"Aarahi Foods began with a simple belief that families deserve fresh, honest food. Every bag is milled with maternal care."</p>
          <div className="text-2xl font-bold uppercase tracking-tighter">Aalekhya Reddy</div>
        </div>
      </section>

      {/* 5. TIMELINE */}
      <section className="py-24 bg-[#FCF9F2] px-6">
        <h2 className="text-4xl font-bold mb-20 italic text-center">From Wheat to Your Kitchen in 24 Hours</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { time: "05 AM", icon: <Star className="text-[#D4AF37]" />, title: "The Selection", desc: "We only use premium Sharbati wheat known for soft rotis." },
            { time: "09 AM", icon: <Zap className="text-[#D4AF37]" />, title: "Cold-Milling", desc: "Stone-milled at a slow pace maintaining low temperature to preserve nutrition." },
            { time: "04 PM", icon: <ShoppingBag className="text-[#D4AF37]" />, title: "Delivery Run", desc: "Freshly milled, packed and delivered across Bengaluru the same day." }
          ].map((step, i) => (
            <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-[#D4AF37]/10">
              <div className="flex justify-between mb-6"><span className="text-3xl font-black italic opacity-20">{step.time}</span>{step.icon}</div>
              <h4 className="font-sans font-black text-xs tracking-widest uppercase mb-4">{step.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3E2723] text-white py-24 text-center px-6">
        <h2 className="text-4xl font-bold italic text-[#D4AF37] mb-4">Aarahi Foods</h2>
        <p className="text-[10px] uppercase tracking-widest opacity-30">Freshly Milled Atta for Bengaluru Families</p>
      </footer>

      {/* MOBILE NAV */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-4 z-[9999] flex justify-between items-center shadow-lg md:hidden">
        <Link to="/" className="flex flex-col items-center text-[#3E2723]"><HomeIcon size={24} strokeWidth={2.5} /><span className="text-[9px] font-black mt-1 uppercase">Home</span></Link>
        <Link to="/about" className="flex flex-col items-center text-gray-400"><HelpCircle size={24} /><span className="text-[9px] font-black mt-1 uppercase text-nowrap">Why Aarahi</span></Link>
        <button className="flex flex-col items-center text-gray-400"><Search size={24} /><span className="text-[9px] font-black mt-1 uppercase">Search</span></button>
        <Link to="/shop" className="relative bg-[#3E2723] text-[#D4AF37] px-5 py-3 rounded-2xl shadow-2xl"><span className="text-[10px] font-black uppercase tracking-tighter">Shop</span></Link>
      </div>

    </div>
  );
};

export default Home;