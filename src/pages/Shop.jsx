import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCheckCircle, FaLeaf, FaTruckLoading } from 'react-icons/fa';

const Shop = () => {
  const whatsappNumber = "91XXXXXXXXXX"; // Replace with your actual number

  const plans = [
    {
      name: "Standard Freshness",
      weight: "5KG",
      price: "390",
      description: "Perfect for couples or small families. Milled on demand.",
      features: ["Single 5kg Breathable Bag", "Traditional Stone-Milling", "24h Doorstep Delivery", "FSSAI Grade Quality"],
      recommended: false
    },
    {
      name: "Family Wellness Subscription",
      weight: "10KG",
      price: "720",
      description: "Our most popular startup plan. Maximum nutrition for kids & elders.",
      features: ["Two 5kg Deliveries (Freshness x2)", "Free Handcrafted Wooden Scoop", "Priority Milling Slots", "Monthly Subscription Savings"],
      recommended: true
    }
  ];

  const handleOrder = (plan) => {
    const message = `Hi Aarahi Foods! I want to book a milling slot for the ${plan.name} (${plan.weight}). Please share payment details and next available delivery date for my neighborhood.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] pt-24 pb-20 font-serif">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-[#3E2723] mb-4"
          >
            Freshness on Demand
          </motion.h1>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto italic">
            "We don't stock flour. We stock grain. Your milling starts only after you book your slot."
          </p>
        </div>

        {/* Startup Trust Banner */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: <FaLeaf />, title: "100% Sharbati", desc: "No blending with cheaper wheat." },
            { icon: <FaTruckLoading />, title: "Milled-to-Order", desc: "Zero warehouse sitting time." },
            { icon: <FaCheckCircle />, title: "Route-Based Delivery", desc: "North Bangalore optimized." }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-[#D4AF37] text-2xl">{item.icon}</div>
              <div className="font-sans">
                <div className="font-bold text-[#3E2723] text-sm">{item.title}</div>
                <div className="text-xs text-gray-500">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className={`relative bg-white p-10 rounded-[3rem] border-2 ${plan.recommended ? 'border-[#D4AF37] shadow-2xl scale-105' : 'border-gray-100 shadow-lg'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-10 bg-[#D4AF37] text-white px-6 py-2 rounded-b-2xl font-sans text-xs font-bold uppercase tracking-widest">
                  Best for Health
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-[#3E2723] mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-[#D4AF37] mb-6">
                ₹{plan.price} <span className="text-lg font-normal text-gray-400">/ {plan.weight}</span>
              </div>
              
              <p className="font-sans text-gray-500 text-sm mb-8 leading-relaxed">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 font-sans text-sm text-[#3E2723]">
                    <FaCheckCircle className="text-[#D4AF37] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleOrder(plan)}
                className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-bold transition-all ${plan.recommended ? 'bg-[#3E2723] text-white' : 'border-2 border-[#3E2723] text-[#3E2723]'}`}
              >
                <FaWhatsapp className="text-xl" />
                Book Milling Slot
              </button>
            </motion.div>
          ))}
        </div>

        {/* Startup Quality Note */}
        <div className="mt-24 text-center border-t border-gray-100 pt-12">
          <p className="font-sans text-xs text-gray-400 uppercase tracking-[0.4em] mb-4">Our Commitment</p>
          <p className="max-w-3xl mx-auto font-sans text-sm text-gray-500 leading-relaxed">
            As a boutique food startup, we prioritize quality over quantity. If we reach our daily milling capacity, we will queue your order for the next available 24-hour cycle. We never rush the stones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;