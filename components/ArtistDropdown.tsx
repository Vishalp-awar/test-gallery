import React from 'react';
import Link from 'next/link';

interface Artist {
  id: number;
  name: string;
  image: string;
  profile: string;
  portfolio: string;
}

interface ArtistDropdownProps {
  artists: Artist[];
}

const ArtistDropdown: React.FC<ArtistDropdownProps> = ({ artists }) => {
  return (
    <div className="dropdown dropdown-hover">
      <Link href="/ArtistPage">
        <a className="text-md shadow hover:shadow-lg p-1" tabIndex={0}>Artist</a>
      </Link>
      <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
        {artists.slice(0, 6).map((artist) => (
          <li key={artist.id} className="flex items-center space-x-2 p-2">
            <img src={artist.image} alt={artist.name} className="w-8 h-8 rounded-full" />
            <Link href={`/ArtistPage/${artist.id}`}>
              <a>{artist.name}</a>
            </Link>
          </li>
        ))}
        <li className="text-center font-bold">
          <Link href="/ArtistPage">
            <a>View All Artists</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ArtistDropdown;
