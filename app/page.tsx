import Hero from '@/components/Hero';
import Metodo from '@/components/Metodo';
import AsignaturasSection from '@/components/AsignaturasSection';
import Instalaciones from '@/components/Instalaciones';
import Testimonios from '@/components/Testimonios';
import ContactoCTA from '@/components/ContactoCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Metodo />
      <AsignaturasSection />
      <Instalaciones />
      <Testimonios />
      <ContactoCTA />
    </>
  );
}
