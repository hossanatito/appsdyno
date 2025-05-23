
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Privacy = () => {
  useEffect(() => {
    // Update the title for SEO
    document.title = "Privacy Policy | Appsdyno";
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section - Full width dark image */}
      <div className="relative w-full">
        <AspectRatio ratio={3/1} className="w-full">
          <div className="absolute inset-0 bg-black/60">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
              alt="Privacy Policy" 
              className="w-full h-full object-cover object-center opacity-60"
            />
          </div>
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-gray-900/80"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-lg text-gray-300">
                Your privacy is important to us. This document outlines how we collect, use, and protect your personal information.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <p className="mb-6">Last updated: May 14, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                At Appsdyno ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our website and 
                tell you about your privacy rights and how the law protects you.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. The Data We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong>Identity Data</strong> includes first name, last name, username or similar identifier.
                </li>
                <li>
                  <strong>Contact Data</strong> includes email address, phone number, and mailing address.
                </li>
                <li>
                  <strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, 
                  time zone setting and location, browser plug-in types and versions, operating system and platform, 
                  and other technology on the devices you use to access our website.
                </li>
                <li>
                  <strong>Usage Data</strong> includes information about how you use our website, products, and services.
                </li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  To provide you with the information, products, or services you request from us.
                </li>
                <li>
                  To perform the contract we are about to enter into or have entered into with you.
                </li>
                <li>
                  Where it is necessary for our legitimate interests (or those of a third party) and your interests 
                  and fundamental rights do not override those interests.
                </li>
                <li>
                  Where we need to comply with a legal obligation.
                </li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally 
                lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your 
                personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we 
                collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or 
                reporting requirements.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> cynosurictechlabs@gmail.com<br />
                <strong>Phone:</strong> +1 (772) 249-1629
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;
