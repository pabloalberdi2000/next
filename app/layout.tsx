import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import EasterEggModal from '@/components/EasterEggModal';

export const metadata: Metadata = {
  title: 'Academia NEXT - Especialista en la Universidad de Deusto',
  description: 'Academia NEXT: apoyo académico especializado para estudiantes de la Universidad de Deusto. Tutores expertos, clases online y grupos reducidos.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://academianext.com/" />
      </head>
      <body className="bg-white text-slate-900">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
        <EasterEggModal />
      </body>
    </html>
  );
}
