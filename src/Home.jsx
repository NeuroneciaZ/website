import React from "react";
import { Monitor, Keyboard, Mouse, Headphones, Tablet } from "lucide-react";
import { FaSteam } from "react-icons/fa"; // ✅ Import Steam icon

export default function Home() {
  return (
    <div
      className="min-h-screen text-gray-900 antialiased bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.tenor.com/goY0VJNhQSIAAAAe/bleh-bleh-cat.png')",
      }}
    >
      {/* Header */}
      <header className="p-6 border-b bg-white/70 backdrop-blur-sm shadow-sm flex items-center justify-between">
        <h1 className="text-2xl font-bold text-sky-800">Balls</h1>
        <div className="flex items-center gap-3">
          {/* Twitter */}
          <a
            href="https://x.com/bydexn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-sky-200 transition-transform transform hover:scale-105"
            aria-label="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path fillRule="evenodd" clipRule="evenodd" d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="#0284C7"/>
            </svg>
          </a>

          {/* osu! */}
          <a
            href="https://osu.ppy.sh/users/11648779"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full hover:bg-pink-100 transition-transform transform hover:scale-105 flex items-center justify-center"
            aria-label="osu! profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512" aria-hidden>
              <circle cx="256" cy="256" r="256" fill="#ff66aa" />
              <text x="50%" y="57%" textAnchor="middle" fontSize="180" fill="white" fontFamily="Arial, Helvetica, sans-serif">osu!</text>
            </svg>
          </a>

          {/* Steam */}
          <a
            href="https://steamcommunity.com/profiles/76561198183992165/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105 flex items-center justify-center"
            aria-label="Steam profile"
          >
            <FaSteam size={22} className="text-gray-800" />
          </a>
        </div>
      </header>
