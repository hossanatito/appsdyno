
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Terms = () => {
  useEffect(() => {
    // Update the title for SEO
    document.title = "Terms of Service | Appsdyno";
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
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
              alt="Terms of Service" 
              className="w-full h-full object-cover object-center opacity-60"
            />
          </div>
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-gray-900/80"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-lg text-gray-300">
                These terms establish the rules and regulations for using our services. Please read them carefully.
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
                Welcome to Appsdyno. These Terms of Service ("Terms") govern your use of our website and services. 
                By accessing or using our website and services, you agree to be bound by these Terms. If you disagree 
                with any part of these Terms, you may not access our website or use our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
              <p>
                Appsdyno provides web development, mobile app development, UI/UX design, custom software development, 
                and maintenance services ("Services"). We reserve the right to modify, suspend, or discontinue any 
                aspect of our Services at any time, with or without notice.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
              <p>
                When using our Services, you agree to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  Provide accurate and complete information as required for the delivery of Services.
                </li>
                <li>
                  Cooperate with us in all matters relating to the Services.
                </li>
                <li>
                  Obtain and maintain all necessary licenses, permissions, and consents required for us to perform the Services.
                </li>
                <li>
                  Comply with all applicable laws and regulations regarding your use of our Services.
                </li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p>
                Unless otherwise agreed in writing:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  We retain ownership of all intellectual property rights in the Services and any materials created in 
                  connection with the Services until full payment has been received.
                </li>
                <li>
                  Upon full payment, you will own the rights to the final deliverables, but we retain the rights to 
                  our pre-existing intellectual property, tools, methodologies, and techniques used in the development process.
                </li>
                <li>
                  We reserve the right to use any part of the Services for promotional purposes unless explicitly agreed otherwise.
                </li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
              <p>
                Payment terms will be specified in each client's individual service agreement or proposal. Unless otherwise 
                agreed, invoices are due within 30 days of receipt. We reserve the right to charge interest on late payments 
                at the rate of 1.5% per month or the maximum rate permitted by law, whichever is less.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p>
                In no event shall Appsdyno be liable for any indirect, special, incidental, consequential, or punitive damages 
                arising out of or related to your use of our Services, even if we have been advised of the possibility of such damages.
              </p>
              <p className="mt-4">
                Our total liability to you for any and all claims arising from or related to the Services shall not exceed 
                the amount you paid to us for the Services giving rise to the claim.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
              <p>
                Either party may terminate the Service agreement with written notice if the other party materially breaches 
                these Terms and fails to remedy that breach within 30 days after receiving written notice of the breach.
              </p>
              <p className="mt-4">
                Upon termination, you shall pay us for all Services performed up to the termination date, and we shall deliver 
                to you all materials developed up to that point, subject to full payment.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Appsdyno 
                is located, without regard to its conflict of law provisions.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of any significant changes by 
                posting the new Terms on our website. Your continued use of our Services after any changes to these Terms 
                constitutes your acceptance of the new Terms.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
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

export default Terms;
