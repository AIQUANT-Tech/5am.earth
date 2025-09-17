

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Globe } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname === createPageUrl('Homepage')) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Use full URL for navigation from other pages
      window.location.href = `${window.location.origin}${createPageUrl('Homepage')}#${sectionId}`;
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Why 5AM Earth", id: "why" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Vision", id: "vision" },
    { label: "Contact", id: "contact" }
  ];

  const pageLinks = [
    { label: "About", path: "About" },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Manrope:wght@400;700&display=swap');
        
        :root {
          --color-background: #FFFFFF;
          --color-background-alt: #F9FAFB;
          --color-background-hero: #F0FDF4; /* Light Green */
          --color-text-primary: #1F2937; /* Dark Charcoal */
          --color-text-secondary: #6B7280;
          --color-primary: #1F2937; /* Dark Charcoal for buttons */
          --color-accent: #16A34A; /* Green */
          --color-border: #E5E7EB;
          --color-footer-bg: #111827;
        }
        body {
          font-family: 'Inter', sans-serif;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Manrope', sans-serif;
        }
        .section-headline {
          font-size: 48px;
          font-weight: 400;
          letter-spacing: -0.04em; /* approximates -2px on 48px font */
          line-height: 1.1;
        }
        .btn-primary {
          background-color: var(--color-primary);
          color: white;
          border-radius: 9999px;
          padding: 0.75rem 1.5rem;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        .btn-primary:hover {
          background-color: #374151;
        }
        .btn-secondary {
          background-color: transparent;
          color: var(--color-primary);
          border: 1px solid var(--color-border);
          border-radius: 9999px;
          padding: 0.75rem 1.5rem;
          font-weight: 500;
          transition: background-color 0.2s, color 0.2s;
        }
        .btn-secondary:hover {
          background-color: var(--color-background-alt);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || currentPageName !== 'Homepage'
          ? 'bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to={createPageUrl('Homepage')} className="flex items-center space-x-2 text-xl font-bold tracking-tighter">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6eafa01c806bd216dd197/ae18d560d_logo.png" alt="5am Earth Logo" className={`h-6 lg:h-8 w-auto transition-all duration-300 ${isScrolled || currentPageName !== 'Homepage' ? '' : 'filter invert brightness-0'}`} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors text-sm font-medium ${isScrolled || currentPageName !== 'Homepage' ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}
                >
                  {item.label}
                </button>
              ))}
              {pageLinks.map((item) => (
                <Link
                  key={item.path}
                  to={createPageUrl(item.path)}
                  className={`transition-colors text-sm font-medium ${isScrolled || currentPageName !== 'Homepage' ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}
                >
                  {item.label}
                </Link>
              ))}
              <button onClick={() => scrollToSection('contact')} className={`${isScrolled || currentPageName !== 'Homepage' ? 'btn-primary' : 'bg-white text-gray-900 hover:bg-gray-200'} text-sm px-4 py-2 rounded-full font-medium transition-colors`}>Contact Sales</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className={`w-6 h-6 ${isScrolled || currentPageName !== 'Homepage' ? 'text-gray-800' : 'text-white'}`} /> : <Menu className={`w-6 h-6 ${isScrolled || currentPageName !== 'Homepage' ? 'text-gray-800' : 'text-white'}`} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-white/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 pt-20">
            <div className="flex justify-end mb-4">
              <button onClick={() => setMobileMenuOpen(false)}><X className="w-6 h-6" /></button>
            </div>
            <div className="space-y-6">
              {[...navItems, ...pageLinks].map((item) => (
                item.id ? (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors text-lg font-medium"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.path}
                    to={createPageUrl(item.path)}
                    className="block text-gray-700 hover:text-green-600 transition-colors text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <button onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }} className="w-full btn-primary mt-4">Contact Sales</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-2">
              <Link to={createPageUrl('Homepage')} className="flex items-center space-x-2 text-xl font-bold tracking-tighter mb-4">
                 <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6eafa01c806bd216dd197/ae18d560d_logo.png" alt="5am Earth Logo" className="h-8 w-auto filter invert" />
              </Link>
              <p className="text-gray-400 max-w-xs">
                Data you can trust.
              </p>
            </div>
            
            <div className="text-sm">
              <h3 className="font-semibold mb-4 text-gray-400 uppercase tracking-wider">Product</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-white">API</a>
                <a href="#" className="block text-gray-300 hover:text-white">Dashboard</a>
                <a href="#" className="block text-gray-300 hover:text-white">Pricing</a>
              </div>
            </div>
            
             <div className="text-sm">
              <h3 className="font-semibold mb-4 text-gray-400 uppercase tracking-wider">Company</h3>
              <div className="space-y-3">
                <Link to={createPageUrl('About')} className="block text-gray-300 hover:text-white">About</Link>
                <Link to={createPageUrl('Contact')} className="block text-gray-300 hover:text-white">Contact</Link>
              </div>
            </div>

            <div className="text-sm">
              <h3 className="font-semibold mb-4 text-gray-400 uppercase tracking-wider">Legal</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-white">Privacy Policy</a>
                <a href="#" className="block text-gray-300 hover:text-white">Terms of Service</a>
              </div>
            </div>

          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2024 5AM Earth. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* Socials can go here */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

