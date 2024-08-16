// components/SocialMediaLinks.tsx

import React from 'react';

interface Props {
  instagram: string;
  twitter: string;
  facebook: string;
}

const SocialMediaLinks: React.FC<Props> = ({ instagram, twitter, facebook }) => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-4">Follow on Social Media</h3>
      <div className="flex justify-center md:justify-start space-x-6">
        <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">Instagram</a>
        <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Twitter</a>
        <a href={facebook} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Facebook</a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
