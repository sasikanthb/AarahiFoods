import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#1A1512] font-serif overflow-x-hidden">
      
      {/* 1. DISRUPTIVE HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center px-6 bg-[#1A1512] overflow-hidden">
        {/* Animated Background Glow */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-[600px] h-[600px] bg-[#FDB813] rounded-full blur-[120px] -top-48 -left-48"
        />
        
        <div className="max-w-5xl relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span 
              variants={fadeInUp}
              className="uppercase tracking-[0.5em] text-[10px] md:text-xs mb-8 block text-[#FDB813] font-sans font-black"
            >
              A Bangalore Food Startup
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-9xl font-bold mb-8 leading-[0.9] text-white tracking-tighter"
            >
              Alive <br /> 
              <span className="text-[#FDB813] italic font-light">Nutrition.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-2xl mb-12 font-sans text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Milled today. On your table tomorrow. <br />
              MBA-led precision meets traditional stone-milling.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: "#ffffff", color: "#1A1512" }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#FDB813] text-[#1A1512] px-14 py-6 rounded-full text-sm font-black uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(253,184,19,0.3)]"
              >
                Join the Subscription
              </motion.button>
              <button className="text-white border border-white/30 px-14 py-6 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                Our Story
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE FOUNDER'S MANIFESTO CARD */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <h2 className="text-5xl md:text-7xl font-bold leading-none mb-12">
                Why we are <br /><span className="text-[#FDB813]">different.</span>
              </h2>
              <div className="space-y-12">
                <div>
                  <h4 className="text-[#FDB813] font-sans font-bold uppercase text-xs mb-2">01. Thermal Integrity</h4>
                  <p className="text-2xl font-medium leading-tight text-[#1A1512]">We mill at 28°C. Industrial mills hit 90°C, burning the nutrients away.</p>
                </div>
                <div>
                  <h4 className="text-[#FDB813] font-sans font-bold uppercase text-xs mb-2">02. Freshness Guarantee</h4>
                  <p className="text-2xl font-medium leading-tight text-[#1A1512]">Delivered within 24 hours across Bangalore to prevent oxidation.</p>
                </div>
              </div>
            </motion.div>

            {/* Founder Card with Perspective Hover */}
            <motion.div 
               whileHover={{ rotateY: 8, rotateX: -5 }}
               style={{ perspective: 1000 }}
               className="bg-[#1A1512] p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden"
            >
              <h3 className="text-3xl font-bold mb-6 italic text-[#FDB813]">"I couldn't find flour I trusted for my family's health. As an MBA, I decided to fix the supply chain myself."</h3>
              <p className="text-lg font-sans text-gray-400 leading-relaxed mb-8">
                Aarahi is where maternal care meets professional precision. We are a kitchen for the city, not a factory.
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-xs text-gray-500">Photo</div>
                <div>
                  <p className="font-bold text-lg">Aalekhya Reddy</p>
                  <p className="text-xs text-[#FDB813] uppercase tracking-widest">Founder (MBA)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. THE REVEAL TIMELINE */}
      <section className="py-32 bg-[#F9F7F2]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold mb-4">The Freshness Clock</h2>
            <div className="h-1 w-20 bg-[#FDB813] mx-auto"></div>
          </div>

          {[
            { time: "05:00", task: "Selection", desc: "Sourcing MP Sharbati with &lt;12% moisture." },
            { time: "09:00", task: "Cold-Milling", desc: "Slow stone grinding at strictly under 30°C." },
            { time: "16:00", task: "Logistics", desc: "Fresh flour dispatched across Bangalore." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-12 mb-24 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="text-7xl md:text-9xl font-black opacity-10 font-sans">{item.time}</div>
              <div className="bg-white p-12 rounded-[3rem] shadow-xl flex-1 border-b-8 border-[#FDB813]">
                <h4 className="text-2xl font-bold mb-2">{item.task}</h4>
                <p className="text-gray-500 font-sans">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. SUBSCRIPTION TIERS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div className="border-2 border-gray-100 p-12 rounded-[3rem] hover:shadow-2xl transition-all">
                <h3 className="text-2xl font-bold mb-6">Standard (5KG)</h3>
                <div className="text-5xl font-bold mb-10 text-[#1A1512]">₹390</div>
                <button className="w-full py-5 rounded-2xl border-2 border-[#1A1512] font-black uppercase tracking-widest text-xs">Buy Once</button>
              </div>
              <div className="bg-[#1A1512] p-12 rounded-[3rem] text-white shadow-2xl relative scale-105">
                <div className="absolute top-0 right-0 bg-[#FDB813] text-[#1A1512] px-8 py-2 rounded-bl-3xl text-xs font-black uppercase tracking-widest">Recommended</div>
                <h3 className="text-2xl font-bold mb-6">Wellness (10KG)</h3>
                <div className="text-5xl font-bold mb-10 text-[#FDB813]">₹720</div>
                <button className="w-full py-5 rounded-2xl bg-[#FDB813] text-[#1A1512] font-black uppercase tracking-widest text-xs shadow-xl shadow-[#FDB813]/20">Subscribe & Save</button>
              </div>
           </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#1A1512] text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 italic text-[#FDB813]">Aarahi Foods.</h2>
        <p className="text-gray-500 font-sans max-w-md mx-auto mb-12">The future of family wellness, delivered fresh across Bangalore.</p>
        <div className="pt-8 border-t border-white/5 text-[10px] text-gray-600 uppercase tracking-widest font-sans">
          © 2026 Aarahi Foods • MBA-Led Quality • Bangalore
        </div>
      </footer>

    </div>
  );
};

export default Home;