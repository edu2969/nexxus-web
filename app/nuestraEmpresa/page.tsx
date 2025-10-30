'use client';

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export default function NuestraEmpresa() {
  return (
    <div className="min-h-screen bg-[#33353A]">
      {/* Hero Section */}
      <div 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/resources/header_01.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nuestra Empresa
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Líderes en ingeniería eléctrica industrial con más de una década de experiencia
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images Section */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Main Technology Image */}
                <div className="col-span-2">
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/resources/header_01.png"
                      alt="Tecnología industrial"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Tecnología de Vanguardia
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Smaller images for visual appeal */}
                <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                    <Image
                      src="/resources/icon_01.png"
                      alt="Proyectos Eléctricos"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                </div>
                
                <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-[#33353A] flex items-center justify-center">
                    <Image
                      src="/resources/icon_03.png"
                      alt="Automatización"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black p-4 rounded-full shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#33353A] mb-6">
                  Expertos en Soluciones Eléctricas
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Somos una empresa de ingeniería especializada en montaje eléctrico industrial, 
                  distribución de equipos industriales, mantenimiento, gestión de activos y confiabilidad. 
                  Contamos con profesionales altamente capacitados y tecnología de vanguardia.
                </p>
                
                {/* Services List */}
                <div className="space-y-4 mb-8">
                  {[
                    "Automatización y control",
                    "Pruebas Eléctricas",
                    "Pruebas y Mantenimiento Mecánico",
                    "Ventas",
                    "Arriendo de Equipos y Camionetas"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">{service}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <a
                    href="/resources/catalogo.pdf"
                    download
                    className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Descargar Catálogo 2024
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-[#33353A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nuestra Experiencia en Números
            </h2>
            <p className="text-xl text-gray-300">
              Años de dedicación y excelencia en el sector industrial
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Años de Experiencia" },
              { number: "200+", label: "Proyectos Completados" },
              { number: "50+", label: "Clientes Satisfechos" },
              { number: "24/7", label: "Soporte Técnico" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors duration-300">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/resources/header_01.png')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div>
              <div className="text-2xl md:text-3xl text-yellow-400 mb-4 font-semibold">
                +56 9 1234 5678
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                ¿Necesita hablar con Nexxus Ingeniería?
              </h2>
              <Link
                href="/contacto"
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
              >
                LLAMAR AHORA
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </Link>
            </div>
            
            {/* Technician Image */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
                  <Image
                    src="/resources/nexxus-brand.png"
                    alt="Nexxus Ingeniería"
                    width={200}
                    height={100}
                    className="w-48 h-auto"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Image
                    src="/resources/icon_02.png"
                    alt="Mantenimiento"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#33353A] rounded-full flex items-center justify-center shadow-lg">
                  <Image
                    src="/resources/icon_03.png"
                    alt="Automatización"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center p-8 bg-gradient-to-br from-[#33353A] to-gray-800 rounded-lg text-white">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-gray-300 leading-relaxed">
                Proporcionar soluciones eléctricas innovadoras y confiables que impulsen el crecimiento 
                y la eficiencia de la industria minera chilena, manteniendo siempre los más altos 
                estándares de calidad y seguridad.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg text-black">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-black/80 leading-relaxed">
                Ser reconocidos como la empresa líder en soluciones eléctricas industriales en Chile, 
                siendo el socio estratégico preferido de la industria minera para la transformación 
                digital y tecnológica del sector.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}