import React from 'react';
import { motion } from 'framer-motion';

// 1. Define the "Floating" animation for reuse
const floatingImage = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 bg-[#F5F5DC]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 block text-[#8B4513] font-sans font-bold">
            Milled in Bangalore • Delivered in 24 Hours
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Stop Eating <br />
            <span className="italic text-[#D4AF37] font-light">"Dead"</span> Flour.
          </h1>
          
          {/* MOVING ELEMENT: Floating Grain Icon */}
          <motion.div 
            variants={floatingImage}
            animate="animate"
            className="text-5xl mb-6"
          >
            🌾
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-[#3E2723] text-white px-12 py-5 rounded-full text-lg font-bold border-2 border-[#3E2723] hover:bg-transparent hover:text-[#3E2723] transition-all shadow-xl">
              Claim Founder's Kit
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. THE COMPARISON SECTION WITH SHAKING/FLOATING BAG */}
      <section className="py-24 bg-[#FCF9F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 font-sans">
                <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6">Alive vs. Dead</h2>
                <div className="border-l-4 border-[#D4AF37] pl-8 bg-white py-8 rounded-r-[2rem] shadow-xl">
                    <h4 className="text-[#D4AF37] font-bold uppercase text-[10px] tracking-[0.2em] mb-2">Aarahi Fresh</h4>
                    <p className="text-[#3E2723] font-serif text-xl font-bold">Ground at 28°C to keep the nutrients breathing.</p>
                </div>
            </div>

            {/* THE FLOATING PRODUCT IMAGE */}
            <motion.div 
              variants={floatingImage}
              animate="animate"
              className="relative flex justify-center"
            >
              <div className="w-80 h-80 rounded-full bg-white shadow-2xl flex items-center justify-center border-[12px] border-[#F5F5DC]">
                {/* Replace this emoji with your Pic1.png or Atta Bag image */}
                <span className="text-9xl">🥡</span> 
              </div>
              
              {/* Extra Detail: Shaking Leaf */}
              <motion.span 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-0 right-10 text-4xl"
              >
                🍃
              </motion.span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER SECTION WITH GENTLE HOVER SHAKE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#F5F5DC] rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 border border-[#D4AF37]/20 shadow-sm">
            <div className="md:w-3/5">
              <h2 className="text-4xl font-bold text-[#3E2723] mb-6">
                "As an MBA, I decided to fix the supply chain myself."
              </h2>
              <p className="text-gray-700 italic text-lg">- Aalekhya Reddy</p>
            </div>

            <div className="md:w-2/5 flex justify-center">
               {/* IMAGE THAT SHAKES ON HOVER */}
               <motion.div 
                 whileHover={{ 
                    x: [0, -2, 2, -2, 2, 0],
                    transition: { duration: 0.4 } 
                 }}
                 className="w-72 h-72 rounded-full bg-white border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer"
               >
                 <span className="text-gray-400 font-sans text-sm">[Founder Photo]</span>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 24-HOUR TIMELINE & REMAINING SECTIONS... */}
      {/* (Rest of your code remains the same as the Authority build) */}

    </div>
  );
};

export default Home;