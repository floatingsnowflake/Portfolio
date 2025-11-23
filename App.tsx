import React from 'react';
import Hero from './components/Hero';
import StatsBoard from './components/StatsBoard';
import Inventory from './components/Inventory';
import QuestLog from './components/QuestLog';
import ProjectDeepDive from './components/ProjectDeepDive';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-game-dark text-slate-200 font-sans overflow-x-hidden selection:bg-game-accent selection:text-game-dark">
      
      {/* Decorative Background Grid */}
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <main className="relative z-10">
        <Hero />
        <StatsBoard />
        
        {/* Featured Project takes prominence */}
        <div className="mt-12">
            <ProjectDeepDive />
        </div>

        {/* Gallery of other works */}
        <Gallery />

        {/* Tech Stack */}
        <Inventory />

        {/* Timeline */}
        <QuestLog />
      </main>

      <Footer />
    </div>
  );
};

export default App;