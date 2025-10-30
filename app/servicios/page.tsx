'use client';

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export default function ServiciosPage() {
    return (
        <div className="min-h-screen bg-[#33353A]">
            {/* Hero Section */}
            <div className="relative py-24 bg-gradient-to-r from-[#33353A] to-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Nuestros Servicios
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Expertos en soluciones eléctricas para la industria minera con tecnología de vanguardia
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Images Section */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                {/* Main Technology Image */}
                                <div className="col-span-2">
                                    <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                                        <Image
                                            src="/resources/header_01.png"
                                            alt="Tecnología industrial"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    </div>
                                </div>
                                
                                {/* Service Icons */}
                                <div className="flex justify-center">
                                    <div className="bg-yellow-400 p-4 rounded-full shadow-lg">
                                        <Image
                                            src="/resources/icon_01.png"
                                            alt="Proyectos Eléctricos"
                                            width={48}
                                            height={48}
                                            className="w-12 h-12"
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex justify-center">
                                    <div className="bg-yellow-400 p-4 rounded-full shadow-lg">
                                        <Image
                                            src="/resources/icon_02.png"
                                            alt="Mantenimiento Industrial"
                                            width={48}
                                            height={48}
                                            className="w-12 h-12"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#33353A] mb-6">
                                    Expertos en Soluciones Eléctricas
                                </h2>
                                
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

            {/* Services Grid Section */}
            <div className="py-16 bg-[#33353A]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">
                        Servicios Especializados
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "/resources/icon_01.png",
                                title: "Proyectos Eléctricos",
                                description: "Diseño e implementación de sistemas eléctricos industriales con los más altos estándares de calidad y seguridad."
                            },
                            {
                                icon: "/resources/icon_02.png",
                                title: "Mantenimiento Industrial",
                                description: "Servicios de mantenimiento preventivo y correctivo para asegurar la continuidad operacional de sus equipos."
                            },
                            {
                                icon: "/resources/icon_03.png",
                                title: "Automatización",
                                description: "Soluciones de automatización y control para optimizar procesos industriales y aumentar la eficiencia."
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="text-center">
                                    <div className="bg-yellow-400 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={48}
                                            height={48}
                                            className="w-12 h-12"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#33353A] mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                        ¿Necesitas una cotización personalizada?
                    </h2>
                    <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
                        Contáctanos para obtener una solución adaptada a las necesidades específicas de tu proyecto
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center bg-[#33353A] hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
                    >
                        Solicitar Cotización
                        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}