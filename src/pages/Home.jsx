import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#4A3728] font-serif overflow-x-hidden">
      
      {/* 1. THE "WARM KITCHEN" HERO */}
      <section className="relative h-[85vh] flex items-center justify-center px-6 bg-[#FEF9E7] border-b-8 border-[#F3E5AB]">
        <div className="max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-[#E67E22] text-white px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-sans font-bold mb-6 inline-block">
              Bangalore's Freshest Flour
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2D1B08] leading-tight">
              Love Your Family <br /> 
              <span className="text-[#E67E22] italic font-medium">With Better Grain.</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 font-sans text-[#6D5D4E] max-w-2xl mx-auto">
              Aalekhya Reddy (MBA) founded Aarahi to bring the purity of a village 
              chakki to the modern Bangalore home. Milled today, delivered tomorrow.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-[#4A3728] text-white px-10 py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-[#E67E22] transition-all shadow-xl">
                Start My Subscription
              </button>
              <button className="bg-white text-[#4A3728] border-2 border-[#4A3728] px-10 py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-[#FFFDF5] transition-all">
                The Story
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE "WHY IT MATTERS" SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full aspect-square bg-[#FEF9E7] rounded-[3rem] rotate-3 absolute inset-0 -z-10 border-2 border-[#F3E5AB]"></div>
            <div className="w-full aspect-square bg-white rounded-[3rem] border-2 border-[#F3E5AB] flex items-center justify-center p-12 shadow-lg">
              <div className="text-center">
                <div className="text-7xl mb-4">🌾</div>
                <h3 className="text-2xl font-bold mb-2">MP Sharbati</h3>
                <p className="font-sans text-gray-500 text-sm">Cold-milled to perfection.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-[#2D1B08]">Not just flour, <br />but a promise of health.</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-2xl">🍯</span>
                <div>
                  <h4 className="font-bold text-lg">Nutrients Preserved</h4>
                  <p className="font-sans text-gray-600 text-sm italic">Stone-ground at 28°C. We never burn the grain.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl">🏡</span>
                <div>
                  <h4 className="font-bold text-lg">Milled for Bangalore</h4>
                  <p className="font-sans text-gray-600 text-sm italic">No warehouses. No weeks on a shelf. Just 24h freshness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE FOUNDER'S NOTE: WARM & PERSONAL */}
      <section className="py-24 bg-[#FEF9E7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-8 border-4 border-[#F3E5AB] overflow-hidden">
             {/* Photo of Aalekhya */}
          </div>
          <h2 className="text-3xl font-medium italic text-[#2D1B08] mb-8 leading-relaxed">
            "Every pack of Aarahi Foods that reaches a home is a step toward 
            a healthier Bangalore. From my family to yours, we ensure the 
            highest quality Sharbati is milled with absolute care."
          </h2>
          <p className="font-sans font-bold text-[#E67E22] uppercase tracking-[0.2em] text-sm">
            Aalekhya Reddy, MBA <br />
            <span className="text-[#4A3728] font-normal tracking-normal capitalize mt-1 block italic text-xs">Founder, Aarahi Foods</span>
          </p>
        </div>
      </section>

      {/* 4. FOOTER: WARM & SIMPLE */}
      <footer className="bg-[#4A3728] text-[#F3E5AB] py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 italic">Aarahi Foods.</h2>
        <p className="font-sans text-white/60 text-sm mb-8 tracking-wide uppercase">
          Traditionally Milled • Bangalore Owned
        </p>
        <div className="text-[10px] text-white/30 tracking-[0.3em]">
          © 2026 AARAHI FOODS • BUILT FOR WELLNESS
        </div>
      </footer>

    </div>
  );
};

export default Home;