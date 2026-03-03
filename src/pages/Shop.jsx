import React from 'react';
import { motion } from 'framer-motion';

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
    img: "/pack-1kg.jpg",
    tag: "The Trial",
    desc: "Perfect for testing the 'Aarahi' taste. Enough for 15-20 fresh rotis."
  },
  {
    id: 2,
    name: "Classic Sharbati",
    size: "5 KG",
    price: "₹390",
    img: "/pack-5kg.jpg",
    tag: "Most Popular",
    desc: "Our signature grind. The gold standard for daily Bangalore kitchens.",
    recommended: true
  },
  {
    id: 3,
    name: "Wellness Subscription",
    size: "10 KG (2 x 5KG)",
    price: "₹720",
    img: "/pack-5kg.jpg", 
    tag: "Best Value",
    desc: "Stay fresh longer. Delivered as two 5KG packs to prevent oxidation.",
    isBundle: true
  }
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] pt-32 pb-24 px-6 font-serif">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.3em] text-[10px] font-sans font-bold text-[#8B4513]">Aarahifoods.com Marketplace</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 text-[#3E2723]">
            Invest in your <span className="italic text-[#D4AF37]">Wellness.</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardHover}
              initial="initial"
              whileHover="hover"
              className={`relative bg-white p-8 rounded-[3.5rem] border-2 flex flex-col justify-between transition-all cursor-pointer ${
                product.recommended ? 'border-[#D4AF37] scale-105 z-10 shadow-lg' : 'border-gray-100'
              }`}
            >
              {product.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white px-6 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest">
                  Founder's Choice
                </div>
              )}

              <div className="text-center">
                {/* DYNAMIC IMAGE CONTAINER */}
                <div className="mb-8 aspect-square bg-[#FDFBF7] rounded-[2.5rem] flex items-center justify-center overflow-hidden border border-gray-50 p-6 relative">
                  
                  {/* BUNDLE VISUAL LOGIC */}
                  {product.isBundle ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <motion.img 
                        animate={{ x: -20, rotate: -5 }}
                        src={product.img} 
                        className="w-3/4 h-3/4 object-contain absolute opacity-40 grayscale-[20%]" 
                      />
                      <motion.img 
                        animate={{ x: 20, rotate: 5, y: [0, -10, 0] }}
                        transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }}}
                        src={product.img} 
                        className="w-3/4 h-3/4 object-contain relative z-10" 
                      />
                    </div>
                  ) : (
                    <motion.img 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      src={product.img} 
                      className="w-full h-full object-contain" 
                    />
                  )}
                </div>

                <span className="text-[10px] font-sans font-bold text-[#D4AF37] uppercase tracking-widest">{product.tag}</span>
                <h3 className="text-2xl font-bold text-[#3E2723] mt-2 leading-tight">{product.name}</h3>
                <p className="text-[#8B4513] font-bold mt-1 mb-4">{product.size}</p>
                <p className="text-gray-500 font-sans text-xs leading-relaxed mb-8">{product.desc}</p>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-[#3E2723] mb-8 font-sans">
                  {product.price}
                </div>
                <button className={`w-full py-4 rounded-2xl font-sans font-bold uppercase tracking-widest text-[10px] transition-all ${
                  product.recommended 
                  ? 'bg-[#3E2723] text-white shadow-xl shadow-[#D4AF37]/20' 
                  : 'bg-transparent border-2 border-[#3E2723] text-[#3E2723]'
                }`}>
                  {product.isBundle ? 'Start Subscription' : 'Add to Cart'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;