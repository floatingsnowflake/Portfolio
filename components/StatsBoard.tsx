import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { STATS_DATA, SKILLS_RADAR_DATA } from '../constants';

const StatsBoard: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 -mt-10 relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Key Metrics Cards */}
        <div className="col-span-1 lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS_DATA.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300">
                <div className={`mb-3 p-3 rounded-full bg-game-dark border border-slate-700 shadow-inner ${stat.color}`}>
                  <Icon size={24} />
                </div>
                <div className={`text-3xl font-black mb-1 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Radar Chart */}
        <div className="col-span-1 lg:col-span-1 glass-panel rounded-xl p-4 flex flex-col items-center relative min-h-[300px]">
          <h3 className="absolute top-4 left-4 text-slate-300 font-bold flex items-center gap-2">
            <span className="w-2 h-2 bg-game-accent rounded-full animate-pulse"></span>
            能力分布
          </h3>
          <div className="w-full h-full flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILLS_RADAR_DATA}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: '#94a3b8', fontSize: 12 }} 
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Skill"
                  dataKey="A"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  fill="#06b6d4"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsBoard;