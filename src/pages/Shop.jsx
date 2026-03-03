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
  // Your WhatsApp Number
  const WHATSAPP_NUMBER = "919741236515"; 

  const handleOrder = (productName) => {
    const message = `Hi Aarahi Foods! I'm interested in the ${productName}. Could you please help me with the order process?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] pt-32 pb-24 px-6 font-serif">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.3em] text-[10px] font-sans font-bold text-[#8B4513]">Direct-to-Home Freshness</span>
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
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white px-6 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest shadow-lg">
                  Founder's Choice
                </div>
              )}

              <div className="text-center">
                <div className="mb-8 aspect-square bg-[#FDFBF7] rounded-[2.5rem] flex items-center justify-center overflow-hidden border border-gray-50 p-6 relative">
                  {product.isBundle ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <motion.img animate={{ x: -20, rotate: -5 }} src={product.img} className="w-3/4 h-3/4 object-contain absolute opacity-40" />
                      <motion.img animate={{ x: 20, rotate: 5, y: [0, -10, 0] }} transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }}} src={product.img} className="w-3/4 h-3/4 object-contain relative z-10" />
                    </div>
                  ) : (
                    <motion.img animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} src={product.img} className="w-full h-full object-contain" />
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
                <button 
                  onClick={() => handleOrder(product.name)}
                  className={`w-full py-4 rounded-2xl font-sans font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 ${
                  product.recommended 
                  ? 'bg-[#3E2723] text-white shadow-xl shadow-[#D4AF37]/20 hover:bg-[#D4AF37]' 
                  : 'bg-transparent border-2 border-[#3E2723] text-[#3E2723] hover:bg-[#3E2723] hover:text-white'
                }`}>
                   Order via WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FLOATING WHATSAPP BUTTON --- */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => handleOrder("General Inquiry")}
          className="fixed bottom-8 right-8 z-[100] cursor-pointer flex items-center gap-3 bg-white p-2 pr-6 rounded-full shadow-2xl border border-gray-100"
        >
          <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.982-.363-1.747-.756-2.872-2.516-2.958-2.63-.088-.113-.719-.955-.719-1.817 0-.862.452-1.286.613-1.455.162-.169.351-.212.469-.212s.234.002.336.007c.106.005.249-.04.39.297.144.346.494 1.206.536 1.292.041.087.07.188.012.305-.058.118-.087.192-.173.293l-.261.303c-.079.096-.164.2-.071.361.093.161.412.679.885 1.1.608.54 1.121.708 1.285.798.163.089.26.073.355-.039.096-.112.411-.478.522-.641.112-.163.224-.138.377-.081.154.057.974.459 1.141.542.167.083.279.124.319.193.04.07.04.404-.105.809z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-sans font-bold text-gray-400 uppercase leading-none">Questions?</span>
            <span className="text-xs font-sans font-bold text-[#3E2723]">Chat with Us</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Shop;