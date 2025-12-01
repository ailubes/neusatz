import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TEAM, REPORTS } from '../constants';
import { FileText, Download, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-white">
      {/* Mission Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-stone-900 mb-6">{t.about.whoWeAreTitle}</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            {t.about.whoWeAreText}
          </p>
        </div>

        <div className="bg-primary-50 rounded-2xl p-8 md:p-12 text-center mb-16">
           <h2 className="text-2xl font-bold text-primary-900 mb-4">{t.about.missionTitle}</h2>
           <p className="text-lg text-primary-800 font-medium italic">
            "{t.about.missionText}"
           </p>
        </div>

        {/* What We Do List */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">{t.about.activitiesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {t.about.activitiesList.map((activity, index) => (
               <div key={index} className="flex items-start gap-3 p-4 bg-amber-50/50 rounded-lg">
                 <Zap className="text-secondary-500 shrink-0 mt-1" size={20} />
                 <p className="text-stone-700">{activity}</p>
               </div>
             ))}
          </div>
        </div>

        <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">{t.about.valuesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.about.valuesList.map((value, index) => (
            <div key={index} className="p-6 bg-white rounded-xl border border-amber-200 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
              <div className="bg-secondary-100 p-3 rounded-full text-secondary-600">
                <Award size={24} />
              </div>
              <span className="font-bold text-stone-800 text-lg">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-stone-900 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map(member => (
              <div key={member.id} className="bg-white/90 p-6 rounded-xl shadow-sm text-center border border-amber-100">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-amber-50" />
                <h3 className="font-bold text-lg text-stone-900">{member.name}</h3>
                <p className="text-primary-600 text-sm font-medium">{member.role[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-3xl font-bold text-stone-900 mb-8">{t.about.reportsTitle}</h2>
         <div className="bg-white border border-amber-200 rounded-xl overflow-hidden shadow-sm">
           {REPORTS.map((report, index) => (
             <div key={report.id} className={`flex items-center justify-between p-6 ${index !== REPORTS.length - 1 ? 'border-b border-stone-100' : ''} hover:bg-amber-50 transition`}>
               <div className="flex items-center gap-4">
                 <div className="bg-stone-100 p-3 rounded-lg text-stone-500">
                   <FileText size={24} />
                 </div>
                 <div>
                   <h4 className="font-semibold text-stone-900">{report.title[language]}</h4>
                   <span className="text-xs text-stone-500">PDF • {report.year}</span>
                 </div>
               </div>
               <button className="flex items-center gap-2 text-sm font-medium text-primary-700 hover:text-primary-800">
                 Download <Download size={16} />
               </button>
             </div>
           ))}
         </div>
      </section>
    </div>
  );
};

export default About;