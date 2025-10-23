'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { SiBuildkite } from "react-icons/si";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (    
    <div className="min-h-screen bg-[#33353A] flex items-center justify-center">
      <div className="text-center">
        <div className="flex flex-row items-center justify-center mb-8 space-x-6">
          <SiBuildkite className="text-white" size="8rem"/>
          <h1 className="text-6xl md:text-6xl font-bold text-white mb-6 ml-4">
            EN CONSTRUCCIÓN
          </h1>
        </div>
        <p className="text-2xl md:text-3xl text-gray-300">
          Pronto verás el futuro
        </p>
      </div>
    </div>
  );
}
