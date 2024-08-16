import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import artists from '@/data/artists.json';
import FeaturedArtistsCarousel from '@/components/FeaturedArtistsCarousel';
import artistsData from '@/data/artists.json'; 
import LoginPage from '../LoginPage';
import { RedirectToSignIn, useUser } from '@clerk/clerk-react';

interface Artist {
  id: number;
  name: string;
  image: string;
  profile: string;
  portfolio: string;
}

interface Artwork {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  artist: string;
  creationDate: string;
  medium: string;
  reviews?: string[];
}

const ArtistPortfolioPage: React.FC = () => {
  
  const router = useRouter();
  const { name } = router.query;
  const [artistArtworks, setArtistArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { user, isLoaded } = useUser();
  
  useEffect(() => {
    if (name) {
      const fetchArtworks = async () => {
        try {
          const response = await axios.get('/api/artworks');
          const allArtworks: Artwork[] = response.data;
          const filteredArtworks = allArtworks.filter(
            (artwork: Artwork) => artwork.artist.toLowerCase() === (name as string).toLowerCase()
          );
          setArtistArtworks(filteredArtworks);
        } catch (error) {
          console.error('Error fetching artworks:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchArtworks();
    }
  }, [name]);


 if (!isLoaded) {
    return <div >Loading...</div>;
  }

  if (!user) {
    return <RedirectToSignIn/>;
  }
  
  if (!name || typeof name !== 'string') {
    return <div>Invalid artist name</div>;
  }

  const artist = artists.find(
    (artist: Artist) => artist.name.toLowerCase() === name.toLowerCase()
  );

  if (!artist) {
    return <div>Artist not found</div>; 
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">{artist.name}s Portfolio</h1>
          <p className="text-lg text-gray-700">
            View more of {artist.name}s work{' '}
            <a href={artist.portfolio} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              here
            </a>
            .
          </p>
        </div>

        {loading ? (
          <div className="text-center text-lg">Loading artworks...</div>
        ) : (
          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 m-10">
              {artistArtworks.map((artwork, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                  <img src={artwork.image} alt={artwork.title} className="w-full h-56 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">{artwork.title}</h4>
                    <p className="text-gray-600 mt-2">{artwork.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mx-10 my-8 space-y-8">
        <FeaturedArtistsCarousel artists={artistsData} />
      </div>
      <Footer />
    </>
  );
};

export default ArtistPortfolioPage;
