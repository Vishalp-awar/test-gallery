import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

interface ArtistCardProps {
  artist: {
    id: number;
    name: string;
    image: string;
    profile: string;
  } | null;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const { addToCart } = useCart(); // Ensure this is within CartProvider

  if (!artist) {
    return <div>Artist data is not available</div>; // Provide a fallback UI or message
  }

  return (
    <Link href={`/artist/${artist.id}`} legacyBehavior>
      <a className="block bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
        <img src={artist.image} alt={artist.name} className="w-full h-48 object-cover rounded mb-4" />
        <h3 className="text-xl font-bold bg-slate-800 text-white">{artist.name}</h3>
        <p className="text-gray-600">{artist.profile}</p>
      </a>
    </Link>
  );
};

export default ArtistCard;
