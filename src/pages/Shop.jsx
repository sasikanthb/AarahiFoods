import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaShippingFast, FaCheckCircle } from 'react-icons/fa';
import attaBag from '../assets/images/Pic1.png';

const Shop = () => {
  const whatsappNumber = "9741236515"; // REPLACE THIS WITH YOUR BUSINESS WHATSAPP

  const products = [
    {
      id: 1,
      name: "Aarahi Starter Pack (5KG)",
      price: "390",
      description: "Milled-to-order Sharbati Atta. Best for trying the Aarahi difference.",
      features: ["Milled at 30°C", "24h Delivery"]
    },
    {
      id: 2,
      name: "Family Subscription (10KG)",
      price: "720",
      oldPrice: "780",
      description: "Our Best Seller. Includes 2 deliveries of 5KG to ensure peak freshness.",
      features: ["Free Wooden Scoop", "Free Atta Cookies", "Priority Milling Slot"],
      featured: true
    }
  ];

  const openWhatsApp = (pName) => {
    const msg = `Hi Aarahi! I want to order the ${pName}. Please share payment details.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] pt-32 pb-20 px-6 font-serif">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-[#3E2723] mb-4">The Freshness Store</h1>
        <p className="text-gray-600 font-sans mb-12 italic text-lg">Direct from our Mill to your Kitchen in North Bangalore.</p>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {products.map((p) => (
            <motion.div 
              key={p.id}
              whileHover={{ y: -5 }}
              className={`p-10 rounded-[40px] border-2 text-left relative ${p.featured ? 'border-[#D4AF37] bg-white shadow-2xl' : 'border-gray-100 bg-white/50'}`}
            >
              {p.featured && <div className="absolute -top-4 left-10 bg-[#D4AF37] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</div>}
              
              <img src={attaBag} alt="Aarahi Atta" className="w-40 mb-6 drop-shadow-2xl" />
              <h3 className="text-2xl font-bold text-[#3E2723] mb-2">{p.name}</h3>
              <p className="font-sans text-gray-500 mb-6 text-sm">{p.description}</p>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-bold text-[#3E2723]">₹{p.price}</span>
                {p.oldPrice && <span className="text-xl text-gray-400 line-through">₹{p.oldPrice}</span>}
              </div>

              <ul className="mb-10 space-y-3">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2 font-sans text-sm text-gray-700">
                    <FaCheckCircle className="text-[#81C784]" /> {f}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => openWhatsApp(p.name)}
                className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg transition-all shadow-lg ${p.featured ? 'bg-[#3E2723] text-white hover:bg-[#25D366]' : 'bg-white border-2 border-[#3E2723] text-[#3E2723] hover:bg-gray-50'}`}
              >
                <FaWhatsapp size={24} />
                Order on WhatsApp
              </button>
            </motion.div>
          ))}
        </div>

        {/* TRUST FOOTER */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-70">
          <div className="flex items-center gap-2 font-sans text-sm"><FaShippingFast /> Free Delivery in Yelahanka</div>
          <div className="flex items-center gap-2 font-sans text-sm"><FaCheckCircle /> FSSAI Certified</div>
        </div>
      </div>
    </div>
  );
};

export default Shop;