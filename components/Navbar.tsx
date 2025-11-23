import React from 'react';
import { NavLink } from 'react-router-dom';
import { Terminal, Home, FolderOpen, User, Image } from 'lucide-react';

const Navbar: React.FC = () => {
  const navItems = [
    { path: '/', label: '主页', icon: Home },
    { path: '/projects', label: '项目 & 命骸', icon: FolderOpen },
    { path: '/resume', label: '履历 & 技能', icon: User },
    { path: '/gallery', label: '视觉库', icon: Image },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-game-dark/90 backdrop-blur border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-game-accent font-bold text-xl">
          <Terminal size={24} />
          <span className="hidden md:inline tracking-tighter">DEV_PORTFOLIO</span>
        </div>

        <div className="flex gap-1 md:gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all
                  ${isActive 
                    ? 'bg-game-accent/20 text-game-accent shadow-[0_0_10px_rgba(6,182,212,0.3)]' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }
                `}
              >
                <Icon size={16} />
                <span className="hidden md:block">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;