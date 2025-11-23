import React from 'react';
import Gallery from '../components/Gallery';

const GalleryPage: React.FC = () => {
  return (
    <div className="pb-20">
       <div className="max-w-6xl mx-auto px-4 pt-12">
          <div className="bg-game-panel/50 p-6 rounded-lg mb-8 border-l-4 border-game-secondary">
            <h1 className="text-2xl font-bold text-white mb-2">Visual Archives</h1>
            <p className="text-slate-400">
              这里展示了从 UI 原型、Shader 特效到实际游戏运行截图的视觉资产。
            </p>
          </div>
       </div>
       <Gallery />
    </div>
  );
};

export default GalleryPage;