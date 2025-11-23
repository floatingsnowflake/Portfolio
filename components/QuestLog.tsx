import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { MapPin, Briefcase, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

const QuestLog: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 relative">
      <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
        <span className="text-game-warn">!</span> 任务日志 (工作经历)
      </h2>

      <div className="relative border-l-2 border-slate-700 ml-4 md:ml-8 space-y-12">
        {EXPERIENCE_DATA.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-game-dark border-2 border-game-accent shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>

            <div className="glass-panel rounded-xl p-6 md:p-8 border-l-4 border-l-game-accent hover:border-l-game-secondary transition-colors group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-game-accent transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-game-secondary font-medium mt-1">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full text-sm">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="mb-6 bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <span className="text-game-warn font-bold text-sm uppercase tracking-wider mb-1 block">Quest Highlight</span>
                <p className="text-slate-300 italic">"{exp.highlight}"</p>
              </div>

              <ul className="space-y-3">
                {exp.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 size={18} className="text-game-success mt-1 shrink-0" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
              
              {/* Decorator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity">
                 <ArrowRight size={64} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuestLog;