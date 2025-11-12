'use client';
import React from 'react';
import { ShoppingBag, XCircle, Info, Tag } from 'lucide-react';

// --- Placeholder MOCK DATA (Required for this single file to compile) ---
const products = [
    { id: 'sofa', name: 'The Serene Sofa', price: 1299.00, category: 'Furniture',
      image: '/images/serene_sofa.jpg', 
      description: 'A comfortable three-seater with linen upholstery and solid oak legs. Perfect for any living space.',
      alt: 'Modern 3-seater blue sofa',
      details: [
          { label: 'Dimensions', value: '84" W x 36" D x 32" H' },
          { label: 'Material', value: 'Linen blend fabric, Oak wood base' },
          { label: 'Weight', value: '150 lbs' },
      ],
    },
    { id: 'lamp', name: 'Minimalist Desk Lamp', price: 85.00, category: 'Lighting',
      image: '/images/minimalist_lamp.png',
      description: 'Flexible arm LED lamp with touch controls. Sleek matte black finish. Energy efficient.',
      alt: 'Black minimalist desk lamp',
      details: [
          { label: 'Power', value: 'LED, 10W' },
          { label: 'Color', value: 'Matte Black' },
          { label: 'Feature', value: '3-stage touch dimming' },
      ],
    },
    { id: 'chair', name: 'Nordic Dining Chair', price: 149.00, category: 'Furniture',
      image: '/images/nordic_chair.jpg',
      description: 'Ergonomic design with padded seat and light wood frame. Available in multiple colors.',
      alt: 'Light wood andso  white dining chair',
      details: [
          { label: 'Seat', value: 'Padded synthetic leather' },
          { label: 'Frame', value: 'Beechwood' },
          { label: 'Assembly', value: 'Minimal required' },
      ],
    },
    { id: 'ottoman', name: 'Velvet Ottoman', price: 249.00, category: 'Furniture',
      image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Ottoman',
      description: 'Plush velvet fabric ottoman, perfect as a footrest or extra seating.',
      alt: 'Purple velvet ottoman',
      details: [
          { label: 'Fabric', value: 'Velvet' },
          { label: 'Color', value: 'Deep Violet' },
          { label: 'Diameter', value: '20 inches' },
      ],
    },
];

const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(price);
};

// Reusable component for other products section
const ProductCard = ({ product }) => (
    <a href={`/catalog/${product.id}`} className="block bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-2 hover:border-indigo-500">
        <img
            src={product.image}
            alt={product.alt}
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/94a3b8/ffffff?text=Image+Missing'; }}
            className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center">
            <p className="text-indigo-600 font-extrabold text-xl mb-3">{formatPrice(product.price)}</p>
        </div>
    </a>
);

// --- END Placeholder MOCK DATA ---

// The component receives 'params' (from the URL) in the App Router structure
const ProductDetailPage = ({ params }) => {
    // NOTE: In a real App Router environment, you would use:
    // const productId = params.id;
    // However, since we cannot read the URL dynamically here, we'll hardcode
    // a successful product lookup for demonstration.
    const productId = 'sofa'; // Faking the URL lookup for 'sofa'
    
    const product = products.find(p => p.id === productId);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-red-50 p-10">
                <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                    <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Product Not Found</h1>
                    <p className="text-gray-600 mb-6">The product ID '{productId}' does not exist in our catalog.</p>
                    <a href="/catalog" className="inline-block bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                        Back to Catalog
                    </a>
                </div>
            </div>
        );
    }

    // Get other products (excluding the current one)
    const otherProducts = products.filter(p => p.id !== product.id).slice(0, 3);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header (Simplified for sub-page) */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                    <a href="/" className="text-2xl font-bold text-indigo-600">
                        Showcase Co.
                    </a>
                    <a href="/catalog" className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium flex items-center">
                        <ShoppingBag className="w-5 h-5 mr-1" /> Back to Catalog
                    </a>
                </div>
            </header>

            <main className="pb-20">
                {/* Product Detail Section */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10 lg:flex lg:space-x-12">
                            {/* Product Image (Left Column) */}
                            <div className="lg:w-1/2 mb-8 lg:mb-0">
                                <img
                                    src={product.image}
                                    alt={product.alt}
                                    className="w-full h-auto object-cover rounded-xl shadow-xl"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x600/94a3b8/ffffff?text=Image+Missing'; }}
                                />
                            </div>

                            {/* Product Info (Right Column) */}
                            <div className="lg:w-1/2">
                                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{product.name}</h1>
                                <p className="text-3xl font-bold text-indigo-600 mb-6">{formatPrice(product.price)}</p>

                                <div className="space-y-4 mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 flex items-center mb-3">
                                        <Info className="w-6 h-6 mr-2 text-indigo-500" /> Description
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                                </div>
                                
                                <div className="mb-10">
                                    <h2 className="text-2xl font-semibold text-gray-800 flex items-center mb-4">
                                        <Tag className="w-6 h-6 mr-2 text-indigo-500" /> Specifications
                                    </h2>
                                    <ul className="space-y-2">
                                        {product.details.map((detail, index) => (
                                            <li key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                                                <span className="font-medium text-gray-700">{detail.label}:</span>
                                                <span className="text-gray-500">{detail.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <button className="w-full bg-indigo-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.01]">
                                    Add to Inquiry List
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Products Section */}
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">You Might Also Like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {otherProducts.map(p => (
                                <ProductCard key={p.id} product={p} />
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

export default ProductDetailPage;
