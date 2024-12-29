import React from 'react';

export default function About() {
  return (
    <section id="nosotros" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-96 h-96 bg-blue-800/100 rounded-full blur-3xl animate-pulse-slow transform-gpu"></div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-96 h-96 bg-blue-800/100 rounded-full blur-3xl animate-pulse-slow transform-gpu"
          style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 text-center mb-8 text-glow">
          Sobre Nosotros
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-blue-950 p-6 sm:p-8 rounded-xl animate-fade-in shadow-xl">
            <p className="text-base sm:text-xl text-blue-100 leading-relaxed mb-6">
              En IA en Clave somos una empresa especializada en soluciones de inteligencia artificial
              diseñadas para transformar y potenciar negocios. Ofrecemos servicios personalizados que
              ayudan a las empresas a maximizar su eficiencia, reducir costos y tomar decisiones más
              inteligentes a través del uso estratégico de datos.
            </p>
            <p className="text-base sm:text-xl text-blue-100 leading-relaxed">
              Nuestra misión es impulsar la digitalización en México y convertirnos en aliados
              estratégicos de las PYMEs en su camino hacia el éxito. Con valores como innovación,
              integridad, y orientación al cliente, buscamos que cada solución no solo sea eficiente,
              sino también accesible y ética.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}