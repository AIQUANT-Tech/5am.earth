
import React from 'react';
import { Satellite, Brain, Shield } from 'lucide-react';
import { motion } from "framer-motion";

const TrustLayerSection = () => {
  const steps = [
    {
      title: "Satellite Capture",
      description: "Multispectral imagery ingestion from leading constellations.",
      icon: Satellite,
    },
    {
      title: "AI Analysis", 
      description: "Models extract boundaries, soil indicators, crop health, and more.",
      icon: Brain,
    },
    {
      title: "Trust Layer",
      description: "Results hashed on-chain, producing tamper-evident proofs.",
      icon: Shield,
    }
  ];
  
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <h2 className="text-4xl font-medium text-gray-800 mb-4 tracking-tighter">A Unique Trust Layer</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our process combines satellite capture, AI analysis, and blockchain verification to deliver data you can depend on.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.title} 
              className="bg-gray-50 rounded-lg p-8 border border-gray-200/80"
              variants={itemVariants}
            >
              <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-5 mx-auto">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustLayerSection;
