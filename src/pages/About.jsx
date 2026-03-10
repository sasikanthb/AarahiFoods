import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Heart, ThermometerSnowflake, Activity } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-32">
      
      {/* 1. HERO: THE MANIFESTO */}
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
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-12"
        >
          Flour shouldn't have a <br />
          <span className="italic font-light text-[#D4AF37]">Shelf Life.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 font-sans font-light leading-relaxed italic"
        >
          "At Aarahi, we believe that food loses its soul when it sits in a warehouse for months. 
          We brought back the stone mill to bring back the life in your rotis."
        </motion.p>
      </section>

      {/* 2. THE PROBLEM (HIGH HEAT) VS THE SOLUTION (COLD MILL) */}
      <section className="py-24 bg-[#F5F5DC]/50 border-y border-[#D4AF37]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold uppercase tracking-tighter">The Hidden Truth <br/> about Atta</h2>
              <p className="font-sans text-gray-600 leading-relaxed">
                Most commercial flours are processed in massive roller mills that generate temperatures up to **90°C**. This heat kills the enzymes and turns the natural oils rancid.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm">
                  <ThermometerSnowflake className="text-[#D4AF37]" size={32} />
                  <div>
                    <h4 className="font-bold text-lg">The 30°C Rule</h4>
                    <p className="text-sm text-gray-500 font-sans leading-relaxed">We maintain a strict low-temperature grind to preserve Vitamin E and minerals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm">
                  <Activity className="text-[#D4AF37]" size={32} />
                  <div>
                    <h4 className="font-bold text-lg">Zero Oxidation</h4>
                    <p className="text-sm text-gray-500 font-sans leading-relaxed">By milling only after your order, we ensure the flour is at its peak nutritional value.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Creative Visual: The Stone Mill Story */}
            <div className="relative">
              <div className="aspect-[4/5] bg-white rounded-[4rem] shadow-2xl overflow-hidden border-8 border-white">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
                <div className="flex items-center justify-center h-full bg-[#3E2723] text-[#D4AF37] text-center p-12 italic text-2xl">
                  
                </div>
              </div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#3E2723] font-sans font-black text-[10px] uppercase tracking-widest text-center p-6 border-4 border-[#FFFDF5]"
              >
                Slow Ground • Stone Milled • 28 RPM
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VALUES (GRID) */}
      <section className="py-32 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Aarahi Promise</h2>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4 p-8 hover:bg-white hover:shadow-2xl rounded-[3rem] transition-all cursor-default">
            <div className="w-16 h-16 bg-[#F5F5DC] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Leaf className="text-[#D4AF37]" size={30} />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tighter">Whole Grain Only</h3>
            <p className="text-sm text-gray-500 font-sans leading-relaxed">No Maida. No bleaching agents. No "extra" white flour. Just the grain in its purest form.</p>
          </div>

          <div className="space-y-4 p-8 hover:bg-white hover:shadow-2xl rounded-[3rem] transition-all cursor-default">
            <div className="w-16 h-16 bg-[#F5F5DC] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="text-[#D4AF37]" size={30} />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tighter">FSSAI Certified</h3>
            <p className="text-sm text-gray-500 font-sans leading-relaxed">Modern hygiene standards combined with traditional milling methods. License: 21226008000549</p>
          </div>

          <div className="space-y-4 p-8 hover:bg-white hover:shadow-2xl rounded-[3rem] transition-all cursor-default">
            <div className="w-16 h-16 bg-[#F5F5DC] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="text-[#D4AF37]" size={30} />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tighter">Made for Moms</h3>
            <p className="text-sm text-gray-500 font-sans leading-relaxed">Founded by a mother who understands that your family's health starts in the kitchen.</p>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto bg-[#3E2723] rounded-[4rem] p-12 md:p-24 text-center text-[#D4AF37]">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to taste the <br/> Difference?</h2>
          <p className="text-white/60 font-sans mb-12 max-w-xl mx-auto">Order a Founder's Kit today and get a sample of our Sprouted Ragi flour with your first purchase.</p>
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