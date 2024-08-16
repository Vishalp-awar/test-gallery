import React, { useState } from 'react';
import artworksList, { Artwork } from '@/data/artworksList';
import artists from '@/data/artists.json';
import ArtworkCard from '@/components/SearchAtworkCard';
import ArtistCard from '@/components/SearchArtistCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredArtworks = artworksList.filter((artwork) =>
    artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artwork.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artwork.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artist.profile.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Navbar/>
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for artworks or artists..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <h2 className="text-2xl font-bold mb-4">Artworks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Artists</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist || null} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SearchPage;
