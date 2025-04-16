'use client';

export function WhatWeDoSection() {
  // This component defines the "What We Do" section of the landing page.
  // It describes the company's mission and values regarding the sale of retro tech products.
  return (
    // Main section container for "What We Do" with a bottom margin for spacing.
    <section id="what-we-do" className="mb-12">
      {/* Section title with bold font and a bottom margin for visual hierarchy. */}
      <h2 className="text-2xl font-bold mb-4">What We Do</h2>
      {/* Container with a neon effect for visual appeal. */}
      <div className="neon-box">
        {/* Paragraph describing the company's mission. */}
        <p>What We Do: Rediscovering the Past with Present Quality</p>
        {/* Paragraph detailing the company's passion for retro tech. */}
        <p>
          At Betelgeuse Tech, we are passionate about rescuing the essence of
          iconic retro products and putting them back within your reach. We
          dedicate ourselves to the meticulous search and selection of high-quality
          items with a nostalgic touch, ranging from electronic devices to accessories
          that evoke past eras.
        </p>
        <p>
          Our commitment goes beyond just selling. Our specialized team inspects and
          verifies each product to ensure it meets our rigorous standards of quality
          and functionality. We want each item that reaches your home not only to
          transport you to another era but also to offer you the reliability and
          performance you expect today.
        </p>
        <p>
          At Betelgeuse Tech, we strive to offer you a comfortable and secure
          shopping experience, delivering these retro treasures directly to your
          door. We believe in the value of history and the beauty of classic
          design, and we work every day to share that passion with you.
        </p>
      </div>
    </section>
  );
}
