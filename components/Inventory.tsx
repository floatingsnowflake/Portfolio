import React, { useState } from 'react';
import { TECH_STACK } from '../constants';
import { Box, Cpu, Layers, Settings } from 'lucide-react';

const categories = [
  { id: 'core', label: '核心技能', icon: Cpu },
  { id: 'systems', label: '系统架构', icon: Layers },
  { id: 'plugins', label: '工具/插件', icon: Box },
  { id: 'patterns', label: '设计模式', icon: Settings },
];

const Inventory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof TECH_STACK>('core');

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Header */}
        <div className="md:w-1/4">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
             <span className="text-game-secondary">#</span> 技能背包
          </h2>
          <div className="flex flex-col gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id as keyof typeof TECH_STACK)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                    isActive 
                    ? 'bg-game-secondary text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]' 
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="md:w-3/4">
           <div className="glass-panel p-6 rounded-2xl min-h-[300px]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {TECH_STACK[activeTab].map((item, idx) => (
                  <div key={idx} className="group relative bg-slate-900/50 border border-slate-700 rounded-xl p-4 flex flex-col items-center justify-center hover:border-game-secondary/50 hover:bg-slate-800 transition-all cursor-default overflow-hidden">
                    {/* Corner marker */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[16px] border-r-[16px] border-t-transparent border-r-slate-700 group-hover:border-r-game-secondary transition-colors"></div>
                    
                    <span className="text-slate-200 font-medium text-center group-hover:text-white transition-colors z-10 relative">
                      {item}
                    </span>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-game-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
              
              {/* Inventory Footer Text */}
              <div className="mt-8 pt-4 border-t border-slate-700/50 text-sm text-slate-500 flex justify-between font-mono">
                 <span>SLOTS_USED: {TECH_STACK[activeTab].length}/20</span>
                 <span>TYPE: {activeTab.toUpperCase()}</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Inventory;