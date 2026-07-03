'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  const whatsappNumber = '34661650267'; // Número sin + ni espacios
  const whatsappMessage = encodeURIComponent('Hola, me gustaría recibir más información sobre los servicios de Academia NEXT.');
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform duration-300 active:scale-95"
      title="Contacta por WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
