// pages/artwork/[id].tsx

import { useRouter } from 'next/router';
import { Artwork } from '@/data/artworksList';
import artworksList from '@/data/artworksList';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ArtworkDetail from '@/components/ArtworkDetail';
import NewArrivalsCarousel from '@/components/NewArrivalsCarousel';
import RecommendationsCarousel from '@/components/RecommendationsCarousel';

const ArtworkDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const artwork: Artwork | undefined = id ? artworksList.find(art => art.id === parseInt(id as string, 10)) : undefined;

  if (!artwork) {
    return <p className="text-center text-xl mt-5">Artwork not found.</p>;
  }

  
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 m-4">
        <ArtworkDetail artwork={artwork} />
        <NewArrivalsCarousel/>
        <RecommendationsCarousel/>
      </div>
      <Footer />
    </>
  );
};

export default ArtworkDetailPage;
