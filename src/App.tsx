import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import ParticlesBackground from './components/ParticlesBackground';

export default function App() {
  return (
    <main className="bg-blue-950 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute w-full h-[200vh] bg-[linear-gradient(#ffffff_1.5px,transparent_1.5px),linear-gradient(90deg,#ffffff_1.5px,transparent_1.5px)] bg-[size:50px_50px] [animation:grid_20s_linear_infinite]" />
        </div>
      </div>

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Content */}
      <div className="relative min-h-screen bg-gradient-to-b from-blue-950/90 to-blue-900/90">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <FAQ />
        <CallToAction />
      </div>
    </main>
  );
}