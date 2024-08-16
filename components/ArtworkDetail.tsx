import React, { useState } from 'react';
import { useCart } from '@/context/CartContext'; // Update the path based on your project structure
import { Artwork } from '@/data/artworksList';
import { useUser , SignIn} from '@clerk/nextjs'; // Import useUser from Clerk
import Link from 'next/link';
import LoginPage from '@/pages/LoginPage';
const StarIcon = (
  <svg
    className="h-6 w-6 text-yellow-400 inline"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 0l2.39 6.19 6.69.51c.87.07 1.22 1.18.55 1.79l-5.14 4.86 1.52 6.65c.2 1.06-.92 1.91-1.93 1.36L10 17.25l-5.98 3.46c-1 .55-2.13-.3-1.93-1.36l1.52-6.65-5.14-4.86c-.67-.63-.32-1.74.55-1.79l6.69-.51L10 0z"
      clipRule="evenodd"
    />
  </svg>
);

interface Props {
  artwork: Artwork;
}

const ArtworkDetail: React.FC<Props> = ({ artwork }) => {
  const { addToCart } = useCart();
  const { user, isLoaded } = useUser(); // Use useUser hook
  const [showToast, setShowToast] = useState(false);
  const [rating, setRating] = useState<number>(4); // Default rating set to 4 stars
  const [quantity, setQuantity] = useState<number>(1); // Default quantity set to 1

  const handleAddToCart = () => {
    addToCart({
      id: artwork.id,
      name: artwork.title,
      price: artwork.price,
      quantity: quantity
    });
    setShowToast(true);
  };

  const handleRatingClick = (index: number) => {
    setRating(index + 1); // Add 1 to index because index starts from 0
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto p-4 m-4">
      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Left Column - Artwork Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={artwork.image}
            alt={`${artwork.title}`}
            className="rounded-lg w-full max-h-96 object-cover"
            style={{ maxHeight: '600px' }} // Adjust max height as per your design
          />
        </div>
        {/* Right Column - Artwork Details */}
        <div className="w-full md:w-1/2">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">{artwork.title}</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="artwork-summary p-4 rounded-lg">
              <p className="mb-4 text-xl font-semibold"><strong>Price:</strong> ${artwork.price.toFixed(2)}</p>
              <div className="flex items-center mb-4 justify-center">
                <p className="text-xl font-semibold mr-2">Rating:</p>
                <div className="flex">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      onClick={() => handleRatingClick(index)}
                      className={`text-yellow-400 ${index < rating ? 'opacity-100' : 'opacity-25'} cursor-pointer`}
                    >
                      {StarIcon}
                    </span>
                  ))}
                </div>
              </div>
              
                <button
                  onClick={handleAddToCart}
                  className="border border-slate-800 bg-slate-200 hover:bg-slate-600 hover:text-white text-black font-semibold py-2 px-4 rounded w-full"
                >
                  Add to Cart
                </button>
              
         
              <div className="flex items-center mb-4 justify-center mt-4 bg-slate-200">
                <button
                  onClick={decrementQuantity}
                  className="px-2 py-1 text-xl font-semibold rounded-l bg-slate-500"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-1 text-xl font-semibold">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="px-2 py-1 text-xl font-semibold rounded-r bg-slate-500 "
                >
                  +
                </button>
              </div>
            </div>
            <div className="artwork-info p-4 rounded-lg">
              <p className="mb-2 text-xl"><strong>Artist:</strong> {artwork.artist}</p>
              <p className="mb-2 text-xl"><strong>Creation Date:</strong> {artwork.creationDate}</p>
              <p className="mb-2 text-xl"><strong>Medium:</strong> {artwork.medium}</p>
              <p className="mb-2 text-xl"><strong>Description:</strong> {artwork.description}</p>
            </div>
          </div>
          <div className="artwork-reviews p-4 rounded-lg mt-4">
            <h3 className="text-2xl font-bold mb-2">Reviews:</h3>
            {artwork.reviews && artwork.reviews.length > 0 ? (
              <ul className="list-disc list-inside space-y-2">
                {artwork.reviews.map((review, index) => (
                  <li key={index} className="text-lg">{review}</li>
                ))}
              </ul>
            ) : (
              <p className="text-lg">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end z-50">
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto">
            <div className="rounded-lg shadow-xs overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm leading-5 font-medium text-gray-900">Item added to cart!</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button onClick={() => setShowToast(false)} className="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150">
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 0c5.5228 0 10 4.4772 10 10s-4.4772 10-10 10S0 15.5228 0 10 4.4772 0 10 0zm4.95 5.05a.75.75 0 0 1 1.06 1.06L11.06 10l4.95 4.95a.75.75 0 1 1-1.06 1.06L10 11.06l-4.95 4.95a.75.75 0 1 1-1.06-1.06L8.94 10 4.95 5.05a.75.75 0 0 1 1.06-1.06L10 8.94l4.95-4.95z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtworkDetail;
