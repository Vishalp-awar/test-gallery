// components/ArtistProfileInfo.tsx

import React from 'react';

interface Props {
  name: string;
  profile: string;
  image: string;
}

const ArtistProfileInfo: React.FC<Props> = ({ name, profile, image }) => {
  return (
    <div className="flex items-center justify-center md:justify-start">
      <img
        src={image}
        alt={`${name}'s profile`}
        className="w-96 h-96 object-cover rounded-lg shadow-xl"
      />
      <div className="ml-6 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">{name}</h1>
        <p className="text-lg text-gray-700">{profile}</p>
      </div>
    </div>
  );
};

export default ArtistProfileInfo;
