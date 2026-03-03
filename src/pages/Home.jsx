import React from 'react';
import { motion } from 'framer-motion';

// --- ANIMATION VARIANTS ---
const floating = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};

const gentleSway = {
  animate: {
    rotate: [0, 1, -1, 0],
    scale: [1, 1.02, 1],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
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
      
      {/* 1. HERO SECTION WITH IMAGE 3 (DUSTING FLOUR) */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
        {/* Background Image with breathing effect */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/Aarahi-Image-3.jpg" 
            alt="Hand dusting flour" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="max-w-4xl relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.4em] text-xs mb-6 block text-[#D4AF37] font-sans font-bold"
          >
            A Bangalore Food Startup
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-white"
          >
            Alive <span className="italic text-[#D4AF37] font-light">Nutrition.</span>
          </h1 >
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 font-sans text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Milled today. On your table tomorrow. <br />
            MBA-led precision meets traditional stone-milling.
          </motion.p>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <button className="bg-[#D4AF37] text-[#3E2723] px-12 py-5 rounded-full text-lg font-bold hover:bg-white transition-all shadow-2xl shadow-[#D4AF37]/20 uppercase tracking-widest text-sm">
              Join the Subscription
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. COMPARISON SECTION WITH IMAGE 2 (FLOATING BAG) */}
      <section className="py-32 bg-[#FCF9F2]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
             <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">Why we are <br/><span className="text-[#D4AF37] italic">different.</span></h2>
             <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-[#D4AF37]">
                  <h4 className="font-bold text-xl mb-2 font-sans uppercase text-xs tracking-widest">Cold-Milling</h4>
                  <p className="text-gray-600 leading-relaxed">We mill at 28°C. Most industrial mills hit 90°C, burning the life out of your food.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border-l-8 border-gray-100">
                  <h4 className="font-bold text-xl mb-2 font-sans uppercase text-xs tracking-widest text-gray-400">Freshness</h4>
                  <p className="text-gray-400 leading-relaxed">Milled only after your order. No warehouses. No oxidation.</p>
                </div>
             </div>
          </div>

          {/* THE FLOATING BAG IMAGE */}
          <motion.div 
            variants={floating}
            animate="animate"
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative p-4 bg-white rounded-[4rem] shadow-2xl rotate-3">
              <img 
                src="/Aarahi-Image-2.jpg" 
                alt="Fresh Atta Bag" 
                className="w-full max-w-sm rounded-[3rem] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#D4AF37] text-white p-6 rounded-3xl font-bold text-center shadow-xl">
                 <span className="block text-2xl">100%</span>
                 <span className="text-xs uppercase tracking-widest">Sharbati</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. FOUNDER MANIFESTO WITH IMAGE SHAKE */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#F5F5DC] rounded-[4rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 border border-[#D4AF37]/10">
            <div className="md:w-3/5">
               <h2 className="text-4xl font-bold mb-8 leading-tight italic">
                "As an MBA, I decided to fix the supply chain myself. No more dead calories for Bangalore families."
               </h2>
               <p className="text-xl font-sans text-gray-600 mb-8 leading-relaxed">
                 Aarahi is where maternal care meets professional precision. We are a kitchen for the city, not a factory.
               </p>
               <div>
                  <p className="font-bold text-2xl">Aalekhya Reddy</p>
                  <p className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm">Founder, Aarahi Foods (MBA)</p>
               </div>
            </div>

            <motion.div 
              variants={microShake}
              whileHover="whileHover"
              className="md:w-2/5 cursor-pointer"
            >
              <div className="aspect-square bg-white rounded-full border-[15px] border-white shadow-2xl overflow-hidden flex items-center justify-center italic text-gray-300">
                [Aalekhya Photo Placeholder]
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. 24-HOUR OBSESSION WITH IMAGE 1 (SWAYING GRAIN) */}
      <section className="py-32 bg-[#FCF9F2] relative overflow-hidden">
        {/* SWAYING GRAIN BACKGROUND */}
        <motion.div 
          variants={gentleSway}
          animate="animate"
          className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"
        >
          <img src="/Aarahi-Image.jpg" className="w-full h-full object-cover" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-20 italic">The 24-Hour Obsession</h2>
          <div className="space-y-16 text-left">
             <div className="flex gap-10 items-center">
                <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] flex items-center justify-center font-bold text-[#D4AF37] text-2xl shrink-0 bg-white">05</div>
                <div>
                   <h4 className="text-2xl font-bold mb-2">AM: The Selection</h4>
                   <p className="font-sans text-gray-500">Inspecting premium MP Sharbati for moisture and purity.</p>
                </div>
             </div>
             <div className="flex gap-10 items-center">
                <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] flex items-center justify-center font-bold text-[#D4AF37] text-2xl shrink-0 bg-white">09</div>
                <div>
                   <h4 className="text-2xl font-bold mb-2">AM: Cold-Milling</h4>
                   <p className="font-sans text-gray-500">Slow stone-milling at 28°C to prevent nutrient burn.</p>
                </div>
             </div>
             <div className="flex gap-10 items-center">
                <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] flex items-center justify-center font-bold text-[#D4AF37] text-2xl shrink-0 bg-white">04</div>
                <div>
                   <h4 className="text-2xl font-bold mb-2">PM: Delivery Run</h4>
                   <p className="font-sans text-gray-500">Hand-packed and dispatched across Bangalore immediately.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#1A1512] text-white py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 italic text-[#D4AF37]">Aarahi Foods.</h2>
        <p className="text-gray-500 font-sans max-w-md mx-auto mb-12">The future of family wellness, delivered fresh across Bangalore.</p>
        <div className="pt-8 border-t border-white/5 text-[10px] text-gray-600 uppercase tracking-widest font-sans">
          © 2026 Aarahi Foods • MBA-Led Quality • Bangalore
        </div>
      </footer>

    </div>
  );
};

export default Home;