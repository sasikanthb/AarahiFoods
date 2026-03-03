import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            {/* Placeholders for other links pointing to Shop for now */}
            <Route path="/byob" element={<Shop />} />
            <Route path="/new-launches" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/learn" element={<Shop />} />
          </Routes>
        </main>
        <FloatingWhatsApp />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
