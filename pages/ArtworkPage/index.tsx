// pages/artworks.tsx

import React, { useEffect, useState } from 'react';
import ArtworksList from '@/components/artworksList';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Artwork } from '@/data/artworksList';

const Page: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch('/api/artworks');
        const data: Artwork[] = await response.json();
        setArtworks(data);
      } catch (error) {
        console.error('Error fetching artworks:', error);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto p-4 m-4'>
        <h1 className="text-black text-left mb-4 mt-8 font-bold text-3xl ml-20">Artwork Listings</h1>
        <ArtworksList artworks={artworks} />
      </div>
      <Footer />
    </>
  );
};

export default Page;
