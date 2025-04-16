'use client';

/**
 * AboutUsSection component:
 * Displays information about the company, Betelgeuse Tech.
 * Includes a brief history and the company's mission.
 */
export function AboutUsSection() {
  return (
    // Main section for "About Us" content
    <section id="about" className="mb-12">
      {/* Title of the section */}
      <h2 className="text-2xl font-bold mb-4">Sobre Nosotros</h2>
      {/* Container for the company's story with neon styling */}
      <div className="neon-box mx-4">
        {/* First paragraph: Introduction of Betelgeuse Tech */}
        <p>Betelgeuse Tech: Una Historia de Esfuerzo y Pasión Tecnológica</p>
        {/* Second paragraph: Founding and mission of the company */}
        <p>Fundada en 2025 en el corazón de Posadas, Misiones, Argentina, Betelgeuse Tech nació de la visión de llevar tecnología accesible y de calidad a la vida cotidiana. Con una inversión inicial fruto de mucho esfuerzo y dedicación, esta pequeña empresa local se propuso abrirse camino en el competitivo mundo de la electrónica de consumo.</p>
        {/* Third paragraph: Company's growth and values */}
        <p>Desde sus humildes comienzos, Betelgeuse Tech ha crecido con paso firme, impulsada por la pasión por la innovación y el compromiso con sus clientes. Si bien hoy en día la empresa es aún modesta en tamaño, su espíritu emprendedor y la mirada puesta en el futuro la impulsan a seguir expandiéndose y ofreciendo productos que faciliten y mejoren la vida de las personas.</p>
        {/* Fourth paragraph: Company's roots and future vision */}
        <p>Con raíces bien plantadas en la vibrante tierra misionera, Betelgeuse Tech mira hacia adelante con la convicción de que, con trabajo arduo y una visión clara, el futuro depara grandes cosas.</p>
      </div>
    </section>
  );
}



