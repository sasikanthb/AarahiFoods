import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home as HomeIcon, HelpCircle, Search } from 'lucide-react'; // Added icons
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';

const App = () => {
  const WHATSAPP_NUMBER = "919741236515";
  
  const openWhatsApp = () => {
    const message = "Hi Aarahi! I'd like to place an order for fresh stone-milled flour. Please help me with the process.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* --- GLOBAL FLOATING WHATSAPP BUTTON --- */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { delay: 1.5 } }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={openWhatsApp}
        className="fixed bottom-32 md:bottom-8 right-4 md:right-6 z-[10000] cursor-pointer flex items-center gap-3 bg-white p-2 pr-5 rounded-full shadow-2xl border border-[#D4AF37]/20"
      >
        <div className="relative flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute w-full h-full bg-[#25D366] rounded-full"
          />
          <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg relative z-10">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.982-.363-1.747-.756-2.872-2.516-2.958-2.63-.088-.113-.719-.955-.719-1.817 0-.862.452-1.286.613-1.455.162-.169.351-.212.469-.212s.234.002.336.007c.106.005.249-.04.39.297.144.346.494 1.206.536 1.292.041.087.07.188.012.305-.058.118-.087.192-.173.293l-.261.303c-.079.096-.164.2-.071.361.093.161.412.679.885 1.1.608.54 1.121.708 1.285.798.163.089.26.073.355-.039.096-.112.411-.478.522-.641.112-.163.224-.138.377-.081.154.057.974.459 1.141.542.167.083.279.124.319.193.04.07.04.404-.105.809z"/></svg>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-sans font-bold text-[#D4AF37] uppercase leading-none mb-1">Online Now</span>
          <span className="text-sm font-sans font-bold text-[#3E2723]">Order Fresh</span>
        </div>
      </motion.div>

      {/* --- GLOBAL MOBILE NAVIGATION BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 z-[10001] flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:hidden">
        <Link to="/" className="flex flex-col items-center text-[#3E2723] active:scale-95 transition-transform">
          <HomeIcon size={22} strokeWidth={2.5} />
          <span className="text-[9px] font-bold mt-1 uppercase tracking-tighter">Home</span>
        </Link>
        <Link to="/about" className="flex flex-col items-center text-gray-400 active:scale-95 transition-transform">
          <HelpCircle size={22} />
          <span className="text-[9px] font-bold mt-1 uppercase tracking-tighter">Why Me</span>
        </Link>
        <button className="flex flex-col items-center text-gray-400 active:scale-95 transition-transform">
          <Search size={22} />
          <span className="text-[9px] font-bold mt-1 uppercase tracking-tighter">Search</span>
        </button>
        <Link to="/shop" className="relative bg-[#3E2723] text-[#D4AF37] px-4 py-2 rounded-xl flex flex-col items-center shadow-lg active:scale-95 transition-transform">
          <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-white"></span>
          </span>
          <span className="text-[8px] font-black italic leading-none uppercase">Aarahi</span>
          <span className="text-[10px] font-black uppercase tracking-tighter">Shop</span>
        </Link>
      </div>
    </Router>
  );
};

export default App;