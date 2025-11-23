import React from 'react';
import ProjectDeepDive from '../components/ProjectDeepDive';

const ProjectsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
       <h1 className="text-3xl font-bold text-white mb-8 border-l-4 border-game-accent pl-4">
         项目详情
       </h1>
       <ProjectDeepDive />
       
       <div className="mt-12 p-8 border border-dashed border-slate-700 rounded-xl text-center text-slate-500">
          更多项目案例整理中... (Unity 2D/3D, 插件开发, 工具链)
       </div>
    </div>
  );
};

export default ProjectsPage;