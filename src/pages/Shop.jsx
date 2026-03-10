import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
// IMPORTANT: This imports your 8+ flours from the products.js file
import { products as allProducts } from '../products'; 

const cardHover = {
  initial: { y: 0, boxShadow: "0px 10px 20px rgba(0,0,0,0.05)", borderColor: "#F1F1F1" },
  hover: { 
    y: -12, 
    borderColor: "#D4AF37",
    boxShadow: "0px 30px 60px rgba(212, 175, 55, 0.15)",
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const Shop = () => {
  const WHATSAPP_NUMBER = "919741236515"; 
  const [activeCategory, setActiveCategory] = useState('All');

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter logic
  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  const handleOrder = (productName) => {
    const message = `Hi Aarahi Foods! I want to order the ${productName}. Please share the payment details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] pt-32 pb-32 px-6 font-serif">
      
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="uppercase tracking-[0.3em] text-[10px] font-sans font-bold text-[#8B4513]">Aarahifoods.com Marketplace</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 text-[#3E2723]">
          Invest in your <span className="italic text-[#D4AF37] font-light">Wellness.</span>
        </h1>
      </div>

      {/* CATEGORY FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
        {['All', 'Classics', 'Millet', 'Blends'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-2 rounded-full font-sans text-[10px] font-bold uppercase tracking-widest transition-all ${
              activeCategory === cat 
              ? 'bg-[#3E2723] text-[#D4AF37] shadow-lg' 
              : 'bg-white text-gray-400 border border-gray-100 hover:border-[#D4AF37]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={cardHover}
            initial="initial"
            whileHover="hover"
            className="relative bg-white p-8 rounded-[3.5rem] border-2 border-gray-100 flex flex-col justify-between transition-all cursor-pointer"
          >
            {product.tag && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white px-6 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest shadow-md whitespace-nowrap">
                {product.tag}
              </div>
            )}

            <div className="text-center">
              <div className="mb-8 aspect-square bg-[#FDFBF7] rounded-[2.5rem] flex items-center justify-center overflow-hidden border border-gray-50 p-6 relative">
                 <motion.img 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
                    src={product.img || "/pack-5kg.jpg"} 
                    className="w-full h-full object-contain" 
                 />
              </div>

              <span className="text-[10px] font-sans font-bold text-[#D4AF37] uppercase tracking-widest">{product.benefit || 'Pure & Fresh'}</span>
              <h3 className="text-2xl font-bold text-[#3E2723] mt-2 leading-tight">{product.name}</h3>
              <p className="text-[#8B4513] font-bold mt-1 mb-4">{product.weight || product.size}</p>
              <p className="text-gray-500 font-sans text-xs leading-relaxed mb-8">{product.description || product.desc}</p>
            </div>

            <div className="text-center mt-auto">
              <div className="text-3xl font-bold text-[#3E2723] mb-8 font-sans">
                ₹{product.price}
              </div>
              <button 
                onClick={() => handleOrder(product.name)}
                className="w-full py-4 rounded-2xl font-sans font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 bg-transparent border-2 border-[#3E2723] text-[#3E2723] hover:bg-[#3E2723] hover:text-white"
              >
                Order via WhatsApp
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MOBILE NAVIGATION BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 z-[9999] flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:hidden">
        <Link to="/" className="flex flex-col items-center text-gray-400 hover:text-[#3E2723]">
          <HomeIcon size={22} strokeWidth={2.5} />
          <span className="text-[9px] font-bold mt-1 uppercase tracking-tighter">Home</span>
        </Link>
        <Link to="/about" className="flex flex-col items-center text-gray-400 hover:text-[#3E2723]">
          <HelpCircle size={22} />
          <span className="text-[9px] font-bold mt-1 uppercase tracking-tighter">Why Me</span>
        </Link>
        <button className="flex flex-col items-center text-gray-400 hover:text-[#3E2723]">
          <Search size={22} />
          <span className="text-[9px] font-bold mt-1 uppercase tracking-tighter">Search</span>
        </button>
        <Link to="/shop" className="relative bg-[#3E2723] text-[#D4AF37] px-4 py-2 rounded-xl flex flex-col items-center shadow-lg">
          <span className="text-[8px] font-black italic font-serif leading-none uppercase">Aarahi</span>
          <span className="text-[10px] font-black uppercase tracking-tighter">Shop</span>
        </Link>
      </div>
    </div>
  );
};

export default Shop;