import React from 'react';
import { Hero } from './components/Hero';
import { Points } from './components/Points';
import { Benefit } from './components/Benefit';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Hero />
      <Points />
      <Benefit />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;