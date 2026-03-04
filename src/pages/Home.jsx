import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#3E2723] flex flex-col items-center justify-center">
        <motion.h2 animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} className="text-[#D4AF37] font-serif italic text-4xl mb-2">Aarahi</motion.h2>
        <p className="text-[#D4AF37]/60 font-sans text-[8px] uppercase tracking-[0.5em] font-black">Milling Fresh for Bengaluru</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 bg-[#F5F5DC] overflow-hidden">
        <div className="absolute inset-0 opacity-15"><img src="/Aarahi Image 3.jpg" className="w-full h-full object-cover" alt="Flour" /></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl z-10">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 bg-white/80 px-4 py-1.5 rounded-full border border-[#D4AF37]/20 shadow-sm">
              <MapPin size={12} className="text-red-500" />
              <span className="uppercase tracking-[0.2em] text-[9px] font-sans font-black">Bengaluru</span>
              <span className="flex h-2 w-2 relative"><span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative h-2 w-2 rounded-full bg-green-500"></span></span>
              <span className="text-[9px] font-sans font-bold text-green-700 uppercase">Live Milling</span>
            </div>
          </div>
          <span className="uppercase tracking-[0.3em] text-[10px] mb-6 block text-[#8B4513] font-sans font-bold italic text-nowrap">Stone Milled • Delivered in 24 Hours</span>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">Stop Eating <br /><span className="italic text-[#D4AF37] font-light">"Dead"</span> Flour.</h1>
          <p className="text-xl md:text-2xl mb-12 font-sans text-gray-700 max-w-2xl mx-auto font-light">Slow-milled at 30°C to preserve life. Maternal care meets traditional stones.</p>
          <Link to="/shop"><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#3E2723] text-white px-12 py-5 rounded-full text-lg font-bold shadow-xl font-sans uppercase tracking-widest">Order Fresh</motion.button></Link>
        </motion.div>
      </section>

      {/* 2. THE SCIENCE */}
      <section className="py-24 bg-[#FCF9F2] px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight text-nowrap">The Science <br/>of Living.</h2>
            <div className="border-l-4 border-red-100 pl-8 py-2"><p className="text-[9px] font-black uppercase text-red-300 tracking-[0.2em] mb-1">Industrial Roller</p><p className="text-gray-400 italic text-lg font-light italic">90°C heat kills the nutrients.</p></div>
            <div className="border-l-4 border-[#D4AF37] pl-8 bg-white py-8 rounded-r-3xl shadow-lg">
              <p className="text-[9px] font-black uppercase text-[#D4AF37] tracking-[0.2em] mb-1">Aarahi Cold-Mill</p>
              <p className="text-2xl font-bold">Stone Ground at 28°C. <br/>Vitality preserved.</p>
            </div>
          </div>
          <div className="flex justify-center"><img src="/Aarahi Image 2.jpg" className="w-full max-w-sm rounded-[3rem] shadow-2xl border-8 border-white" alt="Aarahi Bag" /></div>
        </div>
      </section>

      {/* 3. FOUNDER MANIFESTO */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto bg-[#F5F5DC] rounded-[4rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 shadow-inner border border-[#D4AF37]/10">
          <div className="md:w-3/5 text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic leading-tight">"I started Aarahi to bring back the purity our families deserve."</h2>
            <p className="text-xl text-gray-700 font-sans italic mb-8">"Every bag is treated with the same care as the food I put on my own table."</p>
            <div className="text-[#3E2723] font-bold text-2xl">Aalekhya Reddy</div>
            <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-sans font-bold">Founder, Aarahi Foods</div>
          </div>
          <div className="md:w-2/5 flex justify-center"><div className="w-56 h-56 rounded-full bg-white border-8 border-white shadow-xl overflow-hidden grayscale flex items-center justify-center text-gray-300 italic text-xs uppercase">Founder Photo</div></div>
        </div>
      </section>

      {/* 4. 24-HOUR TIMELINE */}
      <section className="py-24 bg-[#FCF9F2] px-6 text-center">
        <h2 className="text-4xl font-bold mb-20 italic">The 24-Hour Obsession</h2>
        <div className="max-w-5xl mx-auto space-y-8">
          {[
            { t: "05 AM", h: "Selection", d: "Inspecting premium MP Sharbati for moisture and soul." },
            { t: "09 AM", h: "Milling", d: "Grinding at 28°C to keep nutrients active and alive." },
            { t: "04 PM", h: "Delivery", d: "Delivered across Bengaluru while the vitality is peaking." }
          ].map((s, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50 text-left">
              <div className="text-4xl font-black text-[#D4AF37] italic">{s.t}</div>
              <div><h4 className="font-sans font-black text-xs tracking-widest text-[#3E2723] uppercase mb-1">{s.h}</h4><p className="text-gray-500 text-sm">{s.d}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#3E2723] text-white py-20 text-center"><h2 className="text-5xl font-bold italic text-[#D4AF37] mb-4">Aarahi</h2><p className="text-[9px] uppercase tracking-[0.8em] opacity-30 font-sans">Milled Fresh in Bengaluru</p></footer>

      {/* 6. SYNCED MOBILE NAV BAR (4 BUTTONS) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 z-[9999] flex justify-between items-center shadow-lg md:hidden">
        <Link to="/" className="flex flex-col items-center text-[#3E2723] transition-transform active:scale-95"><HomeIcon size={22} strokeWidth={2.5} /><span className="text-[9px] font-bold mt-1 uppercase">Home</span></Link>
        <Link to="/about" className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-all active:scale-95"><HelpCircle size={22} /><span className="text-[9px] font-bold mt-1 uppercase text-nowrap">Why Me</span></Link>
        <button className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-all active:scale-95"><Search size={22} /><span className="text-[9px] font-bold mt-1 uppercase">Search</span></button>
        <Link to="/shop" className="relative bg-[#3E2723] text-[#D4AF37] px-4 py-2 rounded-xl flex flex-col items-center shadow-lg active:scale-95 transition-transform">
          <span className="absolute -top-1 -right-1 flex h-3 w-3"><span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative h-3 w-3 rounded-full bg-red-500 border-2 border-white"></span></span>
          <span className="text-[8px] font-black italic font-serif leading-none uppercase">Aarahi</span><span className="text-[10px] font-black uppercase tracking-tighter">Shop</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;