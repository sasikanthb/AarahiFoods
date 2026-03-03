import React from 'react';
import { motion } from 'framer-motion';

// Magnetic lift and glow effect
const cardHover = {
  initial: { y: 0, boxShadow: "0px 10px 20px rgba(0,0,0,0.05)", borderColor: "#F1F1F1" },
  hover: { 
    y: -12, 
    borderColor: "#D4AF37",
    boxShadow: "0px 30px 60px rgba(212, 175, 55, 0.15)",
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const products = [
  {
    id: 1,
    name: "Experience Pack",
    size: "1 KG",
    price: "₹85",
    tag: "The Trial",
    desc: "The perfect way to taste the 'Aarahi' difference. Enough for 15-20 fresh rotis.",
    features: ["Sample Size", "Same 24h Freshness", "Stone-Milled"],
    recommended: false
  },
  {
    id: 2,
    name: "Classic Sharbati",
    size: "5 KG",
    price: "₹390",
    tag: "Most Popular",
    desc: "Our signature grind. Milled today, delivered tomorrow for peak nutrition.",
    features: ["Family Size", "BPA-Free Bag", "Best for Daily Use"],
    recommended: true
  },
  {
    id: 3,
    name: "Wellness Subscription",
    size: "10 KG (5KG x 2)",
    price: "₹720",
    tag: "Best Value",
    desc: "A seamless flow of freshness. Two deliveries a month to ensure zero oxidation.",
    features: ["Free Delivery", "Priority Milling", "Cancel Anytime"],
    recommended: false
  }
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] pt-32 pb-24 px-6 font-serif">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[0.3em] text-[10px] font-sans font-bold text-[#8B4513]"
          >
            Bangalore's Freshness Marketplace
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 text-[#3E2723]">
            Invest in your <span className="italic text-[#D4AF37]">Wellness.</span>
          </h1>
        </div>

        {/* 3-Tier Product Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardHover}
              initial="initial"
              whileHover="hover"
              className={`relative bg-white p-8 rounded-[3rem] border-2 transition-all cursor-pointer ${
                product.recommended ? 'border-[#D4AF37] scale-105 z-10' : 'border-gray-100'
              }`}
            >
              {product.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white px-6 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest shadow-lg">
                  Recommended
                </div>
              )}

              <div className="text-center">
                {/* Product Image Placeholder */}
                <div className="mb-8 aspect-square bg-[#FDFBF7] rounded-[2.5rem] flex items-center justify-center overflow-hidden border border-gray-50 p-4">
                  <img 
                    src="/Aarahi Image 2.jpg" 
                    alt={product.name} 
                    className="w-full h-full object-contain opacity-90 group-hover:scale-105 transition-transform" 
                  />
                </div>

                <span className="text-[10px] font-sans font-bold text-[#D4AF37] uppercase tracking-widest">{product.tag}</span>
                <h3 className="text-2xl font-bold text-[#3E2723] mt-2 leading-tight">{product.name}</h3>
                <p className="text-[#8B4513] font-bold mt-1 mb-4">{product.size}</p>
                
                <p className="text-gray-500 font-sans text-xs leading-relaxed mb-6 h-12 overflow-hidden">
                  {product.desc}
                </p>

                <div className="space-y-2 mb-8">
                  {product.features.map(feature => (
                    <div key={feature} className="text-[10px] font-sans text-gray-400 uppercase tracking-tighter">
                      • {feature}
                    </div>
                  ))}
                </div>

                <div className="text-3xl font-bold text-[#3E2723] mb-8 font-sans">
                  {product.price}
                </div>

                <button className={`w-full py-4 rounded-2xl font-sans font-bold uppercase tracking-widest text-[10px] transition-all ${
                  product.recommended 
                  ? 'bg-[#3E2723] text-white shadow-xl shadow-[#D4AF37]/20' 
                  : 'bg-transparent border-2 border-[#3E2723] text-[#3E2723]'
                }`}>
                  {product.id === 3 ? 'Subscribe' : 'Add to Cart'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <p className="text-sm text-gray-400 font-sans italic">
            "We mill in small batches to ensure quality. If you order the 1 KG trial today, you get the same premium Sharbati wheat used in our 10 KG Wellness plans."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;