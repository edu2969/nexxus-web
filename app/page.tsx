'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

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
    <div className="min-h-screen">
      {/* Header Image Full Width */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 will-change-transform"
          style={{
        transform: `translateY(var(--scroll-y, 0) * 1.3) scale(${1 + (Number(getComputedStyle(document.documentElement).getPropertyValue('--scroll-y')) || 0) * 1.3})`,
          }}
        >
          <Image
        src="/resources/header_01.png"
        alt="NEXXUS Ingeniería"
        fill
        className="object-cover"
        priority
          />
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.addEventListener('scroll', () => {
          const scrolled = window.pageYOffset;
          const parallax = scrolled * 0.5;
          document.documentElement.style.setProperty('--scroll-y', parallax + 'px');
        });
          `
        }}
      />

      {/* Services Section */}
      <section className="py-16 bg-[#33353A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Soluciones Integrales */}
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <Image
          src="/resources/icon_01.png"
          alt="Soluciones Integrales"
          width={80}
          height={80}
          className="object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-white leading-tight">
            SOLUCIONES<br />INTEGRALES
          </h3>
        </div>

        {/* Energía & Innovación */}
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <Image
          src="/resources/icon_02.png"
          alt="Energía & Innovación"
          width={80}
          height={80}
          className="object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-white leading-tight">
            ENERGÍA &<br />INNOVACIÓN
          </h3>
        </div>

        {/* Alcance Nacional */}
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <Image
          src="/resources/icon_03.png"
          alt="Alcance Nacional"
          width={80}
          height={80}
          className="object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-white leading-tight">
            ALCANCE<br />NACIONAL
          </h3>
        </div>
          </div>
        </div>
      </section>

    </div>
  );
}
