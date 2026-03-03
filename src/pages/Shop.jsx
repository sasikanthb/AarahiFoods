import React from 'react';
import { motion } from 'framer-motion';

const cardHover = {
  initial: { y: 0, boxShadow: "0px 10px 20px rgba(0,0,0,0.05)" },
  hover: { 
    y: -10, 
    borderColor: "#D4AF37",
    boxShadow: "0px 30px 60px rgba(212, 175, 55, 0.15)",
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const products = [
  {
    id: 1,
    name: "Classic Sharbati Atta",
    size: "5 KG",
    price: "₹390",
    tag: "Fresh Start",
    desc: "Milled within 24 hours of your order. Perfect for small families.",
    features: ["Cold-Milled", "Zero Additives", "MP Sharbati"]
  },
  {
    id: 2,
    name: "Wellness Subscription",
    size: "10 KG (5KG x 2)",
    price: "₹720",
    tag: "Best Value",
    desc: "Two fresh deliveries a month to ensure your rotis stay soft and alive.",
    features: ["Free Delivery", "Priority Milling", "Cancel Anytime"],
    recommended: true
  }
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] pt-32 pb-24 px-6 font-serif">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[0.3em] text-[10px] font-sans font-bold text-[#8B4513]"
          >
            Bangalore's Freshness Subscription
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 text-[#3E2723]">
            Choose Your <span className="italic text-[#D4AF37]">Freshness.</span>
          </h1>
          <p className="mt-6 text-gray-600 font-sans max-w-xl mx-auto">
            We don't stock flour. We mill for you. Select a plan below to start your journey toward better health.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardHover}
              initial="initial"
              whileHover="hover"
              className={`relative bg-white p-10 rounded-[3rem] border-2 transition-colors cursor-pointer ${
                product.recommended ? 'border-[#D4AF37]' : 'border-gray-100'
              }`}
            >
              {product.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white px-6 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="text-center">
                <span className="text-sm font-sans font-bold text-[#D4AF37] uppercase tracking-widest">{product.tag}</span>
                <h3 className="text-3xl font-bold text-[#3E2723] mt-2">{product.name}</h3>
                <p className="text-[#8B4513] font-bold mt-1">{product.size}</p>
                
                <div className="my-8 aspect-square bg-[#FDFBF7] rounded-[2rem] flex items-center justify-center overflow-hidden border border-gray-50">
                   {/* This is where your Aarahi Image 2.jpg would look great */}
                   <img src="/Aarahi Image 2.jpg" alt={product.name} className="w-full h-full object-cover opacity-80 hover:scale-110 transition-transform duration-700" />
                </div>

                <p className="text-gray-500 font-sans text-sm leading-relaxed mb-8">
                  {product.desc}
                </p>

                <div className="space-y-3 mb-10">
                  {product.features.map(feature => (
                    <div key={feature} className="flex items-center justify-center gap-2 text-xs font-sans text-[#3E2723]">
                      <span className="text-[#D4AF37]">✓</span> {feature}
                    </div>
                  ))}
                </div>

                <div className="text-4xl font-bold text-[#3E2723] mb-8">
                  {product.price}
                </div>

                <button className={`w-full py-5 rounded-2xl font-sans font-bold uppercase tracking-widest text-xs transition-all ${
                  product.recommended 
                  ? 'bg-[#3E2723] text-white hover:bg-[#D4AF37] shadow-xl shadow-[#D4AF37]/20' 
                  : 'bg-transparent border-2 border-[#3E2723] text-[#3E2723] hover:bg-[#3E2723] hover:text-white'
                }`}>
                  {product.recommended ? 'Start Subscription' : 'Buy One-Time'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reassurance Section */}
        <div className="mt-32 text-center border-t border-gray-100 pt-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold text-[#3E2723] mb-2">Flexible Delivery</h4>
              <p className="text-sm text-gray-500 font-sans">Pause or skip your subscription any time via WhatsApp.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#3E2723] mb-2">Freshness Promise</h4>
              <p className="text-sm text-gray-500 font-sans">If it's not the softest roti you've had, the next bag is on us.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#3E2723] mb-2">MBA Managed</h4>
              <p className="text-sm text-gray-500 font-sans">Quality checked batches managed by Aalekhya Reddy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;