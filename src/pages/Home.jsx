import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden">
      
      {/* 1. THE CLASSIC HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 bg-[#F5F5DC]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block text-[#8B4513] font-sans font-bold">
            Milled in Bangalore • Delivered in 24 Hours
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Stop Eating <span className="italic text-[#D4AF37]">"Dead"</span> Flour.
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-sans text-gray-700 max-w-2xl mx-auto">
            Slow-milled Sharbati Wheat. Ground at 30°C to preserve life. <br />
            MBA-led precision meets traditional stone-milling.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[#3E2723] text-white px-10 py-4 rounded-full text-lg hover:bg-transparent hover:text-[#3E2723] border-2 border-[#3E2723] transition-all font-sans font-bold">
              Claim Founder's Kit
            </button>
            <button className="border-2 border-[#3E2723] px-10 py-4 rounded-full text-lg hover:bg-[#3E2723] hover:text-white transition-all font-sans font-bold">
              Explore Subscriptions
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. THE PURITY GRID (01-04) */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#3E2723]">The 24-Hour Freshness Cycle</h2>
          <p className="font-sans text-gray-500 mb-16 italic text-lg">How we ensure your family never eats old flour again.</p>
          
          <div className="grid md:grid-cols-4 gap-8 text-left">
            {[
              { step: "01", title: "Selection", desc: "Sourcing only premium MP Sharbati grains with perfect moisture levels." },
              { step: "02", title: "Cold-Milling", desc: "Slow-stone grinding at strictly under 30°C to keep nutrients alive." },
              { step: "03", title: "Quality Check", desc: "MBA-led precision ensures every batch meets our FSSAI+ standards." },
              { step: "04", title: "Delivery", desc: "At your doorstep in Bangalore within 24 hours of milling." }
            ].map((item, index) => (
              <div key={index} className="relative p-8 bg-[#FDFBF7] rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-5xl font-bold text-[#D4AF37]/10 absolute top-4 right-6">{item.step}</span>
                <h4 className="text-xl font-bold mb-3 text-[#3E2723]">{item.title}</h4>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE FOUNDER'S DIRECT OATH (Aalekhya Reddy) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#F5F5DC] rounded-[3rem] p-12 md:p-20 relative flex flex-col md:flex-row items-center gap-12 border border-[#D4AF37]/20 shadow-sm">
            <div className="md:w-3/5">
              <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-widest text-xs mb-4 block">A Startup Built on Trust</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-6 leading-tight">
                "I couldn't find flour I trusted for my family's health. As an MBA, I decided to fix the supply chain myself."
              </h2>
              <p className="text-gray-700 font-sans italic mb-8 text-lg leading-relaxed">
                "Most brands sacrifice nutrition for shelf-life. At Aarahi, we've applied professional management to traditional stone-milling. We aren't a factory; we are a dedicated kitchen for Bangalore families."
              </p>
              <div className="flex flex-col">
                <div className="text-[#3E2723] font-bold text-2xl font-serif">Aalekhya Reddy</div>
                <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-bold mt-1">Founder, Aarahi Foods (MBA)</div>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
               <div className="w-72 h-72 rounded-full bg-white border-8 border-white shadow-2xl flex items-center justify-center italic text-gray-400 overflow-hidden text-center p-8">
                 [Founder Photo: Aalekhya Reddy]
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SUBSCRIPTION TIERS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-20 text-[#3E2723]">Investment in Family Health</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
            <div className="border-2 border-gray-100 p-10 rounded-[3rem] bg-white hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-2">Standard (5KG)</h3>
              <p className="font-sans text-gray-400 mb-8 text-sm italic">Perfect for couples and small families</p>
              <div className="text-5xl font-bold mb-10 text-[#3E2723]">₹390 <span className="text-lg font-normal text-gray-400">/ mo</span></div>
              <button className="w-full py-5 rounded-2xl border-2 border-[#3E2723] font-bold uppercase tracking-widest text-xs font-sans">Buy Once</button>
            </div>
            <div className="border-4 border-[#D4AF37] p-10 rounded-[3rem] bg-[#FFFDF5] shadow-2xl relative scale-105 transition-transform">
              <div className="absolute top-0 right-0 bg-[#D4AF37] text-white px-8 py-2 rounded-bl-3xl text-xs font-bold uppercase tracking-widest font-sans">Recommended</div>
              <h3 className="text-2xl font-bold mb-2">Wellness Plan (10KG)</h3>
              <p className="font-sans text-gray-400 mb-8 text-sm italic">2 Deliveries x 5kg for maximum freshness</p>
              <div className="text-5xl font-bold mb-10 text-[#3E2723]">₹720 <span className="text-lg font-normal text-gray-400">/ mo</span></div>
              <button className="w-full py-5 rounded-2xl bg-[#3E2723] text-white font-bold uppercase tracking-widest text-xs font-sans">Subscribe & Save</button>
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