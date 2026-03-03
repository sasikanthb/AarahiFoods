import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';

const App = () => {
  const WHATSAPP_NUMBER = "919741236515";
  
  const openWhatsApp = () => {
    const message = "Hi Aarahi Foods! I have a question about your fresh stone-milled flour.";
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
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-[999] cursor-pointer flex items-center gap-3 bg-white p-2 pr-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100"
      >
        <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.982-.363-1.747-.756-2.872-2.516-2.958-2.63-.088-.113-.719-.955-.719-1.817 0-.862.452-1.286.613-1.455.162-.169.351-.212.469-.212s.234.002.336.007c.106.005.249-.04.39.297.144.346.494 1.206.536 1.292.041.087.07.188.012.305-.058.118-.087.192-.173.293l-.261.303c-.079.096-.164.2-.071.361.093.161.412.679.885 1.1.608.54 1.121.708 1.285.798.163.089.26.073.355-.039.096-.112.411-.478.522-.641.112-.163.224-.138.377-.081.154.057.974.459 1.141.542.167.083.279.124.319.193.04.07.04.404-.105.809z"/>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-sans font-bold text-[#D4AF37] uppercase leading-none tracking-widest">Aarahi Support</span>
          <span className="text-xs font-sans font-bold text-[#3E2723]">WhatsApp Us</span>
        </div>
      </motion.div>
    </Router>
  );
};

export default App;