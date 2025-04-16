'use client';

/**
 * WhatWeDoSection component:
 * Displays the company's mission and values related to selling retro tech products.
 */
export function WhatWeDoSection() {
  // This component defines the "What We Do" section of the landing page.
  // It describes the company's mission and values regarding the sale of retro tech products.
  return (
    // Main section container for "What We Do" with a bottom margin for spacing.
    <section id="what-we-do" className="mb-12">
      {/* Section title with bold font and a bottom margin for visual hierarchy. */}
      <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
      {/* Container with a neon effect for visual appeal. */}
      <div className="neon-box mx-4">
        {/* Paragraph describing the company's mission. */}
        <p>Lo Que Hacemos: Redescubriendo el Pasado con Calidad Presente</p>
        {/* Paragraph detailing the company's passion for retro tech. */}
        <p>
          En Betelgeuse Tech, nos apasiona rescatar la esencia de
          iconos retro y ponerlos nuevamente al alcance de tus manos. Nos
          dedicamos a la búsqueda y selección minuciosa de artículos de alta
          calidad con un toque nostálgico, abarcando desde dispositivos
          electrónicos hasta accesorios que evocan épocas pasadas.
        </p>
        <p>
          Nuestro compromiso va más allá de la simple venta. Nuestro equipo
          especializado se encarga de inspeccionar y verificar cada producto
          para asegurar que cumpla con nuestros rigurosos estándares de
          calidad y funcionamiento. Queremos que cada artículo que llegue a
          tu hogar no solo te transporte a otra época, sino que también te
          ofrezca la confiabilidad y el rendimiento que esperas en la
          actualidad.
        </p>
        <p>
          En Betelgeuse Tech, nos esforzamos por ofrecerte una experiencia
          de compra cómoda y segura, entregando estos tesoros retro
          directamente en tu puerta. Creemos en el valor de la historia y
          en la belleza del diseño clásico, y trabajamos cada día para
          compartir esa pasión contigo.
        </p>
      </div>
    </section>
  );
}


