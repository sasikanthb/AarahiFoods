import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, Info, Search, ShoppingBag, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "100% MP Sharbati Atta",
    tagline: "The Flagship Freshness",
    desc: "Sun-kissed Sehore wheat, stone-milled at 28°C. Retains the germ, bran, and all living nutrients.",
    price: "₹180",
    weight: "2 KG",
    img: "/Aarahi Image 2.jpg", // Using your existing bag image
    waText: "Hi Aarahi! I'd like to order 1 bag of the 100% MP Sharbati Atta (2 KG)."
  },
  {
    id: 2,
    name: "Navadhanya Multigrain",
    tagline: "Diabetic-Friendly Blend",
    desc: "A powerful blend of 9 heritage grains and millets. Low GI, high fiber, milled to order.",
    price: "₹220",
    weight: "2 KG",
    img: "/Aarahi Image 3.jpg", // Placeholder
    waText: "Hi Aarahi! I'd like to order 1 bag of the Navadhanya Multigrain Atta (2 KG)."
  },
  {
    id: 3,
    name: "Emmer (Khapli) Wheat",
    tagline: "The Ancient Grain",
    desc: "Rich in complex carbs and famously easy to digest. Sourced from organic heritage farms.",
    price: "₹280",
    weight: "2 KG",
    img: "/Aarahi Image 3.jpg", // Placeholder
    waText: "Hi Aarahi! I'd like to order 1 bag of the Emmer (Khapli) Wheat Atta (2 KG)."
  }
];

const Shop = () => {
  const WHATSAPP_NUMBER = "919741236515";

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const orderProduct = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3E2723] font-serif overflow-x-hidden pb-32">
      
      {/* HEADER SECTION */}
      <section className="pt-24 pb-12 px-6 text-center bg-[#F5F5DC] border-b border-[#D4AF37]/20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="uppercase tracking-[0.3em] text-[10px] mb-4 block text-[#8B4513] font-sans font-bold">
            The Bangalore Kitchen
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 italic">Aarahi <span className="text-[#D4AF37]">Fresh</span></h1>
          <p className="text-gray-600 font-sans max-w-lg mx-auto">
            We don't hold inventory. Your flour is milled only after you place your order. Delivered within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0px 20px 40px rgba(212, 175, 55, 0.15)", borderColor: "#D4AF37" }}
              className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col relative transition-all"
            >
              {/* Freshness Badge */}
              <div className="absolute top-6 left-6 bg-[#FFFDF5] border border-[#D4AF37] text-[#D4AF37] text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full z-10">
                Milled to Order
              </div>

              {/* Product Image */}
              <div className="w-full h-56 bg-[#FCF9F2] rounded-2xl mb-6 overflow-hidden flex items-center justify-center relative p-4">
                 <img src={product.img} alt={product.name} className="w-full h-full object-cover rounded-xl shadow-inner opacity-90" />
              </div>

              {/* Details */}
              <div className="flex-grow">
                <span className="text-[#8B4513] text-[10px] font-bold uppercase tracking-widest font-sans">{product.tagline}</span>
                <h3 className="text-2xl font-bold mt-1 mb-3 italic">{product.name}</h3>
                <p className="text-sm text-gray-500 font-sans leading-relaxed mb-6">
                  {product.desc}
                </p>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                <div>
                  <div className="text-2xl font-bold text-[#3E2723]">{product.price}</div>
                  <div className="text-[10px] text-gray-400 font-sans font-bold uppercase tracking-widest">{product.weight}</div>
                </div>
                
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => orderProduct(product.waText)}
                  className="bg-[#3E2723] text-white px-5 py-3 rounded-xl text-sm font-bold font-sans flex items-center gap-2 shadow-lg"
                >
                  <MessageCircle size={16} className="text-[#25D366]" />
                  Order
                </motion.button>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3E2723] text-white py-16 px-6 text-center mt-12">
        <h2 className="text-3xl font-bold mb-4 italic text-[#D4AF37]">Aarahi Foods</h2>
        <div className="pt-8 border-t border-white/10 text-[10px] text-gray-500 uppercase tracking-widest font-sans">
          © 2026 Aarahi Foods • MBA-Led Quality
        </div>
      </footer>

      {/* APP-STYLE BOTTOM NAVIGATION BAR (Exact Match to Home) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 z-[9999] flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:hidden">
        
        <Link to="/" className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-all active:scale-95">
          <HomeIcon size={22} />
          <span className="text-[9px] font-bold mt-1 uppercase tracking-tighter">Home</span>
        </Link>
        
        <Link to="/about" className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-all active:scale-95">
          <Info size={22} />
          <span className="text-[9px] font-bold mt-1 uppercase tracking-tighter">Why Us</span>
        </Link>
        
        <button className="flex flex-col items-center text-gray-400 hover:text-[#3E2723] transition-all active:scale-95">
          <Search size={22} />
          <span className="text-[9px] font-bold mt-1 uppercase tracking-tighter">Search</span>
        </button>
        
        <Link to="/shop" className="relative bg-[#3E2723] text-[#D4AF37] px-4 py-2 rounded-xl flex flex-col items-center shadow-lg active:scale-95 transition-transform">
          <span className="text-[8px] font-black italic font-serif leading-none">Aarahi</span>
          <span className="text-[10px] font-black uppercase tracking-tighter">Fresh</span>
        </Link>
        
      </div>

    </div>
  );
};

export default Shop;