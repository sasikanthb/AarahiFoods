import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif">
      
      {/* 1. THE STORY HEADER */}
      <section className="py-24 px-6 text-center bg-[#F5F5DC]">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6 italic">The Aarahi Origin</h1>
          <p className="text-xl font-sans leading-relaxed text-gray-700">
            It started with a simple question in a Bangalore kitchen: <br />
            <span className="font-bold text-[#3E2723]">"Why does our rotis feel different than the ones from our childhood?"</span>
          </p>
        </motion.div>
      </section>

      {/* 2. THE PROBLEM VS THE SOLUTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">The Industrial Truth</h2>
          <p className="font-sans text-gray-600 mb-4">
            Most flour you buy today was milled months ago. To survive the shelf, it's stripped of its nutrition and ground at high speeds—burning the natural oils at nearly 90°C.
          </p>
          <p className="font-sans text-gray-600">
            We call this "Dead Flour." It has no soul, no scent, and no life.
          </p>
        </div>
        <div className="bg-[#3E2723] p-12 rounded-3xl text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-[#D4AF37]">The Aarahi Way</h2>
          <p className="font-sans mb-4 opacity-90">
            We went back to the roots. We use traditional Emery Stones that rotate slowly, keeping the temperature below 35°C.
          </p>
          <p className="font-sans opacity-90">
            We don't have a warehouse. We have a mill. Your flour is grain exactly 24 hours before it reaches your table in North Bangalore.
          </p>
        </div>
      </section>

      {/* 3. FOUNDER'S MESSAGE (THE CEO MOMENT) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-24 h-24 bg-[#D4AF37] rounded-full mx-auto mb-8 flex items-center justify-center text-white text-3xl font-bold">
            A
          </div>
          <h3 className="text-2xl font-bold mb-4">A Note from the Founder</h3>
          <p className="text-lg italic text-gray-600 mb-8 font-sans">
            "Aarahi is not a grocery company. It is a wellness initiative. We believe that the foundation of a healthy Indian home is the 'Pehli Roti'. We are here to make sure that roti is as fresh as nature intended."
          </p>
          <div className="h-px w-20 bg-[#3E2723] mx-auto mb-4"></div>
          <p className="font-bold uppercase tracking-widest text-sm">Founded in Yelahanka, 2026</p>
        </div>
      </section>

      {/* 4. THE 24-HOUR PROMISE BANNER */}
      <section className="py-12 bg-[#81C784] text-white text-center">
        <h2 className="text-2xl font-bold">Milled Today. Delivered Tomorrow. Guaranteed.</h2>
      </section>

    </div>
  );
};

export default About;