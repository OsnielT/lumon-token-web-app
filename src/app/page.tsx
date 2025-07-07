"use client";
import Navbar from "@/components/Header/Navbar";
import InnieRevealCTA from "@/components/InnieRevealCTA/InnieRevealCTA";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SpinningCoin from "@/components/spinningCoin";



export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "In every token lies a refined number, a new possibility.";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    const typeSpeed = 150;
    const resetDelay = 8000;

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

  const innies = [
    {
      name: "James Wong.",
      role: "Macrodata Refiner",
      perk: "Snack from the vending machine",
      image: "/headshots/james-wong.png",
    },
    {
      name: "Michael Flemming.",
      role: "New Hire",
      perk: "Time in the wellness room",
      image: "/headshots/michael-flemming.png",
    },
    {
      name: "Taylor Eagon.",
      role: "MDR",
      perk: "A curated music break",
      image: "/headshots/taylor-eagan.png",
    },
  ];

  return (
    <div className='font-mono crt-glow-effect text-white bg-gray-900 min-h-screen flex flex-col items-center '>
      <Navbar />

      <main className='flex-grow px-6 max-w-5xl space-y-12'>
        <section className='text-center pb-8 lg:py-8 my-8  mx-0 px-0 flex flex-col gap-10 lg:flex-row justify-center items-center'>
          <div className='order-2 lg:order-1'>
            <h1 className='text-4xl font-extrabold text-[#51ceff] leading-tight'>
              Empower the Innies.
            </h1>
            <hr></hr>
            <h2 className='text-4xl font-extrabold leading-tight text-white'>
              Escape the System.
            </h2>

            <p className='mt-6 text-gray-300 text-lg'>
              Welcome to LUMON Token — a digital currency inspired by the world
              of Lumon Industries. Every token you hold is a vote for structure,
              compliance… and a little rebellion.
            </p>
            <p className='mt-2 text-[#51ceff] text-sm font-mono'>
              “{typedText}”
            </p>
          </div>

          <div className='order-1 lg:order-2'>
            <SpinningCoin />
          </div>
        </section>

        <section>
          <h2
            className='text-3xl font-semibold text-[#51ceff]'
            id='howItWorks'>
            How It Works
          </h2>
          <ul className='text-gray-300 list-disc list-inside space-y-4 mt-4'>
            <li>
              <strong>Get LUMON</strong>: Buy tokens on PancakeSwap.
            </li>
            <li>
              <strong>Trigger a Reveal</strong>: An innie profile is revealed,
              showing who your purchase helped.
            </li>
            <li>
              <strong>Join the Network</strong>: Share your innie, join the
              Discord, and become part of the Collective.
            </li>
          </ul>
        </section>

        <section className='text-center px-6 py-12 bg-gray-950 rounded-lg border-t border-gray-600'>
          <h2 className='text-3xl font-semibold text-[#51ceff] mb-2'>
            Acquire LUMON Token
          </h2>
          <p className='text-gray-300 mb-4 max-w-xl mx-auto'>
            Ready to empower an innie? Each token purchase brings light to the
            darkness of the Macrodata Refinement floor.
          </p>
          <Link
            href='https://pancakeswap.finance/swap?outputCurrency=0x4b85e6fdb44df059e1756f7588820a83b07030da'
            legacyBehavior>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-white hover:bg-gray-900 text-black hover:text-[#51ceff] border-white border-2 font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition-all uppercase tracking-wide'>
              Buy on PancakeSwap
            </a>
          </Link>
        </section>
        <hr
          id='helpInnie'
          className='mt-20'></hr>
        <section className='max-w-3xl mx-auto px-6 py-12 text-center'>
          <h2 className='text-3xl font-semibold text-[#51ceff] mb-4'>
            Meet the Innie
          </h2>
          <p className='text-gray-300 mb-6'>
            Each purchase randomly reveals a Lumon employee — your contribution
            grants them rare privileges: music, wellness breaks, or even a bite
            from the vending machine.
          </p>

          <section className='flex flex-col sm:flex-row gap-5 mb-10'>
            {innies.map((innie, idx) => (
              <div
                key={`innie-${idx}`}
                className='relative rounded-2xl overflow-hidden border-t shadow-sky-950 shadow-none hover:shadow-lg border-gray-300 top-0 hover:-top-1 transition-all ease-in-out duration-200'>
                <Image
                  className='w-full'
                  alt={`innie-headshot-${idx}`}
                  src={innie.image}
                  width={200}
                  height={200}
                />
                <span className='absolute bottom-0 backdrop-blur-xs w-full left-0 sm:text-lg text-3xl bg-slate-900/20 py-4 sm:py-1'>
                  {innie.name}
                </span>
              </div>
            ))}
          </section>

          <InnieRevealCTA innies={innies} />
        </section>

        <section className='pb-20'>
          <h2 className='text-3xl font-semibold text-[#51ceff]'>
            Join the Collective
          </h2>
          <p className='text-gray-300 mt-2'>
            Stay informed and connected with the latest developments in the
            LUMON Token universe. Follow us on our official channels and become
            an integral part of the community that blurs the lines between
            fiction and reality.
          </p>
        </section>

        <hr></hr>
        <section className='pb-10'>
          <h2 className='text-3xl font-semibold text-[#51ceff]'>Disclaimer</h2>
          <p className='text-gray-400 mt-2 text-xs'>
            This website is an unofficial fan-made project and is not
            affiliated, associated, authorized, endorsed by, or in any way
            officially connected with Apple Inc., Fifth Season, Red Hour Films,
            or any producers, writers, or actors associated with the television
            series &quot;Severance.&quot; All trademarks referenced are the
            property of their respective owners.
          </p>
          <p className='text-gray-400 mt-2 text-xs'>
            LUMON Token is a fictional, parody cryptocurrency created for
            entertainment purposes only. It has no intrinsic or monetary value,
            is not an investment vehicle, and is not intended for financial
            speculation. The project is a satirical commentary and homage to the
            world depicted in the show &quot;Severance.&quot;
          </p>
          <p className='text-gray-400 mt-2 text-xs'>
            No purchase is necessary to view, enjoy, or interact with this
            website or its content. Any participation in acquiring the token is
            entirely voluntary and symbolic. Users should not expect any returns
            or benefits from holding the token. Always do your own research and
            consult with a financial professional before engaging with
            cryptocurrency or blockchain projects.
          </p>
        </section>
      </main>
    </div>
  );
}
