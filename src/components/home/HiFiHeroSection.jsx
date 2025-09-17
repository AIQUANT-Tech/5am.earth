import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiteContent } from "@/api/entities";

export default function HiFiHeroSection() {
  const [heroUrl, setHeroUrl] = useState("https://methodic.design/globe02.mp4");

  useEffect(() => {
    const fetchContent = async () => {
        try {
            const content = await SiteContent.list();
            if (content.length > 0 && content[0].heroBackgroundUrl) {
                setHeroUrl(content[0].heroBackgroundUrl);
            }
        } catch(e) {
            console.error("Could not fetch site content", e);
        }
    };
    fetchContent();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center"
      style={{ backgroundColor: '#E1ECDC' }}>

        <video
        autoPlay
        loop
        muted
        playsInline
        src={heroUrl}
        className="absolute top-0 left-0 w-full h-full object-cover z-0" />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible">

              <motion.h1 variants={itemVariants} className="font-normal text-white mb-6" style={{ 
                fontFamily: 'Manrope, sans-serif',
                fontSize: '48px',
                lineHeight: '48px', 
                letterSpacing: '-4px'
              }}>
                <span className="lg:hidden">Trusted Satellite Intelligence for a Sustainable Future.</span>
                <span className="hidden lg:inline" style={{ 
                  fontSize: '72px',
                  lineHeight: '72px', 
                  letterSpacing: '-4px'
                }}>Trusted Satellite Intelligence for a Sustainable Future.</span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lg text-white mb-8" style={{ lineHeight: '18px' }}>
                We turn raw satellite imagery into blockchain-verified, actionable insights for farmers, governments, and enterprises.
              </motion.p>

              <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
                <button className="bg-white text-gray-900 px-4 py-2 lg:px-6 lg:py-3 rounded-full font-medium text-sm lg:text-base hover:bg-gray-200 transition-colors">
                  Request a Live Demo
                </button>
                <button className="border border-white text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full font-medium text-sm lg:text-base hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
        </div>
    </section>);

}