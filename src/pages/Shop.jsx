import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const categories = [
    "All", "Protein Bars", "Muesli", "Nut Butters", "Energy Bars", "Mini Protein Bars", "Dark Cocoa"
];

const products = [
    { id: 1, name: "Double Cocoa Protein Bar", category: "Protein Bars", price: 600, color: "bg-[#4A3728]" },
    { id: 2, name: "Peanut Butter Muesli", category: "Muesli", price: 450, color: "bg-[#D4A373]" },
    { id: 3, name: "Dark Chocolate Peanut Butter", category: "Nut Butters", price: 550, color: "bg-[#2C1810]" },
    { id: 4, name: "Cranberry Energy Bar", category: "Energy Bars", price: 400, color: "bg-[#9D0208]" },
    { id: 5, name: "Coffee Cocoa Protein Bar", category: "Protein Bars", price: 600, color: "bg-[#3E2723]" },
    { id: 6, name: "Almond Butter", category: "Nut Butters", price: 800, color: "bg-[#F5DEB3]" },
    { id: 7, name: "Hazelnut Mini Bars", category: "Mini Protein Bars", price: 350, color: "bg-[#8D6E63]" },
    { id: 8, name: "55% Dark Chocolate", category: "Dark Cocoa", price: 300, color: "bg-[#1A1A1A]" },
];

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="pt-24 min-h-screen bg-background pb-20">
            <div className="container mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-display font-bold mb-12 text-center"
                >
                    Shop All
                </motion.h1>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${activeCategory === cat
                                    ? 'bg-secondary text-white border-secondary shadow-lg'
                                    : 'bg-white text-secondary border-gray-200 hover:border-secondary hover:shadow-md'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={product.id}
                                className="group cursor-pointer"
                            >
                                <div className={`h-80 ${product.color} rounded-[2rem] mb-6 relative overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl`}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                                    {/* Hover Add to Cart */}
                                    <div className="absolute bottom-0 inset-x-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <button className="w-full bg-white text-secondary font-bold py-3 rounded-xl shadow-lg flex items-center justify-center space-x-2 hover:bg-secondary hover:text-white transition-colors">
                                            <ShoppingBag size={18} />
                                            <span>Add to Cart</span>
                                        </button>
                                    </div>
                                </div>

                                <h3 className="font-display font-bold text-xl mb-1">{product.name}</h3>
                                <p className="text-gray-500 text-sm mb-2 font-medium uppercase tracking-wide">{product.category}</p>
                                <p className="font-bold text-lg">₹{product.price}</p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Shop;
