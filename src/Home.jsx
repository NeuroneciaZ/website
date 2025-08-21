import React from "react";
import { Monitor, Keyboard, Mouse, Headphones, Tablet } from "lucide-react";
import { FaSteam, FaInstagram } from "react-icons/fa"; // ✅ Steam + Instagram

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                fill="#0284C7"
              />
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 512 512"
              aria-hidden
            >
              <circle cx="256" cy="256" r="256" fill="#ff66aa" />
              <text
                x="50%"
                y="57%"
                textAnchor="middle"
                fontSize="180"
                fill="white"
                fontFamily="Arial, Helvetica, sans-serif"
              >
                osu!
              </text>
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

          {/* Instagram */}
          <a
            href="https://www.instagram.com/bennyjnd"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-pink-200 transition-transform transform hover:scale-105 flex items-center justify-center"
            aria-label="Instagram profile"
          >
            <FaInstagram size={22} className="text-pink-600" />
          </a>
        </div>
      </header>

      {/* Main Section */}
      <main className="max-w-3xl mx-auto p-6 w-full">
        {/* About Section */}
        <section className="mb-12">
          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-sky-200 text-center">
            <p className="mb-3 font-bold">Hi! I'm Neuronecia.</p>
            <p className="mb-3">
              I play video games, mainly{" "}
              <span className="text-pink-600">osu!</span> and{" "}
              <span className="text-gray-700">CS</span>.
            </p>
            <p className="text-gray-800">
              This website is particularly for my skin and cfg but
              I'll probably add something random here that's related to my work.
            </p>

            {/* My Skin Button */}
            <a
              href="https://drive.google.com/file/d/1KQ2MGleaj8r6ZYktEygrjfaI45cfdFDe/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-5 py-2 border-2 border-sky-500 text-sky-700 font-medium rounded-lg hover:bg-sky-100 transition mb-2"
            >
              My Skin
            </a>
          </div>
        </section>

        {/* Setup Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-sky-800">Setup</h2>
          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-sky-200">
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-center gap-3">
                <Monitor className="text-sky-600" size={20} /> Monitor:
                Viewsonic XG2401
              </li>
              <li className="flex items-center gap-3">
                <Keyboard className="text-sky-600" size={20} /> Keyboard:
                Leopold FC980M Cherry MX Black
              </li>
              <li className="flex items-center gap-3">
                <Mouse className="text-sky-600" size={20} /> Mouse: Lamzu Maya
                4K
              </li>
              <li className="flex items-center gap-3">
                <Mouse className="text-sky-600" size={20} /> Mousepad: Artisan
                Zero XSoft
              </li>
              <li className="flex items-center gap-3">
                <Headphones className="text-sky-600" size={20} /> Earphone:
                Shure SE215
              </li>
              <li className="flex items-center gap-3">
                <Tablet className="text-sky-600" size={20} /> Tablet: Wacom
                CTL-472
              </li>
            </ul>
          </div>
        </section>

        {/* Full Width Cat Image */}
        <section className="mb-12">
          <img
            src="https://media.tenor.com/goY0VJNhQSIAAAAe/bleh-bleh-cat.png"
            alt="Cat Meme"
            className="w-full h-auto rounded-none shadow-xl"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-sky-800 border-t border-sky-300 bg-white/70 backdrop-blur-sm">
        &copy; 2025 Neuronecia, All rights reserved.
      </footer>
    </div>
  );
}

