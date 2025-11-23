import React from 'react';
import { PERSONAL_INTERESTS } from '../constants';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-game-dark border-t border-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-white font-bold mb-6 flex items-center justify-center gap-2">
            <Heart className="text-pink-500 animate-pulse" fill="currentColor" size={20} />
            <span>Personal Traits & Interests</span>
        </h3>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
            {PERSONAL_INTERESTS.map((interest, idx) => (
                <span key={idx} className="px-4 py-2 bg-slate-900 rounded-full border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/30 transition-colors cursor-default text-sm">
                    {interest}
                </span>
            ))}
        </div>

        <div className="text-slate-500 text-sm">
            <p className="mb-2">Designed with React + Tailwind + Unity Soul</p>
            <p>&copy; {new Date().getFullYear()} Unity Developer Portfolio. "El Psy Kongroo"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;