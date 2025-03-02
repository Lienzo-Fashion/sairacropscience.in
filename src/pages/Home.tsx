import { ArrowRight, Leaf, Shield, Sprout } from 'lucide-react';
import { products } from '../data/products';

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6">Organic Farming Solutions</h1>
          <p className="text-xl mb-8 max-w-2xl">Leading manufacturer of organic bio-insecticides and agricultural products. Committed to sustainable farming practices and environmental protection.</p>
          <a
            href="/products"
            className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700"
          >
            Explore Products <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <p className="text-gray-600 text-sm mb-4">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <a
                      href={`/products?category=${product.category}`}
                      className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
                    >
                      Check Out Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="h-12 w-12 text-primary-600" />,
                title: '100% Organic',
                description: 'All our products are made from natural ingredients, safe for crops and environment.'
              },
              {
                icon: <Shield className="h-12 w-12 text-primary-600" />,
                title: 'Certified Quality',
                description: 'Products tested and certified by leading agricultural institutions.'
              },
              {
                icon: <Sprout className="h-12 w-12 text-primary-600" />,
                title: 'Better Yield',
                description: 'Proven to enhance crop yield while maintaining soil health.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farming?</h2>
          <p className="mb-8 text-lg">Join thousands of farmers who trust our organic solutions</p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-primary-800 px-6 py-3 rounded-md hover:bg-gray-100"
          >
            Contact Us <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};
