import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, BookOpen, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    img: "/pack-1kg.jpg", // Make sure this image exists in your public folder!
    tag: "The Trial",
    desc: "Perfect for testing the 'Aarahi' taste. Enough for 15-20 fresh rotis."
  },
  {
    id: 2,
    name: "Classic Sharbati",
    size: "5 KG",
    price: "₹390",
    img: "/pack-5kg.jpg", // Make sure this image exists in your public folder!
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
  const WHATSAPP_NUMBER = "919741236515"; 

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOrder = (productName) => {
    const message = `Hi Aarahi Foods! I want to order the ${productName}. Please share the payment details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] pt-32 pb-32 px-6 font-serif">
      
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="uppercase tracking-[0.3em] text-[10px] font-sans font-bold text-[#8B4513]">Aarahifoods.com Marketplace</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 text-[#3E2723]">
          Invest in your <span className="italic text-[#D4AF37] font-light">Wellness.</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
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
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white px-6 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest shadow-md">
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

            <div className="text-center mt-auto">
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

      {/* APP-STYLE BOTTOM NAVIGATION BAR (CLEAN VERSION) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 py-4 z-[9999] flex justify-between items-center shadow-2xl md:hidden">
        <Link to="/" className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-transform active:scale-95">
          <HomeIcon size={22} strokeWidth={2.5} />
          <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">Home</span>
        </Link>
        <Link to="/about" className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-all active:scale-95">
          <BookOpen size={22} />
          <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">Story</span>
        </Link>
        <Link to="/shop" className="flex flex-col items-center text-[#3E2723] transition-all active:scale-95">
          <ShoppingBag size={22} />
          <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">Shop</span>
        </Link>
      </div>

    </div>
  );
};

export default Shop;