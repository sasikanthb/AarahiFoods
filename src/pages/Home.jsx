import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden">
      
      {/* 1. ULTRA-PREMIUM HERO SECTION */}
      <section className="relative h-[95vh] flex items-center justify-center text-center px-6 bg-[#F5F5DC]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#8B4513 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl relative z-10"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="uppercase tracking-[0.3em] text-xs mb-6 block text-[#8B4513] font-sans font-bold"
          >
            Milled in North Bangalore • Delivered in 24 Hours
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1]">
            Stop Eating <br />
            <span className="italic text-[#D4AF37] font-light">"Dead"</span> Flour.
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 font-sans text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Slow-milled Sharbati Wheat. Ground at 30°C to preserve the soul of the grain.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(212, 175, 55, 0)", "0px 0px 25px rgba(212, 175, 55, 0.4)", "0px 0px 0px rgba(212, 175, 55, 0)"] 
              }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="bg-[#3E2723] text-white px-12 py-5 rounded-full text-lg font-bold border-2 border-[#3E2723] transition-all"
            >
              Claim Founder's Kit
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="border-2 border-[#3E2723] px-12 py-5 rounded-full text-lg font-bold hover:bg-[#3E2723] hover:text-white transition-all"
            >
              Explore Subscriptions
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* 2. THE COMPARISON: WHY AARAHI? */}
      <section className="py-24 bg-[#FCF9F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6">The Science of Freshness</h2>
            <div className="h-1 w-24 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 font-sans">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="border-l-4 border-red-200 pl-8"
              >
                <h4 className="text-red-800 font-bold uppercase text-xs tracking-widest mb-2">Industrial Flour</h4>
                <p className="text-[#3E2723] font-serif text-xl italic mb-3">"Dead Calories"</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• High-speed steel rollers (Heating up to 90°C)</li>
                  <li>• Bleached and stripped of natural oils for shelf-life</li>
                  <li>• Sits in plastic bags for 3-6 months before reaching you</li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="border-l-4 border-[#D4AF37] pl-8 bg-white py-6 rounded-r-3xl shadow-xl"
              >
                <h4 className="text-[#D4AF37] font-bold uppercase text-xs tracking-widest mb-2">Aarahi Fresh</h4>
                <p className="text-[#3E2723] font-serif text-xl font-bold mb-3">"Living Nutrition"</p>
                <ul className="text-sm text-[#3E2723] space-y-2">
                  <li>• Slow Stone-Grinding (Always under 30°C)</li>
                  <li>• 100% Wheat Germ & Bran oils kept alive</li>
                  <li>• Milled only after you order. Delivered in 24h.</li>
                </ul>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-[#D4AF37]/20 rounded-full"
              ></motion.div>
              <div className="relative rounded-full aspect-square bg-white shadow-2xl flex items-center justify-center p-12 border-[16px] border-[#F5F5DC]">
                <div className="text-center">
                  <span className="text-6xl mb-4 block">🌾</span>
                  <h3 className="text-2xl font-bold text-[#3E2723]">100% Pure</h3>
                  <p className="font-sans text-xs text-gray-400 mt-2 uppercase tracking-[0.2em]">MP Sharbati Soul</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 24-HOUR PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-4xl font-bold text-[#3E2723] mb-4">The Ritual of Milling</h2>
              <p className="font-sans text-gray-500">From the fields of MP to your table in Bangalore.</p>
            </div>
            <div className="text-[#D4AF37] font-bold tracking-tighter text-lg underline">Watch the Film</div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Sourcing", desc: "Select MP Sharbati grains from trusted farmers." },
              { step: "02", title: "Cold-Milling", desc: "Stone-grinding under 30°C to keep nutrients alive." },
              { step: "03", title: "Sieving", desc: "Traditional mesh for a rich, high-fiber texture." },
              { step: "04", title: "Delivery", desc: "At your doorstep within 24 hours of milling." }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -10 }}
                className="relative p-10 bg-[#FDFBF7] rounded-[2rem] border border-gray-100 shadow-sm transition-all"
              >
                <span className="text-6xl font-bold text-[#D4AF37]/10 absolute top-6 right-8 leading-none">{item.step}</span>
                <h4 className="text-xl font-bold mb-4 text-[#3E2723] relative z-10">{item.title}</h4>
                <p className="font-sans text-sm text-gray-600 leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SUBSCRIPTION TIERS */}
      <section className="py-24 bg-[#F5F5DC]/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-[#3E2723]">Investment in Health</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
            
            <motion.div whileHover={{ scale: 1.02 }} className="border-2 border-gray-200 p-10 rounded-[3rem] bg-white transition-all">
              <h3 className="text-2xl font-bold mb-2 text-[#3E2723]">Standard (5KG)</h3>
              <p className="font-sans text-gray-400 mb-8 text-sm italic">Ideal for smaller families</p>
              <div className="text-5xl font-bold mb-10 text-[#3E2723]">₹390 <span className="text-lg font-normal text-gray-400">/ mo</span></div>
              <button className="w-full py-5 rounded-2xl border-2 border-[#3E2723] font-bold hover:bg-[#3E2723] hover:text-white transition-all uppercase tracking-widest text-xs">Buy Once</button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="border-4 border-[#D4AF37] p-10 rounded-[3rem] bg-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-[#D4AF37] text-white px-8 py-2 rounded-bl-3xl text-xs font-bold uppercase tracking-widest">Recommended</div>
              <h3 className="text-2xl font-bold mb-2 text-[#3E2723]">Family (10KG)</h3>
              <p className="font-sans text-gray-400 mb-8 text-sm italic">Freshness delivered twice a month</p>
              <div className="text-5xl font-bold mb-10 text-[#3E2723]">₹720 <span className="text-lg font-normal text-gray-400">/ mo</span></div>
              <button className="w-full py-5 rounded-2xl bg-[#3E2723] text-white font-bold hover:opacity-90 transition-all uppercase tracking-widest text-xs shadow-lg shadow-[#3E2723]/20">Subscribe & Save</button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#3E2723] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 italic tracking-tight">Aarahi Foods</h2>
          <p className="font-sans text-gray-400 mb-12 max-w-lg mx-auto">Elevating the staple of India through cold-milled precision and 24-hour delivery freshness.</p>
          <div className="flex flex-wrap justify-center gap-10 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
            <span>Yelahanka</span>
            <span>Sahakara Nagar</span>
            <span>Hebbal</span>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 text-[10px] text-gray-500 uppercase tracking-widest font-sans">
            © 2026 Aarahi Foods • Traditionally Milled • Modernly Delivered
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;