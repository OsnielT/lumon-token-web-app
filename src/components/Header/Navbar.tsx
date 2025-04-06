import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-gray-950 p-4 px-12 flex flex-col sm:flex-row items-center justify-between shadow-md z-50">
      {/* Hamburger menu button - only visible on small screens */}
      <button
        className="sm:hidden absolute right-4 top-4 text-white"
        onClick={() => setOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      <svg
        width="150"
        height="28"
        viewBox="482 398 1034 190"
        className="group transition-all duration-300"
      >
        <g>
          <g>
            <path
              className="fill-white group-hover:fill-[#51ceff] transition-all duration-300"
              fillRule="evenodd"
              d="m515.5 533.5q66.5 0 133 0 0 12.5 0 25-83 0-166 0 0-69 0-138 16 0 32 0-0.5 56.8 1 113z"
            />
            <path
              className="fill-white group-hover:fill-[#51ceff] transition-all duration-300"
              fillRule="evenodd"
              d="m702.5 521.5q2 8.3 10 11.5 53.5 1 107 0 10.4-2.1 12-12.5 1.5-49.7 1-100 16 0 32 0 0.3 55.5-0.5 111-5.4 21.9-27.5 26.5-70 1-140 0-26.1-6.8-27-33.5 0-52 0-104 16 0 32 0-0.5 50.8 1 101z"
            />
            <path
              className="fill-white group-hover:fill-[#51ceff] transition-all duration-300"
              fillRule="evenodd"
              d="m916.5 420.5q37.4 51.1 75.5 102 38.1-50.9 75.5-102 14.5 0 29 0 0 69 0 138-16 0-32 0 0.3-40.5-0.5-81-30.3 39.8-59.5 80.5-12.5 1-25 0-29.9-40.1-59.5-80.5-0.8 40.5-0.5 81-16 0-32 0 0-69 0-138 14.5 0 29 0z"
            />
            <path
              className="fill-white group-hover:fill-[#51ceff] transition-all duration-300"
              fillRule="evenodd"
              d="m1362.5 420.5q60.4 47.7 120.5 96 0.8-48 0.5-96 16 0 32 0 0 69 0 138-15 0.2-30-0.5-59.8-48-120-95.5-1.5 48-1 96-16 0-32 0 0-69 0-138 15 0 30 0z"
            />
          </g>
          <g>
            <path
              fillRule="evenodd"
              className="fill-[#51ceff] animate-pulse group-hover:animate-none group-hover:fill-[#51ceff] transition-all duration-300"
              d="m1213 588c-52.5 0-95-42.5-95-95 0-52.5 42.5-95 95-95 52.5 0 95 42.5 95 95 0 52.5-42.5 95-95 95z"
            />
            <path
              fillRule="evenodd"
              className="fill-gray-900"
              d="m1212.5 446.5q4.5-0.1 6.5 4 13.9 24.3 27 49 6 38.3-32.5 44-30-4-32-34-0.4-7.3 2.5-14 13.5-25 28.5-49z"
            />
          </g>
        </g>
      </svg>
      <nav>
        <ul
          className={` overflow-hidden mt-0 duration-150 transition-all ease-in-out flex text-center sm:flex-row gap-y-5 flex-col sm:space-x-6 text-white font-medium ${
            isOpen ? 'h-30 sm:h-auto mt-5 sm:mt-0' : 'h-0  sm:h-auto sm:flex'
          }`}
        >
          <li className="border-b-2 border-gray-950 hover:border-[#51ceff] hover:text-[#51ceff]">
            <Link
              legacyBehavior
              href="#about"
            >
              <a>About</a>
            </Link>
          </li>
          <li className="border-b-2 border-gray-950 hover:border-[#51ceff] hover:text-[#51ceff]">
            <Link
              legacyBehavior
              href="#howItWorks"
            >
              <a>How It Works</a>
            </Link>
          </li>
          <li className="border-b-2 border-gray-950 hover:border-[#51ceff] hover:text-[#51ceff]">
            <Link
              legacyBehavior
              href="#helpInnie"
            >
              <a>Help an Innie!</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
