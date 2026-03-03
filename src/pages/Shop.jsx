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
    desc: "Milled and packed within 24 hours. Sealed for absolute peak nutrition.",
    features: ["BPA-Free Packaging", "Hand-Inspected", "MP Sharbati"]
  },
  {
    id: 2,
    name: "Wellness Subscription",
    size: "10 KG (5KG x 2)",
    price: "₹720",
    tag: "Best Value",
    desc: "Two fresh deliveries a month. The gold standard for Bangalore kitchens.",
    features: ["Free Eco-Delivery", "Priority Milling", "Cancel Anytime"],
    recommended: true
  }
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] pt-32 pb-24 px-6 font-serif">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[0.3em] text-[10px] font-sans font-bold text-[#8B4513]"
          >
            From the Stone to your Doorstep
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 text-[#3E2723]">
            The <span className="italic text-[#D4AF37]">Freshness</span> Store
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardHover}
              initial="initial"
              whileHover="hover"
              className={`relative bg-white p-8 md:p-12 rounded-[3.5rem] border-2 transition-colors cursor-pointer ${
                product.recommended ? 'border-[#D4AF37]' : 'border-gray-100'
              }`}
            >
              {product.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white px-6 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest shadow-lg">
                  Recommended for Families
                </div>
              )}

              <div className="text-center">
                {/* PACKAGING IMAGE SECTION */}
                <div className="mb-10 relative group">
                  <div className="absolute inset-0 bg-[#D4AF37]/5 rounded-[2.5rem] scale-95 group-hover:scale-100 transition-transform duration-500"></div>
                  <img 
                    src="/Aarahi Image 2.jpg" 
                    alt="Premium Aarahi Packaging" 
                    className="relative z-10 w-full h-72 object-cover rounded-[2.5rem] shadow-inner" 
                  />
                </div>

                <span className="text-[10px] font-sans font-bold text-[#D4AF37] uppercase tracking-[0.2em]">{product.tag}</span>
                <h3 className="text-3xl font-bold text-[#3E2723] mt-2 tracking-tight">{product.name}</h3>
                <p className="text-[#8B4513] font-bold mt-1 mb-6">{product.size}</p>
                
                <p className="text-gray-500 font-sans text-sm leading-relaxed mb-8 px-4">
                  {product.desc}
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  {product.features.map(feature => (
                    <span key={feature} className="text-[10px] font-sans font-bold text-gray-400 border border-gray-100 px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="text-4xl font-bold text-[#3E2723] mb-8">
                  {product.price}
                </div>

                <button className={`w-full py-5 rounded-2xl font-sans font-bold uppercase tracking-widest text-[10px] transition-all ${
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

        {/* Packing Note Section */}
        <div className="mt-24 max-w-3xl mx-auto bg-white p-10 rounded-[3rem] border border-[#F5F5DC] text-center">
          <h4 className="font-bold text-[#3E2723] mb-4 font-serif italic text-2xl">Our Packing Standard</h4>
          <p className="text-sm text-gray-500 font-sans leading-relaxed">
            Every bag of Aarahi Foods is hand-packed by our team in Bangalore. We use multi-layer, 
            breathable bags that ensure your flour stays fresh without the need for toxic preservatives. 
            Milled. Packed. Delivered. All within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;