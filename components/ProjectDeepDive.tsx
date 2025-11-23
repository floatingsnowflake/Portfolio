import React, { useState } from 'react';
import { Code, Layout, Database, Cpu, PlayCircle, Image as ImageIcon, ExternalLink, Terminal } from 'lucide-react';
import { PROJECT_SHOWCASE } from '../constants';

const ProjectDeepDive: React.FC = () => {
  const [activeMedia, setActiveMedia] = useState<'video' | number>('video');

  const handleMediaSelect = (index: 'video' | number) => {
    setActiveMedia(index);
  };

  return (
    <section className="w-full bg-slate-900/80 py-24 border-y border-slate-800 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 border-b border-slate-700/50 pb-6">
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 text-xs font-mono text-game-accent border border-game-accent/30 bg-game-accent/10 rounded">
                        FLAGSHIP_PROJECT
                    </span>
                    <span className="text-slate-500 text-xs font-mono">ID: {PROJECT_SHOWCASE.id.toUpperCase()}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
                    {PROJECT_SHOWCASE.title}
                </h2>
                <p className="text-xl text-game-secondary font-mono mt-2">{PROJECT_SHOWCASE.subtitle}</p>
            </div>
            
            <a 
                href={PROJECT_SHOWCASE.steamLink}
                target="_blank" 
                rel="noreferrer"
                className="mt-4 md:mt-0 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
            >
                <ExternalLink size={20} />
                View on Steam
            </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Col: Media Command Center (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
                {/* Main Viewport */}
                <div className="aspect-video w-full bg-black rounded-xl overflow-hidden border border-slate-700 shadow-2xl relative group">
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                        {activeMedia === 'video' ? (
                            <iframe 
                                width="100%" 
                                height="100%" 
                                src={PROJECT_SHOWCASE.videoUrl} 
                                title="Project PV" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                className="z-10"
                            ></iframe>
                        ) : (
                            <img 
                                src={PROJECT_SHOWCASE.images[activeMedia as number]} 
                                alt="Screenshot" 
                                className="w-full h-full object-cover animate-in fade-in duration-500"
                            />
                        )}
                    </div>
                    
                    {/* CRT Overlay Effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 pointer-events-none bg-[length:100%_4px,6px_100%]"></div>
                </div>

                {/* Media Selector (Thumbnails) */}
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    <button 
                        onClick={() => handleMediaSelect('video')}
                        className={`shrink-0 w-32 aspect-video rounded-lg border-2 overflow-hidden relative group transition-all ${activeMedia === 'video' ? 'border-game-accent ring-2 ring-game-accent/20' : 'border-slate-700 opacity-60 hover:opacity-100'}`}
                    >
                        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                            <PlayCircle size={24} className="text-white" />
                        </div>
                        <span className="absolute bottom-1 left-2 text-[10px] font-bold text-white bg-black/50 px-1 rounded">PV</span>
                    </button>

                    {PROJECT_SHOWCASE.images.map((img, idx) => (
                        <button 
                            key={idx}
                            onClick={() => handleMediaSelect(idx)}
                            className={`shrink-0 w-32 aspect-video rounded-lg border-2 overflow-hidden relative group transition-all ${activeMedia === idx ? 'border-game-accent ring-2 ring-game-accent/20' : 'border-slate-700 opacity-60 hover:opacity-100'}`}
                        >
                            <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Col: Data & Specs (4 cols) */}
            <div className="lg:col-span-4 flex flex-col h-full">
                <div className="glass-panel p-6 rounded-xl border border-slate-700 flex-1 flex flex-col">
                    <div className="mb-6 pb-6 border-b border-slate-700/50">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Terminal size={18} className="text-game-warn" />
                            System Log
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            {PROJECT_SHOWCASE.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {PROJECT_SHOWCASE.tags.map(tag => (
                                <span key={tag} className="text-xs font-mono bg-slate-800 text-slate-400 px-2 py-1 rounded border border-slate-700">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                        {PROJECT_SHOWCASE.stats.map((stat, i) => (
                            <div key={i} className="bg-slate-800/50 p-2 rounded border border-slate-700 text-center">
                                <div className="text-game-accent font-black text-lg">{stat.value}</div>
                                <div className="text-[10px] text-slate-500 uppercase">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Detailed Modules List */}
                    <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
                        <ModuleRow icon={Cpu} label="战斗系统" desc="FSM状态机, 连击, 顿帧反馈" />
                        <ModuleRow icon={Database} label="数据存储" desc="MemoryPack, 自动存档, 加密" />
                        <ModuleRow icon={Layout} label="UI 架构" desc="UGUI, 动态背包, 技能树" />
                        <ModuleRow icon={Code} label="AI 行为" desc="Boss行为树, 怪物AI" />
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

const ModuleRow: React.FC<{icon: any, label: string, desc: string}> = ({ icon: Icon, label, desc }) => (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-600">
        <div className="mt-1 text-slate-400">
            <Icon size={16} />
        </div>
        <div>
            <div className="text-sm font-bold text-slate-200">{label}</div>
            <div className="text-xs text-slate-500">{desc}</div>
        </div>
    </div>
);

export default ProjectDeepDive;