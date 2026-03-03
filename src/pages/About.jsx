import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] pt-32 pb-24 px-6 font-serif overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* 1. THE EMOTIONAL HOOK */}
        <section className="mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[0.3em] text-[10px] font-sans font-bold text-[#8B4513] block mb-4"
          >
            The Soul of Aarahi
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-[#3E2723] leading-[1.1] tracking-tighter"
          >
            A Lesson from my <br />
            <span className="italic text-[#D4AF37]">Grandmother.</span>
          </motion.h1>
        </section>

        {/* 2. THE STORY: THE CHAPATHI THAT CHANGED EVERYTHING */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-32">
          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            <h3 className="text-2xl font-bold text-[#3E2723] italic border-b-2 border-[#D4AF37] inline-block pb-2">The Silent Meal</h3>
            <p>
              It started on a day of joy. My grandmother came to visit, and knowing her love for Chapathis, we prepared her a special meal with her favorite lady’s finger fry. We were excited, waiting for that nod of approval.
            </p>
            <p>
              But after the first bite, her expression changed. She finished the meal in silence. When we asked if something was wrong, she looked at us with a heavy heart and said: 
              <br />
              <span className="text-[#8B4513] font-bold italic">"This is not a real Chapathi. This flour has no life in it."</span>
            </p>
            
            <p className="font-bold text-[#3E2723] bg-[#F5F5DC] p-8 rounded-3xl shadow-sm border-l-8 border-[#D4AF37]">
              Weeks later, at our village, she cooked for us. The Chapathis were light, incredibly soft, and didn't feel heavy at all. That was our "Aha!" moment.
            </p>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white"
          >
            <img src="/Aarahi Image 3.jpg" alt="Traditional Village Milling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/90 to-transparent flex items-end p-10">
               <div>
                 <p className="text-[#D4AF37] font-sans font-bold text-xs uppercase tracking-widest mb-2">The Realization</p>
                 <p className="text-white font-sans text-sm italic leading-relaxed">"We realized that the city was eating 'dead flour.' We wanted to bring the village's freshness back to our family and yours."</p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* 3. THE MISSION: NOT A BUSINESS, A RESTORATION */}
        <section className="mb-32 text-center bg-white p-16 md:p-24 rounded-[5rem] shadow-sm border border-gray-50">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-[#3E2723] mb-6 font-serif tracking-tight">Reviving the <span className="italic text-[#D4AF37]">Olden Days</span></h2>
              <p className="text-gray-500 font-sans leading-relaxed mb-12 italic">
                Aarahi wasn't born to build a business. It was born to bring back the nutrition and taste we lost to industrialization. We follow my grandmother's process—from selecting the right wheat to slow-milling it with patience.
              </p>
              <div className="grid md:grid-cols-3 gap-12 font-sans">
                 <div className="space-y-4">
                    <div className="w-12 h-12 bg-[#F5F5DC] rounded-full flex items-center justify-center mx-auto text-[#D4AF37] font-bold">1</div>
                    <h5 className="font-bold text-xs tracking-widest text-[#3E2723]">SELECTIVE GRAIN</h5>
                    <p className="text-[10px] text-gray-400">Picking the same high-nutrition wheat our ancestors used.</p>
                 </div>
                 <div className="space-y-4">
                    <div className="w-12 h-12 bg-[#F5F5DC] rounded-full flex items-center justify-center mx-auto text-[#D4AF37] font-bold">2</div>
                    <h5 className="font-bold text-xs tracking-widest text-[#3E2723]">SLOW COLD-MILL</h5>
                    <p className="text-[10px] text-gray-400">Maintaining village-level temperatures to keep the oils alive.</p>
                 </div>
                 <div className="space-y-4">
                    <div className="w-12 h-12 bg-[#F5F5DC] rounded-full flex items-center justify-center mx-auto text-[#D4AF37] font-bold">3</div>
                    <h5 className="font-bold text-xs tracking-widest text-[#3E2723]">INSTANT DELIVERY</h5>
                    <p className="text-[10px] text-gray-400">Because freshness has an expiration date that starts the moment the grain breaks.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. FOUNDER'S PLEDGE */}
        <section className="flex flex-col md:flex-row items-center gap-16 mb-32">
           <div className="md:w-1/3">
              <motion.div 
                whileHover={{ rotate: -5 }}
                className="bg-[#3E2723] rounded-[3rem] p-10 shadow-2xl -rotate-2"
              >
                 <p className="text-white font-serif italic text-xl leading-relaxed">
                   "Aarahi is my way of making sure my family never eats dead flour again. And now, I want the same for yours."
                 </p>
                 <div className="mt-8 text-[#D4AF37] font-sans font-bold text-xs uppercase tracking-widest">Aalekhya Reddy</div>
              </motion.div>
           </div>
           <div className="md:w-2/3">
              <h4 className="text-3xl font-bold text-[#3E2723] mb-6">Traditional Wisdom. Modern Precision.</h4>
              <p className="text-lg text-gray-600 leading-relaxed font-sans">
                My grandmother taught me that food is more than just calories—it's health and heritage. At Aarahi, we combine her traditional wisdom with MBA-level quality control. We don't stock, we don't store. We only mill the taste and freshness of the olden days back into your life.
              </p>
           </div>
        </section>

        {/* 5. CTA */}
        <div className="text-center">
           <button className="bg-[#D4AF37] text-[#3E2723] px-14 py-6 rounded-full font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#3E2723] hover:text-white transition-all shadow-2xl">
              Bring Freshness Home
           </button>
        </div>

      </div>
    </div>
  );
};

export default About;