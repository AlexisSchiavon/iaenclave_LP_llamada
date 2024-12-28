import React from 'react';
import { Bot, Database, Zap, LineChart } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Agentes de Inteligencia Artificial',
    description: 'Desarrollamos agentes autónomos que interactúan con tus clientes y empleados, mejorando la eficiencia operativa.'
  },
  {
    icon: Database,
    title: 'Sistemas RAG',
    description: 'Implementamos tecnologías que permiten acceder y generar información precisa a partir de tus bases de datos y documentos no estructurados.'
  },
  {
    icon: Zap,
    title: 'Automatizaciones de IA',
    description: 'Automatizamos tareas repetitivas y optimizamos flujos de trabajo para aumentar la productividad de tu equipo.'
  },
  {
    icon: LineChart,
    title: 'Consultorías Personalizadas',
    description: 'Ofrecemos asesoramiento experto para identificar y aplicar soluciones de IA adaptadas a las necesidades específicas de tu empresa.'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12 text-glow">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-8 rounded-xl transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mb-4 animate-float" />
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-blue-200">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}