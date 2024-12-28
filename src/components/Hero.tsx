import React from 'react';
import { Brain } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16">
        <div className="mt-20 text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-glow leading-tight">
            Soluciones de IA para
            <span className="text-blue-400 block sm:inline"> Transformar tu Empresa</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto px-4">
            Optimiza y automatiza tus procesos empresariales mediante inteligencia artificial con soluciones innovadoras y personalizadas.
          </p>
          <a
            href="https://calendly.com/alexis-schiavon/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="modern-button inline-block text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold"
          >
            Agenda una Llamada Gratuita
          </a>
        </div>
      </div>
    </div>
  );
}