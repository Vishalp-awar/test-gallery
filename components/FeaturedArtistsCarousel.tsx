import React from "react";
import { useRouter } from 'next/router';

interface ArtistProfileProps {
  name: string;
  image: string;
  profile: string;
  portfolio: string;
}

interface FeaturedArtistsCarouselProps {
  artists: ArtistProfileProps[];
}

const FeaturedArtistsCarousel: React.FC<FeaturedArtistsCarouselProps> = ({ artists }) => {
  const router = useRouter();

  const handleProfileClick = (name: string, image: string, profile: string) => {
    router.push({
      pathname: '/artistProfilePage',
      query: { name, image, profile }
    });
  };

  const handlePortfolioClick = (name: string) => {
    router.push({
      pathname: '/artistPortfolio',
      query: { name }
    });
  };

  if (!artists || artists.length === 0) {
    return <div>No featured artists available.</div>;
  }

  return (
    <div>
      <div className="text-center mb-4 mt-2 shadow-xl transition-transform duration-500 hover:scale-105">
        <h1 className="text-black text-left mb-4 mt-8 font-bold text-3xl ml-20">Featured Artist</h1>
      </div>
      <div className="carousel w-full overflow-x-auto gap-8">
        {artists.map((artist) => (
          <div key={artist.name} className="carousel-item w-full lg:w-1/4 md:w-1/2 sm:w-full">
            <div className="card w-full bg-base-100 text-black transition-transform duration-500 hover:scale-105">
              <figure>
                <img src={artist.image} alt={`Featured Artist ${artist.name}`} className="w-full h-56 object-cover" />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-xl font-bold text-black">{artist.name}</h2>
                <p className="text-gray-700">{artist.profile}</p>
                <div className="card-actions justify-end mt-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleProfileClick(artist.name, artist.image, artist.profile)}
                      className="btn border-slate-800 bg-slate-200 text-slate-800 hover:bg-slate-600 hover:text-white btn-sm"
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => handlePortfolioClick(artist.name)}
                      className="btn border-slate-800 bg-slate-200 text-slate-800 hover:bg-slate-600 hover:text-white btn-sm"
                    >
                      Portfolio
                    </button>
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

export default FeaturedArtistsCarousel;
