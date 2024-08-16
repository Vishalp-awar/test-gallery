"use client";
import Link from "next/link";
import React, { useState } from "react";
import artists from "@/data/artists.json";
import artworks from "@/data/artworksList";
import { useCart } from '@/context/CartContext';
import { useUser,UserButton,RedirectToSignIn,useAuth } from '@clerk/nextjs';

import { useRouter } from 'next/navigation'
const Navbar: React.FC = () => {
  const router = useRouter()
  // const { signOut } = useClerk();
  // const handleLogout = async () => {
  //   await signOut();
  // };
  
  const { cart, getTotal } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [isArtistOpen, setIsArtistOpen] = useState(false);
  const [isArtworkOpen, setIsArtworkOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const {isSignedIn, user, isLoaded} = useUser();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() !== "") {
      const filteredArtists = artists.filter((artist) =>
        artist.name.toLowerCase().includes(query)
      );
      const filteredArtworks = artworks.filter((artwork) =>
        artwork.title.toLowerCase().includes(query)
      );

      setSearchResults([...filteredArtists, ...filteredArtworks]);
      setIsSearchOpen(true);
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearchOpen(false);
  };

  
  return (
    <nav className="navbar bg-slate-600 text-white shadow-lg z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-0">
        <div className="relative group flex items-center space-x-4">
          <Link href="/HomePage" className="text-xl font-bold ms-10">
            <img src="/images/art.png" alt="Art Gallery" className="w-16 h-16" />
          </Link>
        </div>
        <div className="navbar-end md:hidden">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          {isOpen && (
            <div className="absolute right-0 top-16 w-48 bg-black shadow-lg rounded-lg z-50">
              <ul className="p-2">
                <li className="p-2 hover:bg-gray-700">
                  <Link href="/ArtistPage">Artist</Link>
                </li>
                <li className="p-2 hover:bg-gray-700">
                  <Link href="/ArtworkPage">Artworks</Link>
                </li>
                <li className="p-2 hover:bg-gray-700">
                  <Link href="/ContactUs">Contact Us</Link>
                </li>
                <li className="p-2 hover:bg-gray-700">
                  <Link href="/AboutPage">About Us</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4 font-bold">
          <div
            className="relative group"
            // onMouseEnter={() => setIsArtistOpen(true)}
            // onMouseLeave={() => setIsArtistOpen(false)}
          >
            <Link
              href="/ArtistPage"
              className="transform transition-transform duration-200 active:scale-110 text-md p-1"
            >
              Artist
            </Link>
            {isArtistOpen && (
              <div className="absolute left-0 mt-2 w-52 bg-black shadow-lg rounded-lg z-50">
                <ul className="p-2">
                  {artists.map((artist) => (
                    <li key={artist.id} className="p-2 hover:bg-gray-700">
                      <Link href={`/ArtistPage/${artist.id}`}>{artist.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div
            className="relative group"
            // onMouseEnter={() => setIsArtworkOpen(true)}
            // onMouseLeave={() => setIsArtworkOpen(false)}
          >
            <Link
              href="/ArtworkPage"
              className="transform transition-transform duration-200 active:scale-110 text-md p-1"
            >
              Artworks
            </Link>
            {isArtworkOpen && (
              <div className="absolute left-0 mt-2 w-52 bg-black shadow-lg rounded-lg z-50">
                <ul className="p-2">
                  {artworks.map((artwork) => (
                    <li key={artwork.id} className="p-2 hover:bg-gray-700">
                      <Link href={`/ArtworkPage/${artwork.id}`}>{artwork.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link
            href="/ContactUs"
            className="transform transition-transform duration-200 active:scale-110 text-md  p-1"
          >
            Contact Us
          </Link>
          <Link
            href="/AboutPage"
            className="transform transition-transform duration-200 active:scale-110 text-md  p-1"
          >
            About Us
          </Link>
        </div>
        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-52 text-black"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
          {isSearchOpen && (
            <div className="absolute left-0 mt-2 w-full bg-black shadow-lg rounded-lg z-50">
              <ul className="p-2">
                {searchResults.map((result) => (
                  <li key={result.id} className="p-2 hover:bg-gray-700">
                    <Link href={result.name ? `/ArtistPage/${result.id}` : `/artwork/${result.id}`}>
                      {result.name || result.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{itemCount}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-black shadow"
            >
              <div className="card-body text-white">
                <span className="font-bold text-lg">{itemCount} Items</span>
                <span className="text-info">Subtotal: ${getTotal()}</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    <Link href="/Cart">View cart</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        
      <div className="flex align-center justify-center">
        {!isSignedIn ? (
          <div className="flex gap-2">
            <div className="px-1 py-1 mb-2 text-md font-light text-white hover:text-blue-900 hover:bg-white bg-slate-700 rounded-md">
              <Link href="/sign-up" className="self-center">
                Signup
              </Link>
            </div>
            <div className="px-1 py-1 mb-2 text-md font-light text-white hover:text-blue-900 hover:bg-white bg-slate-700 rounded-md">
              <Link href="/sign-in" className="self-center">
                Login
              </Link>
            </div>
          </div>
        ) : (
          <UserButton afterSignOutUrl="/sign-in" />
        )}
        </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
