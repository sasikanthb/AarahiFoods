import React from 'react';
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
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden">
      
      {/* 1. HERO SECTION (Starting Model Style) */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 bg-[#F5F5DC] overflow-hidden">
        {/* HERO IMAGE 3 - DUSTING FLOUR (Gentle breathing effect) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }} // Kept very subtle to maintain the light cream feel
          className="absolute inset-0 z-0"
        >
          <img 
            src="/Aarahi-Image-3.jpg" 
            alt="Fresh Flour" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl relative z-10"
        >
          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 block text-[#8B4513] font-sans font-bold">
            Milled in Bangalore • Delivered in 24 Hours
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-[#3E2723]">
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
            <button className="border-2 border-[#3E2723] px-12 py-5 rounded-full text-lg font-bold hover:bg-[#3E2723] hover:text-white transition-all font-sans">
              Explore Subscriptions
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. THE COMPARISON: ALIVE VS DEAD (Floating Image 2) */}
      <section className="py-24 bg-[#FCF9F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6 font-serif">The Science of Freshness</h2>
              <div className="space-y-8 font-sans">
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

            {/* FLOATING IMAGE 2 - BAG AND SIEVE */}
            <motion.div 
              variants={floating}
              animate="animate"
              className="flex justify-center"
            >
              <div className="relative p-4 bg-white rounded-[4rem] shadow-2xl rotate-2">
                <img 
                  src="/Aarahi-Image-2.jpg" 
                  alt="Aarahi Atta Bag" 
                  className="w-full max-w-sm rounded-[3rem] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. THE FOUNDER'S MANIFESTO (Aalekhya Reddy) */}
      <section className="py-24 bg-white overflow-hidden border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#F5F5DC] rounded-[3rem] p-12 md:p-20 relative flex flex-col md:flex-row items-center gap-12 border border-[#D4AF37]/20 shadow-sm">
            <div className="md:w-3/5">
              <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-widest text-xs mb-4 block">A Startup Built on Trust</span>
              <h2 className="text-4xl font-bold text-[#3E2723] mb-6 leading-tight italic">
                "I couldn't find flour I trusted for my family's health. As an MBA, I decided to fix the supply chain myself."
              </h2>
              <p className="text-gray-700 font-sans italic mb-8 text-lg leading-relaxed">
                "We aren't a factory; we are a dedicated kitchen for Bangalore families. Every bag is milled with maternal care and professional precision."
              </p>
              <div>
                <div className="text-[#3E2723] font-bold text-2xl font-serif">Aalekhya Reddy</div>
                <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-bold mt-1">Founder, Aarahi Foods (MBA)</div>
              </div>
            </div>
            
            <div className="md:w-2/5 flex justify-center">
               <motion.div 
                 variants={microShake}
                 whileHover="whileHover"
                 className="w-72 h-72 rounded-full bg-white border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer"
               >
                 <span className="text-gray-300 italic font-sans text-sm text-center p-8">[Founder Photo]</span>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 24-HOUR OBSESSION TIMELINE (05-09-04) */}
      <section className="py-24 bg-[#FCF9F2]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#3E2723] mb-20 text-center italic font-serif tracking-tight">The 24-Hour Obsession</h2>
          
          <div className="relative">
            <div className="absolute left-5 md:left-1/2 h-full w-0.5 bg-[#D4AF37]/30 -translate-x-1/2"></div>
            <div className="space-y-24">
              {/* Step 05 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex w-full md:w-1/2 justify-start md:justify-end md:pr-16">
                  <div className="w-full md:w-80 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 relative z-10">
                    <div className="font-bold text-[#3E2723] mb-2 font-serif text-xl">05 AM: The Selection</div>
                    <p className="text-sm text-gray-500 font-sans leading-relaxed">Inspecting premium MP Sharbati for moisture and purity.</p>
                  </div>
                </div>
                <div className="absolute left-5 md:left-1/2 w-12 h-12 bg-[#FFFDF5] border-2 border-[#D4AF37] rounded-full flex items-center justify-center font-bold text-[#D4AF37] -translate-x-1/2 z-20 shadow-sm">05</div>
              </div>

              {/* Step 09 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="absolute left-5 md:left-1/2 w-12 h-12 bg-[#FFFDF5] border-2 border-[#D4AF37] rounded-full flex items-center justify-center font-bold text-[#D4AF37] -translate-x-1/2 z-20 shadow-sm">09</div>
                <div className="flex w-full md:w-1/2 md:ml-auto justify-start md:pl-16">
                  <div className="w-full md:w-80 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 relative z-10">
                    <div className="font-bold text-[#3E2723] mb-2 font-serif text-xl">09 AM: Cold-Milling</div>
                    <p className="text-sm text-gray-500 font-sans leading-relaxed">Slow stone-milling at 28°C to prevent nutrient burn.</p>
                  </div>
                </div>
              </div>

              {/* Step 04 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex w-full md:w-1/2 justify-start md:justify-end md:pr-16">
                  <div className="w-full md:w-80 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 relative z-10">
                    <div className="font-bold text-[#3E2723] mb-2 font-serif text-xl">04 PM: Delivery Run</div>
                    <p className="text-sm text-gray-500 font-sans leading-relaxed">Packed and dispatched across Bangalore immediately.</p>
                  </div>
                </div>
                <div className="absolute left-5 md:left-1/2 w-12 h-12 bg-[#FFFDF5] border-2 border-[#D4AF37] rounded-full flex items-center justify-center font-bold text-[#D4AF37] -translate-x-1/2 z-20 shadow-sm">04</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#3E2723] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 italic tracking-tight text-[#D4AF37]">Aarahi Foods</h2>
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