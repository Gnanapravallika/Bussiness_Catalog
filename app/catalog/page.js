'use client';
import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

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
    { id: 'ottoman', name: 'Velvet Ottoman', price: 249.00, category: 'Furniture',
      image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Ottoman',
      description: 'Plush velvet fabric ottoman, perfect as a footrest or extra seating.',
      alt: 'Purple velvet ottoman'
    },
    { id: 'table', name: 'Glass Coffee Table', price: 499.00, category: 'Furniture',
      image: 'https://placehold.co/600x400/7c3aed/ffffff?text=Coffee+Table',
      description: 'Sleek, tempered glass coffee table with a polished chrome base.',
      alt: 'Glass coffee table'
    },
    { id: 'rug', name: 'Geometric Area Rug', price: 199.00, category: 'Decor',
      image: 'https://placehold.co/600x400/9333ea/ffffff?text=Area+Rug',
      description: 'Soft wool blend rug with a modern black and white geometric pattern.',
      alt: 'Black and white geometric area rug'
    },
];

const testimonials = [
    { id: 1, quote: "The Serene Sofa is even better in person! The quality and comfort are unmatched. Shipping was fast and setup was easy.", name: "Sarah J.", rating: 5 },
    { id: 2, quote: "I love the minimalist desk lamp. It perfectly lights my workspace without taking up too much room.", name: "Mark L.", rating: 5 },
    { id: 3, quote: "Beautiful dining chairs. They instantly elevated my dining room look. Great price for the style.", name: "Emily D.", rating: 4 },
];

const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(price);
};

const ProductCard = ({ product }) => (
    <a href={`/catalog/${product.id}`} className="block bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-2 hover:border-indigo-500">
        <img
            src={product.image}
            alt={product.alt}
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/94a3b8/ffffff?text=Image+Missing'; }}
            className="w-full h-64 object-cover"
        />
        <div className="p-4 text-center">
            <p className="text-indigo-600 font-extrabold text-xl mb-3">{formatPrice(product.price)}</p>
            <div className="w-full text-center bg-gray-100 text-indigo-600 font-medium py-2 rounded-lg hover:bg-indigo-100 transition duration-300">
                View Details
            </div>
        </div>
    </a>
);

const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100">
        <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
            ))}
        </div>
        <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
        <p className="font-semibold text-gray-800">— {testimonial.name}</p>
    </div>
);
// --- END Placeholder MOCK DATA ---

const CatalogPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header (Simplified for sub-page) */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                    <a href="/" className="text-2xl font-bold text-indigo-600">
                        Showcase Co.
                    </a>
                    <a href="/" className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium flex items-center">
                        <ShoppingBag className="w-5 h-5 mr-1" /> Back to Home
                    </a>
                </div>
            </header>

            <main className="pb-20">
                {/* Full Catalog Grid */}
                <section className="py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 text-center">Our Complete Collection</h1>
                        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                            Browse every item we offer. Click "View Details" to learn about materials, dimensions, and more.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-16 bg-indigo-50" id="testimonials">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">What Our Customers Say</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map(t => (
                                <TestimonialCard key={t.id} testimonial={t} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer (Simplified for sub-page) */}
            <footer className="bg-gray-800 text-white py-6 text-center">
                <p className="text-sm text-gray-400">&copy; 2025 Showcase Co. | Back to <a href="/" className="text-indigo-400 hover:underline">Home</a></p>
            </footer>
        </div>
    );
};

export default CatalogPage;
