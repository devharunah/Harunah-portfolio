
import React from 'react';
import { Code, Palette, Monitor, Headphones } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, gradient }) => {
  return (
    <div className="group relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-gray-500/20 transition-all duration-500 ease-out transform hover:-translate-y-3 border border-gray-800 hover:border-gray-600/50">
      {/* Background gradient overlay on hover */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${gradient}`}></div>
      
      {/* Icon container */}
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl group-hover:shadow-gray-500/30 border border-gray-700 group-hover:border-gray-600/50">
          <Icon className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-600/30 transition-all duration-500"></div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Creating modern, responsive websites and web applications using the latest technologies and best practices for optimal performance.",
      gradient: "bg-gradient-to-br from-gray-700 to-gray-800"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user interfaces with seamless user experiences that drive engagement and conversions.",
      gradient: "bg-gradient-to-br from-gray-700 to-gray-900"
    },
    {
      icon: Monitor,
      title: "Graphic Design",
      description: "Crafting compelling visual designs including logos, branding materials, and marketing collateral that make your brand stand out.",
      gradient: "bg-gradient-to-br from-gray-800 to-black"
    },
    {
      icon: Headphones,
      title: "IT Consultation",
      description: "Providing expert technology consulting services to help businesses optimize their IT infrastructure and digital strategies.",
      gradient: "bg-gradient-to-br from-gray-700 to-gray-900"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-12 mt-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(75,85,99,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(55,65,81,0.3),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            My Arsenal of Awesome
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional solutions tailored to help your business thrive in the digital world
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              gradient={service.gradient}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;