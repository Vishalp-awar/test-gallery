import React, { useEffect, useState } from 'react';
import artworksList, { Artwork } from '@/data/artworksList';

const RecommendationsCarousel: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    // Simulating async data fetching
    setArtworks(artworksList);
  }, []);

  return (
    <div>
      <div className="text-center shadow-xl transition-transform duration-500 hover:scale-105 ">
        <h1 className=" text-black text-left mb-4 mt-8 font-bold text-3xl ml-20">Recommendations</h1>
      </div>
      <div className="carousel w-full p-2 mt-2 mb-4 overflow-x-auto gap-8 p-4">
        {artworks.map((artwork: Artwork, index: number) => (
          <div key={index} className="carousel-item w-full lg:w-1/4 md:w-1/2 sm:w-full ">
            <div className="card lg:card-side bg-base-100 text-black shadow-xl transition-transform duration-500 hover:scale-105">
              <figure>
                <img
                  src={artwork.image}
                  alt={`Recommendation ${index + 1}`}
                  className="w-48 h-64 object-cover" // Decreased width and increased height
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title   text-black font-bold">{artwork.title}</h2>
                <p>{artwork.description}</p>
                <div className="card-actions justify-end">
                {/* <button className="border border-slate-800 bg-slate-200 hover:bg-slate-600 hover:text-white text-black font-semibold py-2 px-4 rounded">Must Buy</button> */}
                                {/* View Details Link */}
                    <div className="mt-4 flex justify-center">
                      <a href={`/artwork/${artwork.id}`}>
                        <button className="border border-slate-800 bg-slate-200 hover:bg-slate-600 hover:text-white text-black font-semibold py-2 px-4 rounded">
                          Must Buy
                        </button>
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsCarousel;
