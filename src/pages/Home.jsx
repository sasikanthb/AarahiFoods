import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- ANIMATION VARIANTS ---
const floating = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

const microShake = {
  whileHover: {
    x: [0, -2, 2, -2, 2, 0],
    transition: { duration: 0.4 }
  }
};

const Home = () => {
  const [loading, setLoading] = useState(true);

  // Simple loading state to ensure images are ready
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#FFFDF5] flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-[#D4AF37] font-serif italic text-2xl"
        >
          Milling Freshness...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden">
      
      {/* 1. HERO SECTION (Using your exact file name: Aarahi Image 3.jpg) */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 bg-[#F5F5DC] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }} 
          className="absolute inset-0 z-0"
        >
          <img 
            src="/Aarahi Image 3.jpg" 
            alt="Fresh Flour Dusting" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl relative z-10"
        >
          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 block text-[#8B4513] font-sans font-bold">
            A Bangalore Food Startup • Delivered in 24 Hours
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Stop Eating <br />
            <span className="italic text-[#D4AF37] font-light">"Dead"</span> Flour.
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-sans text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Slow-milled Sharbati Wheat. Ground at 30°C to preserve life. <br />
            MBA-led precision meets traditional stone-milling.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3E2723] text-white px-12 py-5 rounded-full text-lg font-bold border-2 border-[#3E2723] transition-all shadow-xl"
            >
              Claim Founder's Kit
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* 2. THE SCIENCE OF FRESHNESS (Using your exact file name: Aarahi Image 2.jpg) */}
      <section className="py-24 bg-[#FCF9F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6">The Science of Freshness</h2>
              <div className="space-y-8 font-sans text-left">
                <div className="border-l-4 border-red-200 pl-8">
                  <h4 className="text-red-800 font-bold uppercase text-[10px] tracking-[0.2em] mb-2">Industrial Flour</h4>
                  <p className="text-gray-500 text-sm">High-speed rollers at 90°C destroy the nutrients before they reach you.</p>
                </div>
                <div className="border-l-4 border-[#D4AF37] pl-8 bg-white py-8 rounded-r-[2rem] shadow-xl">
                  <h4 className="text-[#D4AF37] font-bold uppercase text-[10px] tracking-[0.2em] mb-2">Aarahi Fresh</h4>
                  <p className="text-[#3E2723] font-bold">Cold-milled at 28°C. Delivered in 24 hours to keep the life inside.</p>
                </div>
              </div>
            </div>

            {/* FLOATING ATTA BAG */}
            <motion.div 
              variants={floating}
              animate="animate"
              className="flex justify-center"
            >
              <div className="relative p-4 bg-white rounded-[3rem] shadow-2xl rotate-2 max-w-sm border-2 border-[#F3E5AB]">
                <img 
                  src="/Aarahi Image 2.jpg" 
                  alt="Aarahi Atta Bag" 
                  className="w-full rounded-[2rem] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#D4AF37] text-white p-4 rounded-2xl shadow-lg font-sans text-xs font-bold">
                  FRESHLY MILLED
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER MANIFESTO */}
      <section className="py-24 bg-white border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#F5F5DC] rounded-[3rem] p-12 md:p-20 relative flex flex-col md:flex-row items-center gap-12 border border-[#D4AF37]/20">
            <div className="md:w-3/5 text-left">
              <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-widest text-xs mb-4 block">Founder's Note</span>
              <h2 className="text-4xl font-bold text-[#3E2723] mb-6 leading-tight italic">
                "I couldn't find flour I trusted for my family's health. As an MBA, I decided to fix the supply chain myself."
              </h2>
              <p className="text-gray-700 font-sans italic mb-8 text-lg leading-relaxed">
                "We aren't a factory; we are a dedicated kitchen for Bangalore families. Every bag is milled with maternal care and professional precision."
              </p>
              <div>
                <div className="text-[#3E2723] font-bold text-2xl">Aalekhya Reddy</div>
                <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-bold mt-1">Founder, Aarahi Foods (MBA)</div>
              </div>
            </div>
            
            <div className="md:w-2/5 flex justify-center">
               <motion.div 
                 variants={microShake}
                 whileHover="whileHover"
                 className="w-72 h-72 rounded-full bg-white border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer"
               >
                 <span className="text-gray-300 italic font-sans text-sm">Founder Photo</span>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER (Using your exact file name: Aarahi Image.jpg for a subtle pattern) */}
      <footer className="relative bg-[#3E2723] text-white py-20 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-6 italic text-[#D4AF37]">Aarahi Foods</h2>
          <p className="font-sans text-gray-400 mb-12 max-w-lg mx-auto">Elevating the daily staple across Bangalore through professional management and cold-milled precision.</p>
          <div className="pt-8 border-t border-white/10 text-[10px] text-gray-500 uppercase tracking-widest font-sans">
            © 2026 Aarahi Foods • Traditionally Milled • Bangalore
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;