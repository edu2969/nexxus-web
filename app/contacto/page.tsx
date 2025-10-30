'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Footer from '../components/Footer';

// Esquema de validación con Zod
const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  titulo: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  telefono: z.string().optional(),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.error || 'Error al enviar el mensaje');
      }
    } catch {
      setSubmitError('Error de conexión. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen -mt-24">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/resources/header_01.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Contacto
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Conecta con nuestros expertos en ingeniería
            </p>
            <div className="text-2xl md:text-3xl text-yellow-400 font-semibold">
              +56 9 5217 0244
            </div>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="bg-[#33353A] py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/resources/header_01.png"
                  alt="Contacto Nexxus"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Nexxus Ingeniería</h3>
                  <p className="text-white/90">Expertos en soluciones industriales</p>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">Información de Contacto</h3>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="bg-yellow-400/20 p-3 rounded-full">
                      <PhoneIcon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Teléfono</div>
                      <a href="tel:56952170244" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                        +56 9 5217 0244
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="bg-yellow-400/20 p-3 rounded-full">
                      <EnvelopeIcon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Email</div>
                      <a href="mailto:contacto@nexxus.cl" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                        contacto@nexxus.cl
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="bg-yellow-400/20 p-3 rounded-full">
                      <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">WhatsApp</div>
                      <span className="text-yellow-400">+56 9 5217 0244</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="bg-yellow-400/20 p-3 rounded-full mt-0.5">
                      <MapPinIcon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Dirección</div>
                      <span className="text-gray-300">
                        Avenida Presidente Ríos 1217<br />
                        Villarica - Chile
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Envíanos un mensaje
                </h2>
                <p className="text-gray-300 mb-8">
                  Completa el formulario y nos pondremos en contacto contigo pronto
                </p>

                {submitSuccess && (
                  <div className="bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-lg mb-6 flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    ¡Mensaje enviado correctamente! Te responderemos pronto.
                  </div>
                )}

                {submitError && (
                  <div className="bg-red-500/20 border border-red-500/30 text-red-400 p-4 rounded-lg mb-6 flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-3">
                        Nombre <span className="text-yellow-400">*</span>
                      </label>
                      <input
                        {...register('nombre')}
                        type="text"
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200 hover:border-white/30"
                        placeholder="Ingrese su nombre"
                      />
                      {errors.nombre && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.nombre.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-3">
                        Email <span className="text-yellow-400">*</span>
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200 hover:border-white/30"
                        placeholder="Ingrese su email"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-3">
                        Título <span className="text-yellow-400">*</span>
                      </label>
                      <input
                        {...register('titulo')}
                        type="text"
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200 hover:border-white/30"
                        placeholder="Asunto del mensaje"
                      />
                      {errors.titulo && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.titulo.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-3">
                        Teléfono WhatsApp
                      </label>
                      <input
                        {...register('telefono')}
                        type="tel"
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200 hover:border-white/30"
                        placeholder="+56 9 XXXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3">
                      Mensaje <span className="text-yellow-400">*</span>
                    </label>
                    <textarea
                      {...register('mensaje')}
                      rows={6}
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200 hover:border-white/30 resize-none"
                      placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    />
                    {errors.mensaje && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.mensaje.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#33353A] flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          Enviar Mensaje
                        </>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => reset()}
                      className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 border border-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#33353A]"
                    >
                      Limpiar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#33353A] mb-4">
              Nuestra Ubicación
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visítanos en nuestras oficinas en Villarica o contáctanos para coordinar una reunión
            </p>
          </div>
          
          {/* Location Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#33353A] to-gray-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Información de Ubicación</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400/20 p-3 rounded-full mt-1">
                    <MapPinIcon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Dirección</h4>
                    <p className="text-gray-300">
                      Avenida Presidente Ríos 1217<br />
                      Villarica, Región de la Araucanía<br />
                      Chile
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400/20 p-3 rounded-full mt-1">
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Horarios de Atención</h4>
                    <div className="text-gray-300 space-y-1">
                      <p>Lunes - Viernes: 08:00 - 18:00</p>
                      <p>Sábados: 09:00 - 13:00</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg p-8 text-black">
              <h3 className="text-2xl font-bold mb-6">¿Cómo llegar?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-black/20 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                    </svg>
                  </div>
                  <p><strong>En auto:</strong> Desde Santiago por Ruta 5 Sur, tomar salida hacia Villarica</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-black/20 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </div>
                  <p><strong>En avión:</strong> Aeropuerto La Araucanía (Temuco) + 1 hora en auto</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-black/20 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p><strong>Estacionamiento:</strong> Disponible en el edificio</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interactive Map */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-200">
            <div className="bg-gradient-to-r from-[#33353A] to-gray-800 p-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <MapPinIcon className="w-6 h-6 text-yellow-400" />
                Mapa Interactivo
                <span className="text-sm font-normal text-gray-300 ml-auto">
                  Haz clic para interactuar
                </span>
              </h3>
            </div>
            <div className="relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24704.40715438897!2d-72.25042382085918!3d-39.287096318989725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614623c8e00fe6f%3A0xe7812f04b9706fcc!2sVillarrica%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1683058093338!5m2!1ses-419!2scl" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale-0 hover:saturate-110 transition-all duration-500"
              />
              
              {/* Map overlay with contact info */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                <h4 className="font-bold text-[#33353A] mb-2">Nexxus Ingeniería</h4>
                <p className="text-sm text-gray-600 mb-2">Av. Presidente Ríos 1217</p>
                <div className="flex items-center gap-2 text-sm">
                  <PhoneIcon className="w-4 h-4 text-yellow-500" />
                  <span className="text-yellow-600 font-semibold">+56 9 5217 0244</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              ¿Prefieres una reunión en tu empresa? ¡También podemos visitarte!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+56952170244"
                className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Llamar Ahora
              </a>
              <a
                href="https://wa.me/56952170244"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
    </div>
  );
}