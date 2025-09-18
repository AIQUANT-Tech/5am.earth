
import React from 'react';
import { Globe, BrainCircuit, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const DemocratizingAccessSection = () => {
  const features = [
    { 
      title: "Satellite Data", 
      description: "Harnessing high-resolution imagery from global providers.", 
      icon: Globe 
    },
    { 
      title: "AI-Powered Analysis", 
      description: "Extracting critical insights with proprietary algorithms.", 
      icon: BrainCircuit 
    },
    { 
      title: "Blockchain Verification", 
      description: "Creating a tamper-proof, auditable record of every insight.", 
      icon: ShieldCheck 
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <h2 className="text-sm font-bold uppercase text-green-600 tracking-wider mb-4">Our Purpose</h2>
            <h3 className="section-headline text-gray-800 mb-6">Democratizing Access to Trusted Environmental Data.</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              5am.Earth democratizes access to trusted environmental and agricultural data through blockchain-verified satellite intelligence. By turning raw satellite imagery into transparent, actionable insights, we empower stakeholders to make data-driven decisions for a sustainable planet.
            </p>
          </motion.div>
          <div className="space-y-8 mt-12 lg:mt-0">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariants}
                custom={index}
                transition={{ delay: index * 0.15 }}
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
                  <p className="mt-1 text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* New Application Layer Section */}
        <motion.div 
          className="mt-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <h2 className="section-headline text-gray-800 mb-6">The Application Layer</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Web2 and Web3 development tools that turn verified data into custom applications across hundreds of use cases—from DeFi protocols to traditional enterprise systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DemocratizingAccessSection;
