import React from 'react';
import { motion } from 'framer-motion';

// CEO NOTE: Ensure these images exist in your src/assets/images folder
import attaBag from '../assets/images/Pic1.png'; 
import scoopGift from '../assets/images/Pic3.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif">
      
      {/* 1. ULTRA-PREMIUM HERO SECTION */}
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

      {/* 2. THE AARAHI PROMISE (3-COLUMN BOXES) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl mb-4">❄️</div>
            <h3 className="text-2xl font-bold mb-2">Cold-Pressed</h3>
            <p className="font-sans text-gray-600">Stones rotate slowly to keep temperatures under 35°C, preserving natural vitamins.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🌾</div>
            <h3 className="text-2xl font-bold mb-2">MP Sharbati</h3>
            <p className="font-sans text-gray-600">The "Golden Grain" of India. Naturally sweeter, softer, and more nutritious.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-2xl font-bold mb-2">24h Freshness</h3>
            <p className="font-sans text-gray-600">We don't have a warehouse. Your flour is grain just 24 hours before it reaches you.</p>
          </div>
        </div>
      </section>

      {/* 3. SUBSCRIPTION TIERS (THE REVENUE ENGINE) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Choose Your Freshness Plan</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Standard Plan */}
            <div className="border-2 border-gray-100 p-8 rounded-3xl hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-2">Standard (5KG)</h3>
              <p className="text-gray-500 mb-6">Perfect for small families</p>
              <div className="text-4xl font-bold mb-6">₹390 <span className="text-lg font-normal text-gray-400">/mo</span></div>
              <ul className="space-y-3 mb-8 font-sans">
                <li>✓ Fresh Sharbati Atta</li>
                <li>✓ Traditional Stone Milling</li>
                <li>✓ Monthly Delivery</li>
              </ul>
              <button className="w-full py-4 rounded-xl border-2 border-[#3E2723] font-bold">Buy Once</button>
            </div>

            {/* Premium Subscription */}
            <div className="border-4 border-[#D4AF37] p-8 rounded-3xl relative bg-[#FFFDF5] shadow-2xl scale-105">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white px-6 py-1 rounded-full text-sm font-bold">MOST POPULAR</div>
              <h3 className="text-2xl font-bold mb-2">Family (10KG)</h3>
              <p className="text-gray-500 mb-6">₹72/kg - Best Value for Health</p>
              <div className="text-4xl font-bold mb-6">₹720 <span className="text-lg font-normal text-gray-400 line-through">₹780</span></div>
              <ul className="space-y-3 mb-8 font-sans">
                <li>✓ **Free** Handcrafted Wooden Scoop</li>
                <li>✓ **Free** Box of Atta Cookies</li>
                <li>✓ 2 Deliveries (5kg x 2) for Freshness</li>
                <li>✓ Priority Milling Slot</li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-[#3E2723] text-white font-bold hover:opacity-90">Subscribe & Save</button>
            </div>

          </div>
        </div>
      </section>

      {/* --- NEW: THE 24-HOUR PROCESS SECTION --- */}
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
              <div key={index} className="relative p-8 bg-[#FDFBF7] rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-5xl font-bold text-[#D4AF37]/10 absolute top-4 right-6">{item.step}</span>
                <h4 className="text-xl font-bold mb-3 text-[#3E2723]">{item.title}</h4>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER / CONTACT */}
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