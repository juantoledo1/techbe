'use client';

import {ProductList} from '@/components/ProductList/ProductList';
import {AboutUsSection} from '@/components/AboutUsSection/AboutUsSection';
import {WhatWeDoSection} from '@/components/WhatWeDoSection/WhatWeDoSection';

/**
 * Home component:
 * Renders the main landing page with About Us, Product List, and What We Do sections.
 */
export default function Home() {
  return (
    <div>
      <main className="flex-grow">
        <AboutUsSection/>
        <ProductList/>
        <WhatWeDoSection/>
      </main>
    </div>
  );
}


