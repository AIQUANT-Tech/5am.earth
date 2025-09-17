import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

const HomepageContactFormSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <h2 className="text-4xl font-medium text-gray-800 mb-4 tracking-tighter">Shape the Future of Sustainable Intelligence</h2>
        </motion.div>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <div className="bg-white p-8 rounded-lg border border-gray-200/80">
              <h3 className="font-semibold text-lg mb-2">For Partners & Enterprises</h3>
              <p className="text-gray-600 mb-4">Our platform is designed for scale. Discover how our verified data can drive your ESG and sustainability initiatives.</p>
              <button className="font-medium text-green-600 hover:text-green-700 flex items-center">
                Talk to Sales <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200/80">
              <h3 className="font-semibold text-lg mb-2">For Innovators & Developers</h3>
              <p className="text-gray-600 mb-4">Build on top of the world's leading satellite oracle. Explore our API and start building sustainable dApps today.</p>
              <button className="font-medium text-green-600 hover:text-green-700 flex items-center">
                Explore the API <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-lg border border-gray-200/80 shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name</Label>
                <Input id="name" type="text" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                <Input id="email" type="email" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="interest" className="text-sm font-medium text-gray-700">I'm interested in...</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                    <SelectItem value="api">API Access</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <button type="submit" className="w-full btn-primary">Send Message</button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomepageContactFormSection;