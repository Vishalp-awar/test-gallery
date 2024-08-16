// pages/api/register.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface User {
  id: number;
  name: string;
  password: string;
}

const filePath = path.resolve('./data/users.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    try {

      const users = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as User[];

      const nextId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;

      const newUser: User = {
        id: nextId,
        name: username,
        password: password,
      };

      users.push(newUser);

      // Write the updated users back to the file
      fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf-8');

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error reading or writing the user file:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
