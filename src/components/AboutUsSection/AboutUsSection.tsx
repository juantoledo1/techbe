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
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      {/* Container for the company's story with neon styling */}
      <div className="neon-box">
        {/* First paragraph: Introduction of Betelgeuse Tech */}
        <p>Betelgeuse Tech: A Story of Effort and Technological Passion</p>
        {/* Second paragraph: Founding and mission of the company */}
        <p>Founded in 2025 in the heart of Posadas, Misiones, Argentina, Betelgeuse Tech was born from the vision of bringing accessible and
          quality technology to everyday life. With an initial investment resulting from much effort and dedication, this small local company set out to make its way in the competitive world of consumer electronics.</p>
        {/* Third paragraph: Company's growth and values */}
        <p>Since its humble beginnings, Betelgeuse Tech has grown steadily, driven by a passion for innovation and a commitment to its
          customers. Although the company is still modest in size today, its entrepreneurial spirit and its focus on the future drive it to
          continue to expand and offer products that facilitate and improve people's lives.</p>
        {/* Fourth paragraph: Company's roots and future vision */}
        <p>With its roots firmly planted in the vibrant Misiones land, Betelgeuse Tech looks forward with the conviction that, with hard work and
          a clear vision, the future holds great things.</p>
      </div>
    </section>
  );
}

