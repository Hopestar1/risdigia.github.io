/**
 * WhatsApp Floating Button Component
 * Bouton flottant pour contact WhatsApp
 * Couleurs: Or (#FFD700), Bleu électrique (#1E3A8A)
 */

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/22893392515"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 bg-yellow-500 text-blue-900 rounded-full shadow-2xl hover:bg-yellow-400 transition-all duration-300 hover:scale-110 animate-pulse-gold"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
