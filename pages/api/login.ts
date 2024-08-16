// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import allusers from '@/data/users.json'

interface User {
  username: string;
  password: string;
}

const users: User[] = []; // In-memory users array for demonstration

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body as User;
    const user = allusers.find((user) => user.name === username && user.password === password);

    if (user) {
      
      const token = `fake-token-${user.name}`;
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
