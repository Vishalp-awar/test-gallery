import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 m-4">
        <AboutUs />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
