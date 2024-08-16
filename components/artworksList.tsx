// components/ArtworksList.tsx

import React from 'react';
import Link from 'next/link';
import { Artwork } from '@/data/artworksList';

interface ArtworksListProps {
  artworks: Artwork[];
}

const ArtworksList: React.FC<ArtworksListProps> = ({ artworks }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 mb-5 ml-10 mr-10 p-3">
      {artworks.map((artwork) => (
        <div
          key={artwork.id}
          className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl relative"
        >
          {/* Artwork Image */}
          <div className="relative">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-64 object-cover rounded-lg transition-opacity duration-300"
            />
          </div>

          {/* Hidden Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-slate-700 bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4">
              <h2 className="text-lg font-bold">{artwork.title}</h2>
              {/* Artwork Description */}
              <p className="mt-2">{artwork.description}</p>

              {/* Artwork Price */}
              <p className="mt-2 font-semibold">Price: ${artwork.price.toFixed(2)}</p>

              {/* View Details Link */}
              <div className="mt-4 flex justify-center">
                <Link href={`/artwork/${artwork.id}`} legacyBehavior>
                  <a className="border border-slate-800 bg-slate-200 hover:bg-slate-600 hover:text-white text-black font-semibold py-2 px-4 rounded">
                    View Details
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtworksList;
