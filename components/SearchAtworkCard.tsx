import React from 'react';
import { Artwork } from '@/data/artworksList';
import { useCart } from '@/context/CartContext';

interface ArtworkCardProps {
  artwork: Artwork;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  const { addToCart } = useCart(); // Ensure this is within CartProvider

  // Format the price consistently using the en-US locale
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(artwork.price);

  // Handle adding item to cart
  const handleAddToCart = () => {
    addToCart({
      id: artwork.id,
      name: artwork.title,
      price: artwork.price,
      quantity: 1,
    });
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img src={artwork.image} alt={artwork.title} className="w-full h-48 object-cover rounded mb-4" />
      <h3 className="text-xl font-bold bg-slate-800 text-white p-2">{artwork.title}</h3>
      <p className="text-gray-600 mt-2">{artwork.description}</p>
      <p className="text-gray-800 font-semibold mt-2">{artwork.artist}</p>
      <p className="text-gray-800 font-bold mt-2">{formattedPrice}</p>
      <button
        onClick={handleAddToCart}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ArtworkCard;
