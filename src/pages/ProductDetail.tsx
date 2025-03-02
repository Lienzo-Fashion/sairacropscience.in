import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

export const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link
            to="/products"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <Link
            to="/products"
            className="mb-4 inline-block text-indigo-600 hover:text-indigo-800"
          >
            &larr; Back to Products
          </Link>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 text-lg mb-6">{product.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Product Details</h3>
              <p className="mb-2"><span className="font-medium">Price:</span> ${product.price.toLocaleString()}</p>
              <p className="mb-2"><span className="font-medium">Category:</span> {product.category}</p>
              <p className="mb-2"><span className="font-medium">Origin:</span> {product.origin}</p>
              <p className={product.inStock ? 'text-green-500' : 'text-red-500'}>
                <span className="font-medium">Availability:</span> {product.inStock ? 'In Stock' : 'Out of Stock'}
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Product Inquiry</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Your Name</label>
                  <input type="text" className="w-full p-2 border rounded-md" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full p-2 border rounded-md" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea className="w-full p-2 border rounded-md h-24" required></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};