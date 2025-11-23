import React from 'react';
import Hero from '../components/Hero';
import StatsBoard from '../components/StatsBoard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="pb-20">
      <Hero />
      <StatsBoard />
      
      {/* Call to Action for Projects */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <Link 
          to="/projects"
          className="inline-flex items-center gap-3 bg-slate-800 hover:bg-game-accent hover:text-game-dark border border-slate-700 hover:border-game-accent px-8 py-4 rounded-full transition-all group"
        >
          <span className="text-lg font-bold">查看核心项目: 命骸 (Life Shell)</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;