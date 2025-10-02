import { Hero } from '@/src/widgets/hero/hero';
import { Lifecycle } from '@/src/widgets/lifecycle/lifecycle';
import { Management } from '@/src/widgets/management/management';
import { Ecosystem } from '@/src/widgets/ecosystem/ecosystem';
import { MobileApp } from '@/src/widgets/mobile-app/mobile-app';
import { Partners } from '@/src/widgets/partners/partners';
import { Contact } from '@/src/widgets/contact/contact';

export default function MainPage() {
  return (
    <>
      <Hero />
      <Lifecycle />
      <Management />
      <Ecosystem />
      <MobileApp />
      <Partners />
      <Contact />
    </>
  );
}