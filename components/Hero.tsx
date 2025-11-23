import React from 'react';
import { Terminal, Shield, Sword } from 'lucide-react';
import { HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-game-dark via-transparent to-game-dark pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Avatar / Icon Placeholder */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-game-accent to-game-secondary p-[2px] shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            <div className="w-full h-full bg-game-dark rounded-2xl flex items-center justify-center">
               <Terminal size={64} className="text-slate-200" />
            </div>
          </div>

          <div className="flex-1">
             <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 text-xs font-bold tracking-wider text-game-dark bg-game-accent rounded-full uppercase shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                  Lvl. MAX Developer
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400 border border-slate-700 px-2 py-1 rounded bg-game-panel/50">
                   <Shield size={12} /> Tank (Stability)
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400 border border-slate-700 px-2 py-1 rounded bg-game-panel/50">
                   <Sword size={12} /> DPS (Coding Speed)
                </span>
             </div>
             
             <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-2 drop-shadow-lg">
               {HERO_DATA.title}
             </h1>
             <h2 className="text-xl md:text-2xl text-game-accent font-medium mb-6 font-mono">
               {HERO_DATA.subtitle}
             </h2>
             
             <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-6 border-l-4 border-game-secondary pl-4 bg-gradient-to-r from-game-secondary/10 to-transparent py-2">
               {HERO_DATA.summary}
             </p>

             <div className="flex flex-wrap gap-2">
                {HERO_DATA.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded border border-slate-700 hover:border-game-accent transition-colors cursor-default">
                    #{tag}
                  </span>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;