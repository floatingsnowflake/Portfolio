import React from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Image, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <span className="text-game-secondary">#</span> Visual Archives
        </h2>
        <span className="text-slate-500 text-sm font-mono">Total_Items: {GALLERY_ITEMS.length}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_ITEMS.map((item) => (
          <div 
            key={item.id} 
            className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-game-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
          >
            {/* Image Container */}
            <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-800">
               <img 
                 src={item.url} 
                 alt={item.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
               />
               
               {/* Hover Overlay */}
               <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center">
                     <ZoomIn size={32} className="text-game-accent mb-2" />
                     <span className="text-white font-bold tracking-wider">VIEW ASSET</span>
                  </div>
               </div>

               {/* Corner Tag */}
               <div className="absolute top-3 right-3 bg-black/60 backdrop-blur text-xs text-white px-2 py-1 rounded border border-white/10">
                 {item.category.toUpperCase()}
               </div>
            </div>

            {/* Info Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-900 z-10 relative">
               <h3 className="text-lg font-bold text-slate-200 group-hover:text-game-accent transition-colors truncate">
                 {item.title}
               </h3>
               <div className="flex items-center gap-2 mt-2 text-xs text-slate-500 font-mono">
                  <Image size={12} />
                  <span>IMG_ID_{item.id.toString().padStart(3, '0')}</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;