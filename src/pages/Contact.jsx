
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    role: '',
    region: '',
    audienceType: '',
    useCase: '',
    goals: '',
    consent: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You might want to add an API call here to send the form data
  };

  return (
    <div className="bg-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-medium text-gray-800 mb-6 tracking-tighter">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how 5AM Earth can help your organization achieve its sustainability goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200/80 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                  Tell us about your project
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="organization" className="text-sm font-medium">Organization *</Label>
                      <Input
                        id="organization"
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="role" className="text-sm font-medium">Role</Label>
                      <Input
                        id="role"
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                        placeholder="e.g. CTO, Sustainability Director"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="region" className="text-sm font-medium">Region</Label>
                      <Select 
                        value={formData.region} 
                        onValueChange={(value) => setFormData({...formData, region: value})}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="north-america">North America</SelectItem>
                          <SelectItem value="south-america">South America</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="africa">Africa</SelectItem>
                          <SelectItem value="asia">Asia</SelectItem>
                          <SelectItem value="oceania">Oceania</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="audienceType" className="text-sm font-medium">Organization Type *</Label>
                    <Select 
                      value={formData.audienceType} 
                      onValueChange={(value) => setFormData({...formData, audienceType: value})}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select organization type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="farmer-ngo">Farmer / NGO</SelectItem>
                        <SelectItem value="government">Government / Policymaker</SelectItem>
                        <SelectItem value="enterprise">Enterprise</SelectItem>
                        <SelectItem value="blockchain">Blockchain / DeFi</SelectItem>
                        <SelectItem value="investor">Investor</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="useCase" className="text-sm font-medium">Primary Use Case</Label>
                    <Select 
                      value={formData.useCase} 
                      onValueChange={(value) => setFormData({...formData, useCase: value})}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="What's your main interest?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="precision-agriculture">Precision Agriculture</SelectItem>
                        <SelectItem value="crop-monitoring">Crop Monitoring</SelectItem>
                        <SelectItem value="yield-forecasting">Yield Forecasting</SelectItem>
                        <SelectItem value="carbon-credits">Carbon Credits</SelectItem>
                        <SelectItem value="deforestation">Deforestation Monitoring</SelectItem>
                        <SelectItem value="supply-chain">Supply Chain Verification</SelectItem>
                        <SelectItem value="insurance">Parametric Insurance</SelectItem>
                        <SelectItem value="api-integration">API Integration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="goals" className="text-sm font-medium">Goals and Requirements</Label>
                    <Textarea
                      id="goals"
                      value={formData.goals}
                      onChange={(e) => setFormData({...formData, goals: e.target.value})}
                      placeholder="Tell us about your specific needs..."
                      className="mt-1 h-32"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData({...formData, consent: checked})}
                    />
                    <Label htmlFor="consent" className="text-sm text-gray-600">
                      I consent to 5AM Earth contacting me about their products and services.
                    </Label>
                  </div>

                  {/* Assuming btn-primary is a global utility class or defined in a CSS file */}
                  <button
                    type="submit" 
                    className="w-full btn-primary"
                    disabled={!formData.consent}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div className="bg-gray-50 border border-gray-200/80 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium">Sales</div>
                      <a href="mailto:sales@5amearth.com" className="text-sm text-gray-600 hover:text-green-600">sales@5amearth.com</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium">Partnerships</div>
                      <a href="mailto:partnerships@5amearth.com" className="text-sm text-gray-600 hover:text-green-600">partnerships@5amearth.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
