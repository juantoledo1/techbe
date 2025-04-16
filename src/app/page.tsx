'use client';

import {ProductList} from '@/components/ProductList/ProductList';
import {AboutUsSection} from '@/components/AboutUsSection/AboutUsSection';
import {WhatWeDoSection} from '@/components/WhatWeDoSection/WhatWeDoSection';

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

