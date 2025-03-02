import React from 'react';
import { Mail, Phone, MapPin, Leaf } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-primary-400" />
              <span className="text-xl font-bold">SAIRA CROP SCIENCE</span>
            </div>
            <div className="space-y-2">
              <p className="flex items-center"><Phone className="w-4 h-4 mr-2 text-primary-400" /> +91 9822583262, +91 9975676722</p>
              <p className="flex items-center"><Mail className="w-4 h-4 mr-2 text-primary-400" /> sairaagro@gmail.com</p>
              <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-primary-400" /> Gat No. 2406,Swami Samarth Nagar,
              Ozar Mig, Nashik, Maharashtra - 422206, India</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="hover:text-primary-400">Products</a></li>
              <li><a href="/about" className="hover:text-primary-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-primary-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest organic farming solutions</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md w-full text-gray-900"
              />
              <button
                type="submit"
                className="bg-primary-600 px-4 py-2 rounded-r-md hover:bg-primary-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Saira Crop Science. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};