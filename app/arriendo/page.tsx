'use client';

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { useState } from "react";

interface Equipment {
  id: number;
  name: string;
  image: string;
  description: string;
  category: 'electricos' | 'instrumentacion' | 'mecanicos';
}

const equipmentData: Equipment[] = [
  // ELÉCTRICOS
  {
    id: 1,
    name: "Medidor malla tierra AEMC",
    image: "/resources/icon_01.png",
    description: "El probador de resistencia de tierra digital modelo 4630 realiza pruebas de resistencia de tierra y resistividad del suelo.",
    category: "electricos"
  },
  {
    id: 2,
    name: "Cámara termográfica Fluke TiS55+",
    image: "/resources/icon_01.png",
    description: "Resolución de infrarrojos de 256 x 192 píxeles. Etiquetado de activos. Pantalla táctil con IR Fusion™.",
    category: "electricos"
  },
  {
    id: 3,
    name: "FLUKE 1555 (10kv)",
    image: "/resources/icon_01.png",
    description: "Mida voltajes de hasta 5 kV y ahorre tiempo al marcar tendencias inmediatamente con Fluke Connect®.",
    category: "electricos"
  },
  {
    id: 4,
    name: "OMICRON CPC-100",
    image: "/resources/icon_01.png",
    description: "Sistema patentado de pruebas de inyección primaria que reemplaza varios dispositivos de prueba individuales.",
    category: "electricos"
  },
  {
    id: 5,
    name: "DLRO 200 - Microhmímetro Digital",
    image: "/resources/icon_01.png",
    description: "Pequeño y con un peso inferior a 15 kg. Prueba corrientes desde 10 A a 200 A CC.",
    category: "electricos"
  },
  {
    id: 6,
    name: "Amperímetro Fluke 381",
    image: "/resources/icon_01.png",
    description: "Tecnología inalámbrica permite desplazar la pantalla hasta 10 m del punto de medida.",
    category: "electricos"
  },
  {
    id: 7,
    name: "Multímetro Digital Fluke 87V",
    image: "/resources/icon_01.png",
    description: "Multímetro industrial de alta precisión para aplicaciones críticas en ambientes eléctricos complejos.",
    category: "electricos"
  },
  {
    id: 8,
    name: "Analizador de Calidad Fluke 435",
    image: "/resources/icon_01.png",
    description: "Analizador trifásico de energía y calidad eléctrica para sistemas industriales de alta demanda.",
    category: "electricos"
  },
  {
    id: 9,
    name: "Probador de Cables TDR",
    image: "/resources/icon_01.png",
    description: "Reflectómetro en dominio de tiempo para localización precisa de fallas en cables eléctricos.",
    category: "electricos"
  },

  // INSTRUMENTACIÓN
  {
    id: 10,
    name: "Calibrador de Presión DPI 611",
    image: "/resources/icon_02.png",
    description: "Calibrador portátil de presión con bomba integrada para instrumentos de campo industriales.",
    category: "instrumentacion"
  },
  {
    id: 11,
    name: "Calibrador de Temperatura TC-6621",
    image: "/resources/icon_02.png",
    description: "Calibrador de temperatura de alta precisión para termocuplas y RTDs en procesos industriales.",
    category: "instrumentacion"
  },
  {
    id: 12,
    name: "Multímetro de Proceso Fluke 787",
    image: "/resources/icon_02.png",
    description: "Multímetro especializado para calibración y mantenimiento de lazos de corriente 4-20mA.",
    category: "instrumentacion"
  },
  {
    id: 13,
    name: "Calibrador de Voltaje DC 5500A",
    image: "/resources/icon_02.png",
    description: "Fuente y medidor de voltaje DC de alta precisión para calibración de instrumentos analógicos.",
    category: "instrumentacion"
  },
  {
    id: 14,
    name: "Simulador de Procesos HART",
    image: "/resources/icon_02.png",
    description: "Simulador para comunicación HART en instrumentos inteligentes de campo.",
    category: "instrumentacion"
  },
  {
    id: 15,
    name: "Calibrador Pneumático PPC4",
    image: "/resources/icon_02.png",
    description: "Calibrador neumático portátil para instrumentos de presión y control pneumático.",
    category: "instrumentacion"
  },
  {
    id: 16,
    name: "Analizador de Vibraciones 2515",
    image: "/resources/icon_02.png",
    description: "Analizador portátil para monitoreo y diagnóstico de vibraciones en maquinaria industrial.",
    category: "instrumentacion"
  },
  {
    id: 17,
    name: "Medidor de Flujo Ultrasónico",
    image: "/resources/icon_02.png",
    description: "Medidor no invasivo de flujo para tuberías con tecnología ultrasónica de precisión.",
    category: "instrumentacion"
  },
  {
    id: 18,
    name: "Registrador de Datos Logger",
    image: "/resources/icon_02.png",
    description: "Sistema de adquisición de datos multicanal para monitoreo continuo de variables de proceso.",
    category: "instrumentacion"
  },

  // MECÁNICOS
  {
    id: 19,
    name: "Torquímetro Digital DTQ-200",
    image: "/resources/icon_03.png",
    description: "Torquímetro digital de alta precisión para aplicaciones críticas en montajes industriales.",
    category: "mecanicos"
  },
  {
    id: 20,
    name: "Alineador Láser TKSA 41",
    image: "/resources/icon_03.png",
    description: "Sistema láser para alineación de ejes y poleas en maquinaria rotativa industrial.",
    category: "mecanicos"
  },
  {
    id: 21,
    name: "Balanceadora Portátil VB-8000",
    image: "/resources/icon_03.png",
    description: "Balanceadora dinámica portátil para rotores in-situ sin desmontaje de equipos.",
    category: "mecanicos"
  },
  {
    id: 22,
    name: "Extractor Hidráulico 50T",
    image: "/resources/icon_03.png",
    description: "Extractor hidráulico de 50 toneladas para desmontaje de rodamientos y componentes pesados.",
    category: "mecanicos"
  },
  {
    id: 23,
    name: "Prensa Hidráulica 100T",
    image: "/resources/icon_03.png",
    description: "Prensa hidráulica industrial de 100 toneladas para montaje y desmontaje de componentes.",
    category: "mecanicos"
  },
  {
    id: 24,
    name: "Calentador de Rodamientos TIH 030M",
    image: "/resources/icon_03.png",
    description: "Calentador de inducción para montaje de rodamientos con control de temperatura automático.",
    category: "mecanicos"
  },
  {
    id: 25,
    name: "Medidor de Dureza Digital PHT-1800",
    image: "/resources/icon_03.png",
    description: "Durómetro portátil digital para medición de dureza en materiales metálicos industriales.",
    category: "mecanicos"
  },
  {
    id: 26,
    name: "Detector de Fallas Ultrasónico",
    image: "/resources/icon_03.png",
    description: "Detector ultrasónico para localización de fallas internas en componentes mecánicos.",
    category: "mecanicos"
  },
  {
    id: 27,
    name: "Kit de Herramientas Hidráulicas",
    image: "/resources/icon_03.png",
    description: "Set completo de herramientas hidráulicas para mantenimiento industrial pesado.",
    category: "mecanicos"
  }
];

const categories = [
  {
    id: 'electricos',
    name: 'ELÉCTRICOS',
    icon: '⚡',
    color: 'from-yellow-400 to-yellow-500'
  },
  {
    id: 'instrumentacion',
    name: 'INSTRUMENTACIÓN',
    icon: '📊',
    color: 'from-blue-400 to-blue-500'
  },
  {
    id: 'mecanicos',
    name: 'MECÁNICOS',
    icon: '🔧',
    color: 'from-green-400 to-green-500'
  }
];

export default function ArriendoPage() {
  const [activeCategory, setActiveCategory] = useState<string>('electricos');

  const filteredEquipment = equipmentData.filter(item => item.category === activeCategory);

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
              Arriendo de Equipos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Equipos especializados de alta calidad para sus proyectos industriales y de mantenimiento
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#33353A] to-gray-800 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Categorías</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        activeCategory === category.id
                          ? `bg-gradient-to-r ${category.color} text-black font-bold shadow-lg transform scale-105`
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{category.icon}</span>
                        <span className="font-semibold">{category.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Contact Info */}
                <div className="mt-8 p-4 bg-yellow-400 rounded-lg">
                  <h4 className="font-bold text-black mb-2">¿Necesita asesoría?</h4>
                  <p className="text-sm text-black/80 mb-3">
                    Nuestros expertos pueden ayudarle a seleccionar el equipo ideal
                  </p>
                  <Link
                    href="/contacto"
                    className="block w-full bg-[#33353A] hover:bg-gray-800 text-white text-center py-2 px-4 rounded font-semibold transition-colors duration-200"
                  >
                    Contactar
                  </Link>
                </div>
              </div>
            </div>

            {/* Equipment Grid */}
            <div className="lg:col-span-3">
              {/* Category Header */}
              <div className="mb-8">
                <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${categories.find(c => c.id === activeCategory)?.color} text-black font-bold text-lg shadow-lg`}>
                  <span className="text-2xl mr-3">
                    {categories.find(c => c.id === activeCategory)?.icon}
                  </span>
                  {categories.find(c => c.id === activeCategory)?.name}
                </div>
                <p className="text-gray-600 mt-4 text-lg">
                  {filteredEquipment.length} equipos disponibles para arriendo
                </p>
              </div>

              {/* Equipment Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredEquipment.map((equipment) => (
                  <div
                    key={equipment.id}
                    className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
                  >
                    {/* Equipment Image */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src={equipment.image}
                          alt={equipment.name}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                      {/* Category Badge */}
                      <div className={`absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r ${categories.find(c => c.id === activeCategory)?.color} text-black text-xs font-bold`}>
                        {categories.find(c => c.id === activeCategory)?.icon}
                      </div>
                    </div>

                    {/* Equipment Info */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#33353A] mb-3 line-clamp-2">
                        {equipment.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {equipment.description}
                      </p>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-col space-y-2">
                        <Link
                          href="/contacto"
                          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg text-center transition-colors duration-200 shadow-md"
                        >
                          Cotizar Arriendo
                        </Link>
                        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                          Ver Detalles
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredEquipment.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">📦</div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    No hay equipos disponibles
                  </h3>
                  <p className="text-gray-500">
                    En esta categoría no hay equipos disponibles en este momento
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-[#33353A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Por qué elegir nuestro servicio de arriendo?
            </h2>
            <p className="text-xl text-gray-300">
              Ventajas que nos distinguen en el mercado
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🔧",
                title: "Equipos Certificados",
                description: "Todos nuestros equipos cuentan con certificaciones internacionales"
              },
              {
                icon: "⚡",
                title: "Entrega Rápida",
                description: "Disponibilidad inmediata con entrega en 24 horas"
              },
              {
                icon: "📞",
                title: "Soporte 24/7",
                description: "Asistencia técnica las 24 horas del día, los 7 días de la semana"
              },
              {
                icon: "💰",
                title: "Precios Competitivos",
                description: "Tarifas justas y transparentes sin costos ocultos"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/20 transition-colors duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl md:text-3xl text-yellow-400 mb-4 font-semibold">
            +56 9 1234 5678
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            ¿Necesita arrendar equipos especializados?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
            >
              SOLICITAR COTIZACIÓN
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="tel:+56912345678"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              LLAMAR AHORA
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}