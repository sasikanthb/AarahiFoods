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
            Milled in Bangalore • Delivered in 24 Hours
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
              className="bg-[#3E2723] text-white px-12 py-5 rounded-full text-lg font-bold border-2 border-[#3E2723] transition-all shadow-xl"
            >
              Claim Founder's Kit
            </motion.button>
            <button className="border-2 border-[#3E2723] px-12 py-5 rounded-full text-lg font-bold hover:bg-[#3E2723] hover:text-white transition-all">
              Explore Subscriptions
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. THE COMPARISON: WHY AARAHI? */}
      <section className="py-24 bg-[#FCF9F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6 tracking-tight">The Science of Freshness</h2>
            <div className="h-1 w-24 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 font-sans">
              <div className="border-l-4 border-red-200 pl-8">
                <h4 className="text-red-800 font-bold uppercase text-[10px] tracking-[0.2em] mb-2">Industrial Flour</h4>
                <p className="text-[#3E2723] font-serif text-xl italic mb-3">"Dead Calories"</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• High-speed steel rollers (Heating up to 90°C)</li>
                  <li>• Bleached and stripped of natural oils for shelf-life</li>
                  <li>• Sits in plastic bags for 3-6 months</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#D4AF37] pl-8 bg-white py-8 rounded-r-[2rem] shadow-xl">
                <h4 className="text-[#D4AF37] font-bold uppercase text-[10px] tracking-[0.2em] mb-2">Aarahi Fresh</h4>
                <p className="text-[#3E2723] font-serif text-xl font-bold mb-3">"Living Nutrition"</p>
                <ul className="text-sm text-[#3E2723] space-y-2">
                  <li>• Slow Stone-Grinding (Always under 30°C)</li>
                  <li>• 100% Wheat Germ & Bran oils kept alive</li>
                  <li>• Milled only after you order. Delivered in 24h.</li>
                </ul>
              </div>
            </div>

            <div className="relative rounded-full aspect-square bg-white shadow-2xl flex items-center justify-center p-12 border-[16px] border-[#F5F5DC]">
              <div className="text-center">
                <span className="text-6xl mb-4 block">🌾</span>
                <h3 className="text-2xl font-bold text-[#3E2723]">Pure Sharbati</h3>
                <p className="font-sans text-xs text-gray-400 mt-2 uppercase tracking-[0.2em]">Micro-milled Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE FOUNDER'S DIRECT OATH (Aalekhya Reddy) */}
      <section className="py-24 bg-white overflow-hidden border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#F5F5DC] rounded-[3rem] p-12 md:p-20 relative flex flex-col md:flex-row items-center gap-12 border border-[#D4AF37]/20 shadow-sm">
            <div className="md:w-3/5">
              <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-widest text-xs mb-4 block">The Founder's Manifesto</span>
              <h2 className="text-4xl font-bold text-[#3E2723] mb-6 leading-tight">
                "I couldn't find flour I trusted for my family's health. As an MBA, I decided to fix the supply chain myself."
              </h2>
              <p className="text-gray-700 font-sans italic mb-8 text-lg leading-relaxed">
                "Most brands sacrifice nutrition for shelf-life. At Aarahi, we've applied professional management to traditional stone-milling. We aren't a factory; we are a dedicated kitchen for your family, milling only what is needed for the day."
              </p>
              <div className="flex flex-col">
                <div className="text-[#3E2723] font-bold text-2xl font-serif">Aalekhya Reddy</div>
                <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-bold mt-1">Founder, Aarahi Foods (MBA)</div>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
               <div className="w-72 h-72 rounded-full bg-white border-8 border-white shadow-2xl flex items-center justify-center italic text-gray-300 overflow-hidden text-center p-8">
                 [Founder Photo: Aalekhya Reddy]
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 24-HOUR OBSESSION TIMELINE */}
      <section className="py-24 bg-[#FCF9F2]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#3E2723] mb-24 text-center italic font-serif tracking-tight">The 24-Hour Obsession</h2>
          
          <div className="relative">
            <div className="absolute left-5 md:left-1/2 h-full w-0.5 bg-[#D4AF37]/30 -translate-x-1/2"></div>

            <div className="space-y-24">
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex w-full md:w-1/2 justify-start md:justify-end md:pr-16">
                  <div className="w-full md:w-80 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 relative z-10 hover:shadow-md transition-shadow">
                    <div className="font-bold text-[#3E2723] mb-2 font-serif text-xl">05 AM: The Selection</div>
                    <p className="text-sm text-gray-500 font-sans leading-relaxed">We inspect Sharbati grain moisture levels. Only grains with &lt;12% moisture are approved for the day's milling.</p>
                  </div>
                </div>
                <div className="absolute left-5 md:left-1/2 w-12 h-12 bg-[#FFFDF5] border-2 border-[#D4AF37] rounded-full flex items-center justify-center font-bold text-[#D4AF37] -translate-x-1/2 z-20 shadow-sm">05</div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center">
                <div className="absolute left-5 md:left-1/2 w-12 h-12 bg-[#FFFDF5] border-2 border-[#D4AF37] rounded-full flex items-center justify-center font-bold text-[#D4AF37] -translate-x-1/2 z-20 shadow-sm">09</div>
                <div className="flex w-full md:w-1/2 md:ml-auto justify-start md:pl-16">
                  <div className="w-full md:w-80 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 relative z-10 hover:shadow-md transition-shadow">
                    <div className="font-bold text-[#3E2723] mb-2 font-serif text-xl">09 AM: The Slow-Grind</div>
                    <p className="text-sm text-gray-500 font-sans leading-relaxed">Stone chakki starts. We monitor the temperature every 15 minutes to ensure it never crosses 30°C.</p>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex w-full md:w-1/2 justify-start md:justify-end md:pr-16">
                  <div className="w-full md:w-80 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 relative z-10 hover:shadow-md transition-shadow">
                    <div className="font-bold text-[#3E2723] mb-2 font-serif text-xl">04 PM: Delivery Run</div>
                    <p className="text-sm text-gray-500 font-sans leading-relaxed">Your Atta is packed in breathable bags and dispatched across Bangalore immediately.</p>
                  </div>
                </div>
                <div className="absolute left-5 md:left-1/2 w-12 h-12 bg-[#FFFDF5] border-2 border-[#D4AF37] rounded-full flex items-center justify-center font-bold text-[#D4AF37] -translate-x-1/2 z-20 shadow-sm">04</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE TRANSPARENCY GRID */}
      <section className="py-24 bg-[#3E2723] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16 italic text-[#D4AF37]">The Aarahi Purity Standard</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-10 border border-white/10 rounded-[2.5rem] bg-white/5">
              <div className="text-[#D4AF37] text-3xl mb-4">✓</div>
              <h4 className="font-bold text-xl mb-4">Zero Preservatives</h4>
              <p className="text-gray-400 text-sm font-sans leading-relaxed">No chemicals to artificially extend life. Our flour is alive, meant to be consumed fresh by your family.</p>
            </div>
            <div className="p-10 border border-white/10 rounded-[2.5rem] bg-white/5">
              <div className="text-[#D4AF37] text-3xl mb-4">✓</div>
              <h4 className="font-bold text-xl mb-4">Non-GMO Grains</h4>
              <p className="text-gray-400 text-sm font-sans leading-relaxed">We only source heirloom Sharbati seeds. No lab-modified wheat, ever. Pure as nature intended.</p>
            </div>
            <div className="p-10 border border-white/10 rounded-[2.5rem] bg-white/5">
              <div className="text-[#D4AF37] text-3xl mb-4">✓</div>
              <h4 className="font-bold text-xl mb-4">Milled in Bangalore</h4>
              <p className="text-gray-400 text-sm font-sans leading-relaxed">A clean, sanitized milling facility right in the city. We are your local partners in wellness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SUBSCRIPTION TIERS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-20 text-[#3E2723]">Investment in Family Health</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
            <div className="border-2 border-gray-100 p-10 rounded-[3rem] bg-white hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-2">Standard (5KG)</h3>
              <p className="font-sans text-gray-400 mb-8 text-sm italic">Ideal for smaller families</p>
              <div className="text-5xl font-bold mb-10 text-[#3E2723]">₹390 <span className="text-lg font-normal text-gray-400">/ mo</span></div>
              <button className="w-full py-5 rounded-2xl border-2 border-[#3E2723] font-bold uppercase tracking-widest text-xs">Buy Once</button>
            </div>
            <div className="border-4 border-[#D4AF37] p-10 rounded-[3rem] bg-[#FFFDF5] shadow-2xl relative scale-105">
              <div className="absolute top-0 right-0 bg-[#D4AF37] text-white px-8 py-2 rounded-bl-3xl text-xs font-bold uppercase tracking-widest">Recommended</div>
              <h3 className="text-2xl font-bold mb-2">Wellness Plan (10KG)</h3>
              <p className="font-sans text-gray-400 mb-8 text-sm italic">2 Deliveries x 5kg for maximum freshness</p>
              <div className="text-5xl font-bold mb-10 text-[#3E2723]">₹720 <span className="text-lg font-normal text-gray-400">/ mo</span></div>
              <button className="w-full py-5 rounded-2xl bg-[#3E2723] text-white font-bold uppercase tracking-widest text-xs">Subscribe & Save</button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#3E2723] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 italic tracking-tight text-[#D4AF37]">Aarahi Foods</h2>
          <p className="font-sans text-gray-400 mb-12 max-w-lg mx-auto">Elevating the daily staple across Bangalore through professional management and cold-milled precision.</p>
          <div className="pt-8 border-t border-white/10 text-[10px] text-gray-500 uppercase tracking-widest font-sans">
            © 2026 Aarahi Foods • Traditionally Milled • Modernly Delivered
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;