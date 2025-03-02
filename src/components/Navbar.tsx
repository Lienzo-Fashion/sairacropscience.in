import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8" />
            <span className="font-bold text-xl">SAIRA CROP SCIENCE</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-primary-200">Home</Link>
            <Link to="/products" className="hover:text-primary-200">Products</Link>
            <Link to="/about" className="hover:text-primary-200">About</Link>
            <Link to="/contact" className="hover:text-primary-200">Contact</Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 hover:bg-primary-700">Home</Link>
            <Link to="/products" className="block px-3 py-2 hover:bg-primary-700">Products</Link>
            <Link to="/about" className="block px-3 py-2 hover:bg-primary-700">About</Link>
            <Link to="/contact" className="block px-3 py-2 hover:bg-primary-700">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};