'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText =
    'A new era of crypto productivity. Severance from volatility.';

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    const typeSpeed = 150;
    const resetDelay = 10000;

    const typeEffect = () => {
      if (!isDeleting) {
        setTypedText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          isDeleting = true;
          setTimeout(typeEffect, resetDelay);
          return;
        }
      } else {
        setTypedText(fullText.slice(0, index));
        index--;
        if (index === 0) {
          isDeleting = false;
        }
      }
      setTimeout(typeEffect, typeSpeed);
    };

    typeEffect();
  }, []);

  const faqs = [
    {
      question: 'What is LUMON Coin?',
      answer:
        'LUMON Coin is a digital cryptocurrency designed to facilitate efficient, secure, and swift transactions on the blockchain. Beyond its primary function as a medium of exchange, LUMON Coin embodies a cultural statement, blending corporate satire with crypto innovation.',
    },
    {
      question: 'How can I acquire LUMON Coin?',
      answer:
        'You can purchase LUMON Coin on decentralized exchanges like PancakeSwap. Ensure you have a compatible cryptocurrency wallet and sufficient funds in Binance Coin (BNB) to facilitate the swap.',
    },
    {
      question: 'What can I do with LUMON Coin?',
      answer:
        'LUMON Coin offers several utilities: Community Engagement and Tipping, Charitable Initiatives, Merchandising and NFTs, Event Sponsorships, Integration with AI Chatbots, Educational Platforms, and Community Voting and Governance.',
    },
    {
      question: 'Is LUMON Coin secure?',
      answer:
        'Yes, LUMON Coin leverages blockchain technology, ensuring transparency, security, and decentralization.',
    },
    {
      question: 'Where can I store my LUMON Coin?',
      answer:
        'You can store LUMON Coin in any wallet compatible with Binance Smart Chain (BSC) tokens, such as MetaMask, Trust Wallet, or Binance Chain Wallet.',
    },
    {
      question: 'Are there transaction fees?',
      answer:
        'Yes, transactions may incur network fees (gas fees) to compensate network validators.',
    },
    {
      question: 'How can I stay updated on LUMON Coin?',
      answer:
        'Join our official community channels: Twitter: [Your Twitter Handle], Telegram: [Your Telegram Group]',
    },
    {
      question: 'Is LUMON Coin a good investment?',
      answer:
        'LUMON Coin is primarily a meme coin with no intrinsic value or financial backing. Always conduct thorough research before engaging in cryptocurrency transactions.',
    },
    {
      question: 'How does LUMON Coin relate to Lumon Industries?',
      answer:
        "LUMON Coin draws inspiration from the corporate themes in the 'Severance' TV show but is not officially affiliated.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="font-mono">
      <header className="sticky top-0 w-full bg-gray-950 p-4 px-12 gap-y-4 flex flex-col sm:flex-row items-center justify-between shadow-md">
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
          <ul className="flex space-x-6 text-white font-medium">
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
                href="#faq"
              >
                <a>FAQ</a>
              </Link>
            </li>
            <li className="border-b-2 border-gray-950 hover:border-[#51ceff] hover:text-[#51ceff]">
              <Link
                legacyBehavior
                href="#community"
              >
                <a>Community</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 ">
        {/* Hero Section */}
        <div className="text-center mt-10  pb-10">
          {/* #51ceff */}
          <h1 className="text-6xl font-bold tracking-wide uppercase text-[#51ceff]">
            LUMON COIN
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl">
            {typedText}
            <span className="font-bold text-2xl animate-pulse text-[#51ceff] drop-shadow-lg text-[12px]">
              █
            </span>
          </p>
          <p className="mt-2 text-sm text-gray-500 uppercase">
            Contract Address:
          </p>
          <p className="text-gray-400 text-sm break-all">
            0x4b85e6fdb44df059e1756f7588820a83b07030da
          </p>
          <Link
            legacyBehavior
            href="https://pancakeswap.finance/swap?outputCurrency=0x4b85e6fdb44df059e1756f7588820a83b07030da"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block hover:animate-none animate-pulse bg-white hover:bg-gray-900 hover:border-[#51ceff] hover:text-[#51ceff] border-white border-2 text-black font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition-all uppercase tracking-wide"
            >
              Buy on PancakeSwap
            </a>
          </Link>
        </div>
        {/* Border */}
        <hr className="w-100 my-8 h-px border-1 border-gray-700" />

        {/* About LUMON */}
        <div
          id="about"
          className="mt-16 max-w-3xl text-center border-b border-gray-700 pb-10"
        >
          <h2
            className="text-3xl font-semibold text-[#51ceff]"
            style={{ fontFamily: 'Michroma, sans-serif' }}
          >
            Your Future Begins at Lumon
          </h2>
          <p className="mt-4 text-gray-300">
            At Lumon, we believe in severance from outdated financial systems.
            Through the power of LUMON Coin, we create a structured,
            predictable, and stable digital future. Experience seamless
            transactions with unparalleled security and innovation. Compliance
            and discipline are key to maximizing blockchain efficiency.
          </p>
          <p className="mt-2 text-gray-500 text-sm italic">
            &ldquo;Your data is refined. Your transactions are pure. Your future
            is secure.&rdquo;
          </p>
        </div>

        {/* Token Utility */}
        <div className="mt-16 max-w-3xl text-center border-b border-gray-700 pb-10">
          <h2 className="text-3xl font-semibold text-[#51ceff]">
            What Can You Do with LUMON?
          </h2>
          <ul className="mt-4 text-gray-300 text-left">
            <li className="mb-4">
              💼 <b>Access Secure Transactions</b>
              <br></br>Complete transactions within a structured and trusted
              system.
            </li>
            <li className="mb-4">
              🏛 <b>Participate in Governance</b> <br></br>Have a say in the
              policies that shape LUMON&apos;s future.
            </li>
            <li className="mb-4">
              🎟 <b>Exclusive NFT Acquisitions</b> <br></br>Unlock access to
              limited, Lumon-approved digital assets.
            </li>
            <li className="mb-4">
              🎁 <b>Reward System</b> <br></br>Employees (holders) may be
              eligible for rewards, pending managerial approval.
            </li>
            <li className="mb-4">
              🛍 <b>Merchandise and Services</b> <br></br>Use LUMON within the
              Lumon network for various exclusive opportunities.
            </li>
          </ul>
        </div>

        {/* The Meme Side of LUMON */}
        <div className="mt-16 max-w-3xl text-center border-b border-gray-700 pb-10">
          <h2 className="text-3xl font-semibold text-[#51ceff]">
            Not Just a Coin, A Cultural Statement
          </h2>
          <p className="mt-4 text-gray-300">
            Yes, LUMON Coin embraces blockchain efficiency, but let&apos;s not
            forget: **this is a meme coin**. Inspired by corporate absurdity and
            decentralization&apos;s rebellious spirit, we reject monotony and
            embrace the irrationality of financial markets.
          </p>
          <p className="mt-2 text-gray-500 text-sm italic">
            &ldquo;We are all in this together, yet completely alone. Buy
            responsibly.&rdquo;
          </p>
        </div>

        {/* Community Links */}
        <div
          id="community"
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-semibold text-[#51ceff]">
            Join the Collective
          </h2>
          <div className="mt-4 flex gap-6 justify-center">
            <Link
              legacyBehavior
              href="https://twitter.com/yourtwitter"
            >
              <a className="bg-gray-800 hover:bg-gray-900 border-2 border-gray-800 hover:text-[#51ceff] hover:border-[#51ceff] text-white py-2 px-4 rounded-lg transition-all uppercase">
                Twitter
              </a>
            </Link>
            <Link
              legacyBehavior
              href="https://t.me/yourtelegram"
            >
              <a className="bg-gray-800 hover:bg-gray-900 border-2 border-gray-800 hover:text-[#51ceff] hover:border-[#51ceff] text-white py-2 px-4 rounded-lg transition-all uppercase">
                Telegram
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div
        id="faq"
        className="pt-16  text-center bg-gray-900 border-b border-gray-700 pb-10 w-full"
      >
        <h2 className="text-3xl font-semibold text-[#51ceff]">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 px-8 lg:px-0 text-gray-300 text-left max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 py-3"
            >
              <button
                className="cursor-pointer w-full text-left text-lg font-semibold text-[#51ceff] focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="py-16  text-center border-t bg-gray-900 border-gray-700 w-full text-gray-500 text-sm">
        <p className="max-w-3xl mx-auto">
          <strong>Disclaimer:</strong> LUMON is a meme coin with no intrinsic
          value or financial backing. It is not an investment, and there are no
          guarantees of returns. Always do your own research before purchasing
          any cryptocurrency. LUMON is purely for fun, and any resemblance to
          real corporate entities is purely coincidental.
        </p>
      </div>
    </div>
  );
}
