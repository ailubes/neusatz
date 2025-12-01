
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS } from '../constants';
import { MapPin, ArrowRight } from 'lucide-react';
import { Translation } from '../types';

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Infrastructure', 'Culture', 'Civic-Tech', 'Sports', 'Ecology'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'ongoing': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'planned': return 'bg-amber-100 text-amber-800 border-amber-200';
      default: return 'bg-stone-100 text-stone-800 border-stone-200';
    }
  };

  const getLocalizedStatus = (status: string) => {
    // Type safe access to translation status
    const statusKey = status as keyof Translation['projects']['status'];
    return t.projects.status[statusKey] || status;
  };

  return (
    <div className="py-16 bg-gradient-to-b from-amber-50 to-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-stone-900 mb-4 tracking-tight">{t.projects.title}</h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            From rebuilding community centers to supporting veterans, our projects aim for long-term sustainable impact.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                filter === cat
                  ? 'bg-primary-700 text-white shadow-lg shadow-primary-700/25 transform scale-105'
                  : 'bg-white/90 text-stone-600 border border-amber-200 hover:bg-amber-50 hover:border-amber-300'
              }`}
            >
              {cat === 'All' ? t.projects.filterAll : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/90 rounded-2xl shadow-sm border border-amber-200 overflow-hidden group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-300" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm border ${getStatusColor(project.status)}`}>
                    {getLocalizedStatus(project.status)}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-7 flex-grow flex flex-col">
                 <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">{project.category}</span>
                 </div>

                 <h3 className="text-xl font-bold text-stone-900 mb-3 leading-snug group-hover:text-primary-700 transition-colors">
                   {project.title[language]}
                 </h3>

                 <p className="text-stone-600 mb-6 text-sm leading-relaxed line-clamp-3 flex-grow">
                   {project.description[language]}
                 </p>

                 <div className="pt-5 border-t border-stone-100 mt-auto flex items-center justify-between">
                    <div className="flex items-center text-stone-500 text-sm font-medium">
                      <MapPin size={16} className="mr-1.5 text-secondary-500" />
                      <span>{project.impact[language]}</span>
                    </div>

                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 text-stone-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                       <ArrowRight size={16} />
                    </span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
