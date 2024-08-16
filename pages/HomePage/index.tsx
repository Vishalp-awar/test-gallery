import React from 'react';
import FeaturedArtistsCarousel from '@/components/FeaturedArtistsCarousel';
import NewArrivalsCarousel from '@/components/NewArrivalsCarousel';
import RecommendationsCarousel from '@/components/RecommendationsCarousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import artistsData from '@/data/artists.json'; // Assuming the JSON file is located in the data folder

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 m-4">
        <FeaturedArtistsCarousel artists={artistsData} />
        <NewArrivalsCarousel />
        <RecommendationsCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
