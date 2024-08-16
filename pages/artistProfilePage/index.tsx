import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtistBio from '@/components/ArtistBio';
import SocialMediaLinks from '@/components/SocialMediaLinks';
import FeaturedArtistsCarousel from '@/components/FeaturedArtistsCarousel';
import artistsData from '@/data/artists.json'; // Assuming the JSON file is located in the data folder

import { useUser } from '@clerk/nextjs';
import LoginPage from '../LoginPage';


const ArtistProfilePage: React.FC = () => {
  const { user, isLoaded } = useUser();
 
  const router = useRouter();
  if (!isLoaded) {
    return <div >Loading...</div>;
  }

  if (!user) {
    return <LoginPage/>;
  }
  const { name, image, profile, portfolio } = router.query;

  // Placeholder data for additional information
  const bio = "This is a detailed bio of the artist. It includes their background, achievements, and style.";
  const socialLinks = {
    instagram: "https://instagram.com/artist",
    twitter: "https://twitter.com/artist",
    facebook: "https://facebook.com/artist",
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="text-center mb-10">
          {/* Artist Profile Photo */}
          {image && (
            <div className="mb-8 mx-auto w-64 h-69 overflow-hidden rounded-full border-4 border-gray-200 shadow-lg">
              <img src={image as string} alt={`${name}'s profile`} className="w-full h-full object-cover" />
            </div>
          )}
          <h1 className="text-5xl font-extrabold mb-4 text-gray-800">{name}</h1>
          <p className="text-lg text-gray-600 mb-8">{profile}</p>
        </div>

        <div className="text-center mb-12 px-4">
          <ArtistBio bio={bio} />
        </div>

        <div className="text-center mb-12 px-4">
          <div className="inline-flex space-x-4">
            <SocialMediaLinks {...socialLinks} />
          </div>
        </div>

        {/* Portfolio Link */}
        {portfolio && (
          <div className="text-center mt-12">
            <a 
              href={portfolio as string} 
              className="btn border-blue-600 bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 btn-lg transition duration-200" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Portfolio
            </a>
          </div>
        )}
      </div>
      <div className="max-w-7xl mx-auto p-4 m-4">
        <FeaturedArtistsCarousel artists={artistsData} />
      </div>
      <Footer />
    </>
  );
};

export default ArtistProfilePage;
