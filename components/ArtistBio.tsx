// components/ArtistBio.tsx

import React from 'react';

interface Props {
  bio: string;
}

const ArtistBio: React.FC<Props> = ({ bio }) => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-4">Bio</h3>
      <p className="text-lg text-gray-700 leading-relaxed">{bio}</p>
    </div>
  );
};

export default ArtistBio;
