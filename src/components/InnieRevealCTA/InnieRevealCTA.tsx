'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Innie {
  name: string;
  role: string;
  perk: string;
  image: string;
}

interface InnieRevealCTAProps {
  innies: Innie[];
}

export default function InnieRevealCTA({ innies }: InnieRevealCTAProps) {
  const [hasPurchased, setHasPurchased] = useState(false);
  const [innie, setInnie] = useState<Innie | null>(null);

  const handlePurchase = () => {
    const index = Math.floor(Math.random() * innies.length);
    const selected = innies[index];
    setInnie(selected);
    setHasPurchased(true);
  };

  return (
    <section className="bg-gray-950 text-white text-center py-16 px-6 border-t border-gray-600 rounded-lg ">
      <h2 className="text-4xl font-bold text-[#4f707e] mb-6">
        Acquire LUMON Token
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-6">
        Embrace the future by adding LUMON Token to your digital portfolio. Each
        purchase is a symbolic act of empathy that empowers an Innie within
        Lumon Industries.
      </p>

      {!hasPurchased ? (
        <>
          <Link
            legacyBehavior
            href="https://pancakeswap.finance/swap?outputCurrency=0x4b85e6fdb44df059e1756f7588820a83b07030da"
          >
            <a
              onClick={handlePurchase}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black border-white border-2 font-bold py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-gray-900 hover:border-[#51ceff] hover:text-[#51ceff] transition-all uppercase tracking-wide animate-pulse"
            >
              Buy LUMON Token
            </a>
          </Link>
        </>
      ) : (
        <div className="animate-fade-in flex flex-col gap-8 items-center mt-10 text-center">
          <h3 className="text-2xl text-green-400 mb-2">You helped:</h3>
          <div className="inline-block bg-gray-800 rounded-lg p-6 shadow-lg">
            {innie && (
              <>
                <Image
                  src={innie.image}
                  alt={innie.name}
                  width={150}
                  height={150}
                  className="rounded-md mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold">{innie.name}</h4>
                <p className="text-sm text-gray-400">{innie.role}</p>
                <p className="mt-2 text-sm text-gray-300 italic">
                  Received: {innie.perk}
                </p>
              </>
            )}
          </div>

          <>
            <Link
              legacyBehavior
              href="https://pancakeswap.finance/swap?outputCurrency=0x4b85e6fdb44df059e1756f7588820a83b07030da"
            >
              <a
                onClick={handlePurchase}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white mt-6 text-black border-white border-2 font-bold py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-gray-900 hover:border-[#51ceff] hover:text-[#51ceff] transition-all uppercase tracking-wide animate-pulse"
              >
                Support Another 👨🏻‍💼
              </a>
            </Link>
          </>
        </div>
      )}
    </section>
  );
}
