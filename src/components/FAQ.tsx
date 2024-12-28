import React from 'react';

const faqs = [
  {
    question: '¿Qué es un agente de inteligencia artificial?',
    answer: 'Un agente de IA es un software diseñado para realizar tareas específicas de manera autónoma, interactuando con su entorno y tomando decisiones basadas en datos.'
  },
  {
    question: '¿Qué significa RAG y cómo puede beneficiar a mi empresa?',
    answer: 'RAG (Retrieval Augmented Generation) es una tecnología que combina la recuperación de información con la generación de contenido, permitiendo acceder y utilizar datos de manera más eficiente.'
  },
  {
    question: '¿Cómo pueden las automatizaciones de IA mejorar la productividad?',
    answer: 'Las automatizaciones de IA permiten delegar tareas repetitivas a sistemas inteligentes, liberando tiempo para que tu equipo se enfoque en actividades estratégicas y de mayor valor.'
  },
  {
    question: '¿Qué incluye una consultoría de IA en Clave?',
    answer: 'Nuestras consultorías incluyen un análisis detallado de tus procesos empresariales, identificación de oportunidades para implementar soluciones de IA y un plan de acción personalizado.'
  },
  {
    question: '¿Es segura la implementación de soluciones de IA en mi empresa?',
    answer: 'Sí, en IA en Clave priorizamos la seguridad y confidencialidad de tus datos, asegurando que todas las soluciones implementadas cumplan con los más altos estándares de protección.'
  }
];

export default function FAQ() {
  return (
    <section id="faqs" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12 text-glow">
          Preguntas Frecuentes
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-lg p-5 sm:p-6 hover:bg-blue-900/40 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{faq.question}</h3>
              <p className="text-sm sm:text-base text-blue-200">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}