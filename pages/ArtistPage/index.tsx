// import React, { useState } from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import ArtistProfile from '@/components/ArtistProfile';
// import artists from '@/data/artists.json';

// const ArtistPage: React.FC = () => {
//   const artistsPerPage = 6; // Number of artists to display per page
//   const totalPages = Math.ceil(artists.length / artistsPerPage); // Calculate total pages

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);

//   // Pagination handlers
//   const goToPage = (page: number) => {
//     setCurrentPage(page);
//   };

//   // Calculate the slice range based on current page
//   const startIndex = (currentPage - 1) * artistsPerPage;
//   const endIndex = startIndex + artistsPerPage;
//   const displayedArtists = artists.slice(startIndex, endIndex);

//   return (
//     <>
//       <Navbar />
//       <h2 className=' text-black text-left mb-4 mt-8 font-bold text-3xl ml-20'>Artists</h2>
//       <div className="container mx-auto px-4 py-4">   
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-10 mr-10 p-3">    
//           {displayedArtists.map(artist => (
//             <div key={artist.id} className="flex justify-center">
//               <ArtistProfile 
//                 name={artist.name}
//                 image={artist.image}
//                 profile={artist.profile}
//                 portfolio={artist.portfolio}
//               />
//             </div>
//           ))}
//         </div>
//         {/* Pagination controls */}
//         <div className="join grid grid-cols-2 mt-4">
//           <button
//             className="join-item btn btn-outline"
//             disabled={currentPage === 1}
//             onClick={() => goToPage(currentPage - 1)}
//           >
//             Previous page
//           </button>
//           <button
//             className="join-item btn btn-outline"
//             disabled={currentPage === totalPages}
//             onClick={() => goToPage(currentPage + 1)}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ArtistPage;

// pages/ArtistPage.tsx

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtistProfile from '@/components/ArtistProfile';

interface Artist {
  id: number;
  name: string;
  image: string;
  profile: string;
  portfolio: string;
}

const ArtistPage: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const artistsPerPage = 6;

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch('/api/artists');
        const data: Artist[] = await response.json();
        setArtists(data);
      } catch (error) {
        console.error('Error fetching artist data:', error);
      }
    };

    fetchArtists();
  }, []);

  const totalPages = Math.ceil(artists.length / artistsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * artistsPerPage;
  const endIndex = startIndex + artistsPerPage;
  const displayedArtists = artists.slice(startIndex, endIndex);

  return (
    <>
      <Navbar />
      <div className="container max-w-7xl mx-auto p-4 m-4">
      <h2 className="text-black text-left mb-4 mt-8 font-bold text-3xl ml-20 ">Artists</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-10 mr-10 p-3">
          {displayedArtists.map(artist => (
            <div key={artist.id} className="flex justify-center">
              <ArtistProfile
                name={artist.name}
                image={artist.image}
                profile={artist.profile}
                portfolio={artist.portfolio}
              />
            </div>
          ))}
        </div>
        <div className="join grid grid-cols-2 mt-4">
          <button
            className="join-item btn btn-outline"
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}
          >
            Previous page
          </button>
          <button
            className="join-item btn btn-outline"
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArtistPage;

