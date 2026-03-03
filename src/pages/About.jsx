import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] pt-32 pb-24 px-6 font-serif overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* 1. THE BIG HOOK */}
        <section className="mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[0.3em] text-[10px] font-sans font-bold text-[#8B4513] block mb-4"
          >
            The Aarahi Foods Origin
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold text-[#3E2723] leading-tight tracking-tighter"
          >
            Efficiency meets <br />
            <span className="italic text-[#D4AF37]">Empowerment.</span>
          </motion.h1>
        </section>

        {/* 2. THE MBA PERSPECTIVE (The Problem) */}
        <div className="grid md:grid-cols-2 gap-20 items-start mb-32">
          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            <h3 className="text-3xl font-bold text-[#3E2723] italic">The "Dead Flour" Problem</h3>
            <p>
              During my MBA, I studied supply chains that were incredibly efficient at moving goods, but terrible at preserving life. I realized that the "fresh" flour on supermarket shelves was often 45 days old—oxidized, nutrient-stripped, and chemically stabilized.
            </p>
            <p className="font-bold text-[#3E2723] border-l-4 border-[#D4AF37] pl-6 py-2">
              "I realized that the staple food of my city was effectively dead before it even reached the kitchen."
            </p>
            <p>
              I decided to pivot my professional focus toward a single goal: **Zero-Day Lag.** Milled today. Delivered today. Eaten tomorrow.
            </p>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[#F5F5DC] p-12 rounded-[4rem] border border-[#D4AF37]/20 shadow-xl"
          >
            <h4 className="text-2xl font-bold mb-6 text-[#3E2723]">Our Separation from the "Normal"</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3E2723] text-white flex items-center justify-center font-bold text-xs">A</div>
                <p className="font-sans text-sm"><b className="block">Milled at 28°C</b> Preserves the Wheat Germ oil.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3E2723] text-white flex items-center justify-center font-bold text-xs">B</div>
                <p className="font-sans text-sm"><b className="block">Zero Inventory</b> We only mill what is ordered.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3E2723] text-white flex items-center justify-center font-bold text-xs">C</div>
                <p className="font-sans text-sm"><b className="block">Personalized Control</b> Every batch is MBA-verified.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. THE FOUNDER (Aalekhya Reddy) */}
        <section className="bg-white p-12 md:p-20 rounded-[5rem] border border-gray-50 shadow-sm mb-32">
           <div className="flex flex-col md:flex-row items-center gap-16">
              {/* IMAGE 1: CLOSE UP WHEAT (Aarahi Image.jpg) */}
              <motion.div 
                whileHover={{ rotate: -3 }}
                className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative"
              >
                 <img 
                    src="/Aarahi Image.jpg" 
                    alt="Aarahi Wheat Texture" 
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-[#3E2723]/20 flex items-center justify-center">
                    <span className="text-white font-sans text-[10px] uppercase font-bold tracking-widest">Premium Sharbati</span>
                 </div>
              </motion.div>
              
              <div className="flex-1">
                 <h3 className="text-4xl font-bold text-[#3E2723] mb-4">Aalekhya Reddy</h3>
                 <p className="text-[#D4AF37] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-8">Founder & Quality Lead</p>
                 <p className="text-xl text-gray-600 leading-relaxed italic mb-8">
                   "Aarahi is the result of my commitment to feed my family—and yours—with the same precision I would apply to a global business. We are bringing the human touch back to the most important food in our lives."
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <div className="bg-[#FDFBF7] px-6 py-2 rounded-full text-[10px] font-sans font-bold uppercase border border-gray-100">MBA Managed</div>
                    <div className="bg-[#FDFBF7] px-6 py-2 rounded-full text-[10px] font-sans font-bold uppercase border border-gray-100">Cold-Milled</div>
                    <div className="bg-[#FDFBF7] px-6 py-2 rounded-full text-[10px] font-sans font-bold uppercase border border-gray-100">Bangalore Local</div>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. FINAL CALL TO ACTION */}
        <section className="text-center py-24 bg-[#3E2723] rounded-[4rem] text-white relative overflow-hidden">
           {/* Background subtle image (Aarahi Image 3.jpg) */}
           <img src="/Aarahi Image 3.jpg" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" alt="" />
           
           <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">Eat like your <br />wellness <span className="text-[#D4AF37]">matters.</span></h2>
              <p className="text-gray-400 font-sans max-w-lg mx-auto mb-12">Join the Aarahi family and experience the difference of living nutrition.</p>
              <button className="bg-[#D4AF37] text-[#3E2723] px-12 py-5 rounded-full font-sans font-bold uppercase tracking-widest text-sm hover:bg-white transition-all shadow-xl">
                 Shop the Freshness
              </button>
           </div>
        </section>

      </div>
    </div>
  );
};

export default About;