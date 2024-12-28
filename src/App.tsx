import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';

export default function App() {
  return (
    <main className="bg-blue-950">
      {/* Animated Grid Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="h-[200vh] w-full bg-[linear-gradient(#192339_2px,transparent_2px),linear-gradient(90deg,#192339_2px,transparent_2px)] bg-[size:40px_40px] animate-[grid_20s_linear_infinite]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <Hero />
        <Services />
        <About />
        <FAQ />
        <CallToAction />
      </div>
    </main>
  );
}