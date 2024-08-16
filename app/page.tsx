import React from "react";
import HomePage from '@/pages/HomePage'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Welcome to Your Home Page</h1>
      <img
        src="https://cdn.pixabay.com/photo/2024/06/18/13/20/woman-8838032_1280.jpg"
        alt="Animated GIF"
        className="mx-auto mt-4 rounded-lg"
      />
      <h2 className="text-lg mt-4">Discover amazing animated art!</h2>
    </div>
  );
}
