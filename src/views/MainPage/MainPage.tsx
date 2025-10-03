import { Hero } from '@/src/widgets/Hero';
import { Lifecycle } from '@/src/widgets/Lifecycle';
import { Management } from '@/src/widgets/Management';
import { Ecosystem } from '@/src/widgets/Ecosystem';
import { MobileApp } from '@/src/widgets/MobileApp';
import { Partners } from '@/src/widgets/Partners';
import { Contact } from '@/src/widgets/Contact';

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