import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16 relative z-20" id="contacto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and About */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold mb-4">Nosotros</h3>
                        <p className="text-gray-300">
                            Somos una empresa de ingeniería especializada en montaje eléctrico industrial,
                            distribución de equipos industriales, mantenimiento, gestión de activos y confiabilidad.
                            Contamos con profesionales altamente capacitados y tecnología de vanguardia para
                            cumplir con los objetivos de nuestros clientes.
                        </p>
                        <Image
                            src="/resources/nexxus-brand-full.png"
                            alt="Nexxus Ingeniería"
                            className="h-32 w-auto m-4"
                            width={128}
                            height={64}
                        />                        
                    </div>

                    {/* Site Map */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Mapa del sitio</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href="/" className="hover:text-yellow-400">Inicio</Link></li>
                            <li><Link href="/somos" className="hover:text-yellow-400">Somos</Link></li>
                            <li><Link href="/media" className="hover:text-yellow-400">Media</Link></li>
                            <li><Link href="/contacto" className="hover:text-yellow-400">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contacto</h3>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-center space-x-2">
                                <span>📍</span>
                                <span>Longitudinal 6, oficina 1233, independencia, Santiago, Chile</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>📧</span>
                                <span>contacto@nexxusingenieria.cl</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>📱</span>
                                <span>+56 9 538 22 620 / +56 9 621 18 754</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}