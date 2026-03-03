import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  // Smooth scroll-in animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-white text-[#2D3436] font-serif overflow-x-hidden">
      
      {/* 1. HERO SECTION: BRIGHT & AIRY */}
      <section className="relative h-[90vh] flex items-center justify-center px-6 bg-[#F9FBF9]">
        <div className="max-w-5xl text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[0.3em] text-xs mb-6 block text-[#2D5A27] font-sans font-bold"
          >
            Milled in Bangalore • Delivered in 24 Hours
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold mb-8 leading-tight text-[#1E392A]"
          >
            The Soul of the Grain, <br />
            <span className="italic font-light text-[#A67C52]">Alive & Fresh.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl mb-12 font-sans text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Stop eating warehouse flour. Experience slow-stone milled Sharbati wheat, 
            delivered to your Bangalore home within 24 hours of milling.
          </motion.p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="bg-[#2D5A27] text-white px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#1E392A] transition-all shadow-lg">
              Claim Founder's Kit
            </button>
            <button className="border-2 border-[#2D5A27] text-[#2D5A27] px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#2D5A27] hover:text-white transition-all">
              Our Subscriptions
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE PURITY PROMISE: CLEAN GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { title: "Stone-Milled", desc: "Traditional slow grinding below 30°C to keep nutrients alive.", icon: "🌾" },
              { title: "24h Delivery", desc: "We mill only after you order. From the stones to your door in a day.", icon: "🚚" },
              { title: "MBA Managed", desc: "Aalekhya Reddy (MBA) ensures professional quality control at every step.", icon: "🎓" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-10 rounded-3xl bg-[#F9FBF9] border border-gray-100 shadow-sm"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#1E392A] mb-4">{item.title}</h3>
                <p className="font-sans text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE FOUNDER'S MANIFESTO (Aalekhya Reddy) */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-[#1E392A] mb-8 leading-tight">
              "I built Aarahi because I wanted better for my family."
            </h2>
            <p className="text-lg font-sans text-gray-700 italic mb-8 leading-relaxed">
              "As an MBA, I saw how industrial supply chains strip the life out of our staples. 
              At Aarahi, we've applied professional precision to traditional milling to bring 
              nutrition back to the Bangalore table."
            </p>
            <div className="font-sans">
              <p className="font-bold text-[#1E392A] text-xl">Aalekhya Reddy</p>
              <p className="text-sm text-[#A67C52] font-bold uppercase tracking-widest">Founder, Aarahi Foods (MBA)</p>
            </div>
          </div>
          <div className="md:w-1/2">
             <div className="aspect-square bg-white rounded-[4rem] border-8 border-white shadow-2xl flex items-center justify-center italic text-gray-300">
               [Aalekhya's Professional Photo Here]
             </div>
          </div>
        </div>
      </section>

      {/* 4. THE 24-HOUR CLOCK: SIMPLE & CLEAR */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#1E392A] mb-20">The 24-Hour Freshness Cycle</h2>
          <div className="space-y-12 text-left font-sans">
            {[
              { time: "05 AM", task: "Selection", desc: "Inspecting premium MP Sharbati for moisture and purity." },
              { time: "09 AM", task: "Cold-Milling", desc: "Slow stone-milling at 28°C to prevent nutrient burn." },
              { time: "04 PM", task: "Delivery", desc: "Hand-packed and dispatched across Bangalore." }
            ].map((step, i) => (
              <div key={i} className="flex gap-8 items-start border-l-4 border-[#2D5A27] pl-8 py-4">
                <div className="font-bold text-[#A67C52] text-xl shrink-0">{step.time}</div>
                <div>
                  <h4 className="font-bold text-[#1E392A] text-xl mb-2">{step.task}</h4>
                  <p className="text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER: CLASSIC PREMIUM */}
      <footer className="bg-[#1E392A] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Aarahi Foods.</h2>
        <p className="text-gray-400 font-sans max-w-md mx-auto mb-12">Elevating the Bangalore staple through precision and care.</p>
        <div className="text-[10px] text-gray-500 uppercase tracking-[0.5em]">
          © 2026 Aarahi Foods • Traditionally Milled • Bangalore
        </div>
      </footer>

    </div>
  );
};

export default Home;