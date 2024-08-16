// pages/api/artworks.ts

import { NextApiRequest, NextApiResponse } from 'next';
import artworksList from '@/data/artworksList';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(artworksList);
}
