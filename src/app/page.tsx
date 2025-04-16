'use client';

import {ProductList} from '@/components/ProductList/ProductList';
import {AboutUsSection} from '@/components/AboutUsSection/AboutUsSection';
import {WhatWeDoSection} from '@/components/WhatWeDoSection/WhatWeDoSection';
import {Footer} from '@/components/Footer/Footer';
import {Navbar} from '@/components/Navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar/>

      <main className="flex-grow">
        <AboutUsSection/>
        <ProductList/>
        <WhatWeDoSection/>
      </main>

      <Footer/>
    </div>
  );
}
