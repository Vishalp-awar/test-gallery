"use client";
import React from 'react';
import artworksList, { Artwork } from '@/data/artworksList';

const NewArrivalsCarousel: React.FC = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
    
  };

  return (
    <div>
      <div className="text-center mb-4 mt-2 shadow-xl transition-transform duration-500 hover:scale-105 ">
        <h1 className=" text-black text-left mb-4 mt-8 font-bold text-3xl ml-20">New Arrivals</h1>
      </div>
      <div className="carousel w-full overflow-x-auto gap-8 p-4">
        {artworksList.map((artwork: Artwork) => (
          <div key={artwork.id} className="carousel-item w-full lg:w-1/4 md:w-1/2 sm:w-full">
            <div className="card w-96 bg-base-100 shadow-xl transition-transform duration-500 hover:scale-105 bg-base-100">
              <figure className="px-10 pt-10">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="rounded-xl object-cover"
                  style={{ width: '384px', height: '256px' }}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title  text-black font-bold">{artwork.title}</h2>
                <p>{artwork.description}</p>
                <p className="text-lg font-bold mt-2">{formatPrice(artwork.price)}</p>
                <div className="card-actions">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                    {/* <a href={"/artwork/${artwork.id}"} className="border border-slate-800 bg-slate-200 hover:bg-slate-600 hover:text-white text-black font-semibold py-2 px-4 rounded">Buy Now</a> */}
                    {/* <button className="border border-slate-800 bg-slate-200 hover:bg-slate-600 hover:text-white text-black font-semibold py-2 px-4 rounded">Buy Now</button> */}
                                  {/* View Details Link */}
                    <div className="mt-4 flex justify-center">
                      <a href={`/artwork/${artwork.id}`} >
                        <a className="border border-slate-800 bg-slate-200 hover:bg-slate-600 hover:text-white text-black font-semibold py-2 px-4 rounded">
                        Buy Now
                        </a>
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

export default NewArrivalsCarousel;
