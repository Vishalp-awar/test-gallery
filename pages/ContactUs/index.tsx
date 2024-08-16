import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUsComponent from '@/components/ContactUs'; // Import ContactUs component
import { SignedIn } from '@clerk/clerk-react';
const ContactUsPage = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto p-4 m-4">
      
      <ContactUsComponent /> {/* Use ContactUs component */}
      
    </div>
    <Footer />
    
    </>
  );
};

export default ContactUsPage;
