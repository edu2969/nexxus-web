'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

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
    <div className="min-h-screen -mt-24">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden z-10"
        style={{
          backgroundImage: "url('/resources/header_01.png')",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex items-center justify-end pr-8 md:pr-16 lg:pr-24">
          <div className="text-center md:text-right max-w-lg">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
          Pronto verás el futuro
        </h1>
        <button
          onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
        >
          LLAMAR AHORA
        </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-[#33353A] py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Nuestros servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { image: "/resources/icon_01.png", title: "Proyectos Eléctricos" },
          { image: "/resources/icon_02.png", title: "Mantenimiento Industrial" },
          { image: "/resources/icon_03.png", title: "Automatización" }
        ].map((service, index) => (
          <div key={index} className="text-center">
            <div className="mb-4">
          <Image
            src={service.image}
            alt={service.title}
            width={96}
            height={96}
            className="mx-auto"
          />
            </div>
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
          </div>
        ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="relative py-24 bg-cover bg-center bg-no-repeat z-20 h-1/2"
        style={{ backgroundImage: "url('/resources/header_01.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="text-2xl md:text-3xl text-yellow-400 mb-4">+56 9 1234 5678</div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            ¿Necesitas hablar con Nexxus Ingeniería?
          </h2>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            LLAMAR AHORA
          </button>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="bg-[#33353A] py-16 relative z-20 h-1/2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Expertos en proyectos mineros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 text-white">
            <div>Automatización y control</div>
            <div>Pruebas eléctricas</div>
            <div>Mantenimiento mecánico</div>
            <div>Arriendo de equipo y transporte</div>
            <div>Ventas</div>
          </div>
          <a
            href="/resources/catalogo.pdf"
            download
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 inline-block"
          >
            Descargar Catálogo 2024
          </a>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
