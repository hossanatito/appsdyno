
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Index = () => {
  useEffect(() => {
    // Update the title and meta description for SEO
    document.title = "Appsdyno | Web & Mobile Development Agency";
    
    // You could add more meta tags here if needed
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Appsdyno is your partner in creating innovative, high-performance web and mobile experiences that drive results.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Appsdyno is your partner in creating innovative, high-performance web and mobile experiences that drive results.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
