import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Leaf, Heart, ThermometerSnowflake, Activity } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-32">
      
      {/* 1. HERO */}
      <section className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="uppercase tracking-[0.4em] text-[10px] font-sans font-black text-[#D4AF37] mb-6 block"
        >
          Our Philosophy
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-12"
        >
          Flour shouldn't have a <br />
          <span className="italic font-light text-[#D4AF37]">Shelf Life.</span>
        </motion.h1>
      </section>

      {/* 2. THE TRUTH SECTION */}
      <section className="py-24 bg-[#F5F5DC]/50 border-y border-[#D4AF37]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-left">
              <h2 className="text-4xl font-bold uppercase tracking-tighter text-[#3E2723]">The Hidden Truth <br/> about Atta</h2>
              <p className="font-sans text-gray-600 leading-relaxed italic">
                Commercial flours reach 90°C during milling. This heat "kills" the nutrition. Aarahi stays at 30°C.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm">
                  <ThermometerSnowflake className="text-[#D4AF37]" size={32} />
                  <div>
                    <h4 className="font-bold text-lg">The 30°C Rule</h4>
                    <p className="text-sm text-gray-500 font-sans">Low-temperature grind to preserve Vitamin E.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm">
                  <Activity className="text-[#D4AF37]" size={32} />
                  <div>
                    <h4 className="font-bold text-lg">Zero Oxidation</h4>
                    <p className="text-sm text-gray-500 font-sans">Milled after you order for peak value.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-[#3E2723] rounded-[4rem] aspect-square flex items-center justify-center p-12 shadow-2xl">
                <div className="text-[#D4AF37] text-center italic text-xl border border-[#D4AF37]/20 p-8 rounded-full border-dashed animate-spin-slow">
                   Stone Milled • 28 RPM • Cold Pressed
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="px-6 mt-20">
        <div className="max-w-5xl mx-auto bg-[#3E2723] rounded-[4rem] p-12 md:p-24 text-center text-[#D4AF37]">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to taste the <br/> Difference?</h2>
          <Link to="/shop">
            <button className="bg-[#D4AF37] text-[#3E2723] px-12 py-5 rounded-2xl font-sans font-black uppercase tracking-widest text-xs hover:bg-white transition-all">
              Go to the Shop
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;