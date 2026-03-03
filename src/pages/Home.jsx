import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 bg-[#F5F5DC]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="uppercase tracking-widest text-sm mb-4 block text-[#8B4513]">Milled in North Bangalore</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Stop Eating <span className="italic text-[#D4AF37]">"Dead"</span> Flour.
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-sans text-gray-700">
            Slow-milled Sharbati Wheat. Ground at 30°C to preserve life. <br />
            Delivered within 24 hours of milling.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[#3E2723] text-white px-10 py-4 rounded-full text-lg hover:bg-transparent hover:text-[#3E2723] border-2 border-[#3E2723] transition-all">
              Claim Founder's Kit
            </button>
            <button className="border-2 border-[#3E2723] px-10 py-4 rounded-full text-lg hover:bg-[#3E2723] hover:text-white transition-all">
              Explore Subscriptions
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. THE 24-HOUR PROCESS SECTION (01, 02, 03, 04) */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#3E2723]">The 24-Hour Freshness Cycle</h2>
          <p className="font-sans text-gray-500 mb-16">How we ensure your Atta never sits on a shelf.</p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Sourcing", desc: "We select only premium MP Sharbati grains from trusted farmers." },
              { step: "02", title: "Cold-Milling", desc: "Slow-stone grinding at strictly under 30°C to keep nutrients alive." },
              { step: "03", title: "Sieving", desc: "Traditional mesh sieving for a rich, high-fiber texture." },
              { step: "04", title: "Delivery", desc: "At your doorstep in North Bangalore within 24 hours of milling." }
            ].map((item, index) => (
              <div key={index} className="relative p-8 bg-[#FDFBF7] rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left">
                <span className="text-5xl font-bold text-[#D4AF37]/10 absolute top-4 right-6">{item.step}</span>
                <h4 className="text-xl font-bold mb-3 text-[#3E2723]">{item.title}</h4>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SUBSCRIPTION TIERS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 text-[#3E2723]">Choose Your Freshness Plan</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border-2 border-gray-100 p-8 rounded-3xl bg-white text-left">
              <h3 className="text-2xl font-bold mb-2">Standard (5KG)</h3>
              <p className="text-4xl font-bold mb-6 text-[#3E2723]">₹390</p>
              <button className="w-full py-4 rounded-xl border-2 border-[#3E2723] font-bold">Buy Once</button>
            </div>
            <div className="border-4 border-[#D4AF37] p-8 rounded-3xl bg-[#FFFDF5] shadow-2xl scale-105 text-left">
              <h3 className="text-2xl font-bold mb-2">Family (10KG)</h3>
              <p className="text-4xl font-bold mb-6 text-[#3E2723]">₹720</p>
              <button className="w-full py-4 rounded-xl bg-[#3E2723] text-white font-bold">Subscribe & Save</button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-[#3E2723] text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 italic">Aarahi Foods</h2>
        <p className="font-sans text-gray-400 mb-8">Crafting Wellness in Yelahanka, Bangalore.</p>
        <div className="flex justify-center gap-8 text-sm uppercase tracking-widest text-gray-300">
          <span>FSSAI: 2122xxxxxxxxxx</span>
          <span>WhatsApp: +91 xxxxxxxxxx</span>
        </div>
      </footer>

    </div>
  );
};

export default Home;