import React from 'react';
import { useRouter } from 'next/router';

interface ArtistProfileProps {
  name: string;
  image: string;
  profile: string;
  portfolio: string;
}

const ArtistProfile: React.FC<ArtistProfileProps> = ({ name, image, profile }) => {
  const router = useRouter();

  const handleProfileClick = () => {
    router.push({
      pathname: '/artistProfilePage',
      query: { name, image, profile }
    });
  };

  const handlePortfolioClick = () => {
    router.push({
      pathname: '/artistPortfolio',
      query: { name }
    });
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <figure>
        <img src={image} alt={`${name}'s profile`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="hover:text-blue-600 transition-colors text-black">{name}</span>
        </h2>
        <p>{profile}</p>
        <div className="card-actions justify-end">
          <div className="flex space-x-2">
            <button
              onClick={handleProfileClick}
              className="btn border-slate-800 bg-slate-200 text-slate-800 hover:bg-slate-600 hover:text-white btn-sm"
            >
              Profile
            </button>
            <button
              onClick={handlePortfolioClick}
              className="btn border-slate-800 bg-slate-200 text-slate-800 hover:bg-slate-600 hover:text-white btn-sm"
            >
              Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;
