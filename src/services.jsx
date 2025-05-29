
import React from 'react';
import { Code, Palette, Monitor, Headphones } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, gradient }) => {
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
      {/* Background gradient overlay on hover */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${gradient}`}></div>
      
      {/* Icon container */}
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-blue-200">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-black transition-all duration-300"></div>
    </div>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Creating modern, responsive websites and web applications using the latest technologies and best practices for optimal performance.",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user interfaces with seamless user experiences that drive engagement and conversions.",
      gradient: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      icon: Monitor,
      title: "Graphic Design",
      description: "Crafting compelling visual designs including logos, branding materials, and marketing collateral that make your brand stand out.",
      gradient: "bg-gradient-to-br from-blue-600 to-cyan-600"
    },
    {
      icon: Headphones,
      title: "IT Consultation",
      description: "Providing expert technology consulting services to help businesses optimize their IT infrastructure and digital strategies.",
      gradient: "bg-gradient-to-br from-blue-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen py-12 mt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Arsenal of Awesome
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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