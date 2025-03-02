import React from 'react';
import { Globe, Users, Award, TrendingUp } from 'lucide-react';

export const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(../public/Images/aboutus_hero_section.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl font-bold mb-4">About Saira Crop Science</h1>
          <p className="text-xl max-w-2xl">Leading manufacturer of organic agricultural solutions, serving farmers across India since 2010.</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Globe className="h-8 w-8 mx-auto text-primary-600" />, stat: '15+', label: 'States Served' },
              { icon: <Users className="h-8 w-8 mx-auto text-primary-600" />, stat: '50,000+', label: 'Happy Farmers' },
              { icon: <Award className="h-8 w-8 mx-auto text-primary-600" />, stat: '15+', label: 'Years Experience' },
              { icon: <TrendingUp className="h-8 w-8 mx-auto text-primary-600" />, stat: '50+', label: 'Products' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                {item.icon}
                <div className="mt-4 text-3xl font-bold text-primary-600">{item.stat}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-6">Our Legacy in Agricultural Excellence</h2>
            <p className="text-lg text-gray-600 mb-6">
              Established in 2010, Saira Crop Science has been at the forefront of organic agricultural solutions in India. 
              Our state-of-the-art manufacturing facility in Nashik, Maharashtra, produces high-quality bio-insecticides, 
              growth promoters, and soil health solutions that have earned the trust of farmers across the nation.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our products are developed through extensive research and development, combining traditional agricultural wisdom 
              with modern scientific innovations. We pride ourselves on maintaining the highest standards of quality while 
              ensuring our solutions are environmentally sustainable and farmer-friendly.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ISO 9001:2015",
                description: "Certified for Quality Management Systems"
              },
              {
                title: "Organic Certification",
                description: "NPOP and NOP Certified Products"
              },
              {
                title: "GMP Certified",
                description: "Good Manufacturing Practices Compliance"
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-3">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src=""
                  alt="CEO"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-primary-600 font-semibold">Chief Executive Officer</div>
                <h3 className="mt-1 text-2xl font-semibold">Mr. Santosh Eknath Wakade</h3>
                <p className="mt-4 text-gray-600">
                  Under Mr. Wakade's visionary leadership, Saira Crop Science has grown to become one of India's most trusted 
                  manufacturers of organic agricultural solutions. His commitment to quality and sustainable farming practices 
                  has helped transform thousands of farms across the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Corporate Office</h3>
                <p className="text-gray-600 mb-2">Swami samarth Nagar</p>
                <p className="text-gray-600 mb-2">Ozar Mig, Nashik,</p>
                <p className="text-gray-600 mb-4">Maharashtra - 422201, India</p>
                
                <h4 className="font-semibold mt-4 mb-2">Contact Details:</h4>
                <p className="text-gray-600 mb-2">Phone: +91 9822583262</p>
                <p className="text-gray-600">Email: sairaagro@gmail.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Manufacturing Facility</h3>
                <p className="text-gray-600 mb-4">
                  Our state-of-the-art manufacturing facility is equipped with modern machinery and follows strict quality 
                  control measures. We maintain the highest standards of production to ensure consistent product quality.
                </p>
                <p className="text-gray-600">
                  Visitors are welcome by appointment to tour our facility and learn about our manufacturing processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};