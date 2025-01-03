import React from 'react';

export default function CallToAction() {
  return (
    <section className="py-16 sm:py-20 bg-blue-950 relative overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-blue-950/50"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-transparent to-blue-950/50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative">
        <div className="glass-card p-6 sm:p-8 rounded-xl max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 text-glow">
            ¿Listo para transformar tu empresa con IA?
          </h2>
          <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8">
            Agenda una llamada gratuita con nuestros expertos y descubre cómo podemos ayudarte a potenciar tu negocio.
          </p>
          <a
            href="https://calendly.com/alexis-schiavon/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="modern-button inline-block text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold"
          >
            Agenda tu Llamada Ahora
          </a>
        </div>
      </div>
    </section>
  );
}