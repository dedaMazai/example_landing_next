import { Hero } from '@/src/widgets/Hero2';
import { Lifecycle } from '@/src/widgets/Lifecycle2';
import { Management } from '@/src/widgets/Management2';
import { Ecosystem } from '@/src/widgets/Ecosystem2';
import { MobileApp } from '@/src/widgets/MobileApp2';
import { Partners } from '@/src/widgets/Partners2';
import { Contact } from '@/src/widgets/Contact2';

/**
 * MainPage - главная страница лендинга со всеми секциями
 */
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