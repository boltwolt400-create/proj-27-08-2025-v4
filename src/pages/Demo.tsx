import React from 'react';
import InteractiveCards from '../components/ui/interactive-bento-grid';

const Demo = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Interactive Bento Grid Demo
          </h1>
          <p className="text-slate-400 text-lg">
            Hover over the cards to see beautiful animations and interactions
          </p>
        </div>
        <InteractiveCards />
      </div>
    </div>
  );
};

export default Demo;