import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'NEXT Academy | Apoyo Académico en Deusto',
  description: 'Academia NEXT: método personalizado, plataforma online, clases en vídeo y grupos reducidos para estudiantes de la Universidad de Deusto.',
  viewport: 'width=device-width, initial-scale=1',
  keywords: 'academia, Deusto, ADE, Ingeniería, Derecho, clases, apoyo académico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
