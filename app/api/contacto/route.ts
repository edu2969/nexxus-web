import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_APIKEY);

// Escapa HTML para evitar inyección de contenido en el correo
const escapeHtml = (str: string) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, telefono, mensaje } = await request.json();

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    const safeNombre = escapeHtml(nombre);
    const safeEmail = escapeHtml(email);
    const safeTelefono = telefono ? escapeHtml(telefono) : '';
    const safeMensaje = escapeHtml(mensaje).replace(/\n/g, '<br />');

    const { data, error } = await resend.emails.send({
      // El dominio debe estar verificado en Resend.
      // Para pruebas puedes usar: 'Nexxus Ingeniería <onboarding@resend.dev>'
      from: 'Nexxus Ingeniería <contacto@nexxusingenieria.cl>',
      to: ['contacto@nexxusingenieria.cl'],
      replyTo: email, // Al responder, le llega directo al cliente
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            Nuevo mensaje de contacto - Nexxus Ingeniería
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Información del contacto:</h3>
            <p><strong>Nombre:</strong> ${safeNombre}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            ${safeTelefono ? `<p><strong>Teléfono:</strong> ${safeTelefono}</p>` : ''}
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #f59e0b; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Mensaje:</h3>
            <p style="line-height: 1.6; color: #555;">${safeMensaje}</p>
          </div>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; text-align: center; color: #888; font-size: 12px;">
            <p>Este mensaje fue enviado desde el formulario de contacto de nexxusingenieria.cl</p>
            <p>Fecha: ${new Date().toLocaleString('es-CL')}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error de Resend:', error);
      return NextResponse.json(
        { error: 'No se pudo enviar el email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email enviado correctamente', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}