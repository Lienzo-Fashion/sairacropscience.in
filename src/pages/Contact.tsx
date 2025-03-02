import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-indigo-600 mr-4" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p>+91 9822583262, +91 9975676722</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-indigo-600 mr-4" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p>sairaagro@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-indigo-600 mr-4" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p>Gat No. 2406,Swami Samarth Nagar,
                  Ozar Mig, Nashik, Maharashtra - 422206, India</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Office Hours</h2>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-2">Monday - Friday</td>
                  <td>9:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <td className="py-2">Saturday</td>
                  <td>10:00 AM - 4:00 PM</td>
                </tr>
                <tr>
                  <td className="py-2">Sunday</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Company</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 flex items-center justify-center"
            >
              Send Message <Send className="ml-2 w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};