import { Hero } from '@/components/sections/hero/hero';
import { Features } from '@/components/sections/features/features';
import { About } from '@/components/sections/about/about';
import { Services } from '@/components/sections/services/services';
import { Testimonials } from '@/components/sections/testimonials/testimonials';
import { Contact } from '@/components/sections/contact/contact';
import { CTA } from '@/components/sections/cta/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}