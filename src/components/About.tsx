import React from 'react';

export default function About() {
  return (
    <section id="nosotros" className="py-16 sm:py-20 bg-blue-900/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 text-glow">
          Sobre Nosotros
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-6 sm:p-8 rounded-xl animate-fade-in">
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