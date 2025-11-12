'use client';
import React from 'react';
import { ShoppingBag, Info, Mail, MapPin } from 'lucide-react';

// --- Placeholder MOCK DATA (Required for this single file to compile) ---
const products = [
    { id: 'sofa', name: 'The Serene Sofa', price: 1299.00, category: 'Furniture',
      image: '/images/serene_sofa.jpg', 
      description: 'A comfortable three-seater with linen upholstery and solid oak legs. Perfect for any living space.',
      alt: 'Modern 3-seater blue sofa'
    },
    { id: 'lamp', name: 'Minimalist Desk Lamp', price: 85.00, category: 'Lighting',
      image: '/images/minimalist_lamp.png',
      description: 'Flexible arm LED lamp with touch controls. Sleek matte black finish. Energy efficient.',
      alt: 'Black minimalist desk lamp'
    },
    { id: 'chair', name: 'Nordic Dining Chair', price: 149.00, category: 'Furniture',
      image: '/images/nordic_chair.jpg',
      description: 'Ergonomic design with padded seat and light wood frame. Available in multiple colors.',
      alt: 'Light wood and white dining chair'
    },
    // Adding more products for the catalog page
    { id: 'ottoman', name: 'Velvet Ottoman', price: 249.00, category: 'Furniture',
      image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Ottoman',
      description: 'Plush velvet fabric ottoman, perfect as a footrest or extra seating.',
      alt: 'Purple velvet ottoman'
    },
];

const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(price);
};

// Reusable component needed for this page
const ProductCard = ({ product }) => (
    <a href={`/catalog/${product.id}`} className="block bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-2 hover:border-indigo-500">
        <img
            src={product.image}
            alt={product.alt}
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/94a3b8/ffffff?text=Image+Missing'; }}
            className="w-full h-64 object-cover"
        />
        <div className="p-4 text-center">
            {/* Price is the primary textual focus under the image */}
            <p className="text-indigo-600 font-extrabold text-2xl mb-3">{formatPrice(product.price)}</p>
            {/* View Details button is kept for explicit action */}
            <div className="w-full text-center bg-gray-100 text-indigo-600 font-medium py-2 rounded-lg hover:bg-indigo-100 transition duration-300">
                View Details
            </div>
        </div>
    </a>
);
// --- END Placeholder MOCK DATA ---

const HomePage = () => {
    const featuredProducts = products.slice(0, 3);

    // Function to scroll smoothly to sections on the same page
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header / Navigation (Should ideally be in a shared Layout component in Next.js) */}
            <header className="sticky top-0 z-50 bg-white shadow-lg">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
                    <a href="/" className="text-3xl font-extrabold text-indigo-600 cursor-pointer">
                        Showcase Co.
                    </a>
                    <nav className="hidden md:flex space-x-8 items-center">
                        {/* Using href="#" for in-page anchors and full path for other pages */}
                        <a href="#catalog" onClick={(e) => { e.preventDefault(); scrollToSection('catalog'); }} className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium flex items-center"><ShoppingBag className="w-5 h-5 mr-1" /> Featured Catalog</a>
                        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium flex items-center"><Info className="w-5 h-5 mr-1" /> Our Story</a>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition duration-300 shadow-md">Get In Touch</a>
                    </nav>
                    <button className="md:hidden p-2 rounded-lg text-gray-700 hover:text-indigo-600" aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </header>

            <main className="pb-10">
                {/* Hero Section */}
                <section className="bg-indigo-50 py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            Premium Quality, Timeless Design
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Explore our curated selection of products designed for the modern lifestyle. Click any item to learn more.
                        </p>
                        {/* Link to the Full Catalog Page */}
                        <a href="/catalog" className="inline-block bg-indigo-600 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-xl hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
                            View Full Catalog
                        </a>
                    </div>
                </section>

                {/* Product Catalog Grid (Featured Items) */}
                <section id="catalog" className="py-16 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="text-4xl font-bold text-gray-800 mb-10 text-center">Featured Collections</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {/* Call to Action Banner */}
                        <div className="mt-16 bg-indigo-600 p-8 rounded-xl shadow-xl text-center">
                            <h4 className="text-3xl font-bold text-white mb-2">Ready to see more?</h4>
                            <p className="text-indigo-100 mb-6">Click below to browse hundreds more items in our full digital catalog.</p>
                            <a href="/catalog" className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition duration-300 shadow-lg">
                                Explore the Complete Range
                            </a>
                        </div>
                    </div>
                </section>

                {/* About Us Section */}
                <section id="about" className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
                            <div className="lg:w-1/2 mb-8 lg:mb-0">
                                <h3 className="text-4xl font-bold text-gray-800 mb-6">Our Story: Craftsmanship Meets Modernity</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    Showcase Co. was founded on the principle that exceptional design should be accessible. We source sustainable materials and partner with master artisans to create pieces that are both beautiful and built to last generations. Our commitment to quality ensures every item you purchase is an investment in your home.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    From the initial sketch to the final delivery, we meticulously oversee every detail, striving to minimize our environmental footprint while maximizing your satisfaction.
                                </p>
                                <button className="mt-6 text-indigo-600 font-semibold hover:underline flex items-center" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                                    Read Our Full Mission
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                            <div className="lg:w-1/2">
                                {/* Using a local path for the image */}
                                <img src="/images/artisan_workshop.jpg"
                                     alt="Artisan working in a clean, modern workshop"
                                     className="rounded-xl shadow-2xl w-full h-auto object-cover"
                                     onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x600/94a3b8/ffffff?text=Image+Missing'; }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-3xl mx-auto">
                            <h3 className="text-4xl font-bold text-gray-800 mb-4 text-center">Get In Touch</h3>
                            <p className="text-gray-600 mb-8 text-center">
                                We'd love to hear from you. Send us a message and we'll respond within one business day.
                            </p>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200" placeholder="you@example.com" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea id="message" name="message" rows="4" required className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200" placeholder="Tell us about your inquiry..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="md:flex md:justify-between md:items-center">
                        <div className="mb-6 md:mb-0">
                            <h5 className="text-xl font-bold text-indigo-300 mb-2">Showcase Co.</h5>
                            <p className="text-gray-400 text-sm">&copy; 2025 All rights reserved.</p>
                        </div>
                        <div className="flex justify-center space-x-6">
                            {/* In a real app, these would be links */}
                            <svg className="w-6 h-6 text-gray-400 hover:text-indigo-400 transition duration-300 cursor-pointer" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h3V2h-3c-3.15 0-4 2.25-4 4v3.5H7v4h4V22h4z"/></svg>
                            <svg className="w-6 h-6 text-gray-400 hover:text-indigo-400 transition duration-300 cursor-pointer" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.32 17.57a.75.75 0 01-.78 1.05c-.24-.04-4.82-.04-5.06 0a.75.75 0 01-.78-1.05c.23-.38 4.67-.38 5.62 0zM12 17.5a1 1 0 100-2 1 1 0 000 2zM12 11c-2.76 0-5 2.24-5 5v.5h10V16c0-2.76-2.24-5-5-5z"/></svg>
                        </div>
                    </div>
                    <div className="mt-6 border-t border-gray-700 pt-6">
                        <p className="text-sm text-gray-400 flex justify-center items-center flex-wrap">
                            <Mail className="w-4 h-4 mr-2" /> info@showcaseco.com | <MapPin className="w-4 h-4 ml-4 mr-2" /> 101 Innovation Dr, Catalog City
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
