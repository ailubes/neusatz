import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Users, CheckCircle, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import SEO from '../components/SEO';

const HERO_IMAGES = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Kosa_Tiligul_Progresivka.jpg/2560px-Kosa_Tiligul_Progresivka.jpg',
  'https://ecopolitic.com.ua/wp-content/uploads/2021/07/Progressovka_Gamma_02-2048x1152-1-889x500.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Selo_Progresivka.jpg/2560px-Selo_Progresivka.jpg'
];

const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const featuredProjects = PROJECTS.slice(0, 3);

  // Organization + WebSite JSON-LD schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        "@id": "https://neusatz.online/#organization",
        "name": "Neusatz",
        "alternateName": "ГО «Нейзац»",
        "url": "https://neusatz.online",
        "logo": {
          "@type": "ImageObject",
          "url": "https://neusatz.online/logo.png"
        },
        "description": t.about.whoWeAreText,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Progresivka",
          "addressRegion": "Mykolaiv Oblast",
          "addressCountry": "UA"
        },
        "sameAs": ["https://facebook.com/neusatz.ngo"],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "ngoneusatz@gmail.com",
          "telephone": "+380675024730",
          "contactType": "customer service",
          "availableLanguage": ["Ukrainian", "English", "German"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://neusatz.online/#website",
        "url": "https://neusatz.online",
        "name": "Neusatz",
        "publisher": {
          "@id": "https://neusatz.online/#organization"
        },
        "inLanguage": ["uk", "en", "de"]
      }
    ]
  };

  return (
    <div className="flex flex-col w-full">
      <SEO
        title={t.seo.home.title}
        description={t.seo.home.description}
        path="/"
        lang={language}
        schema={organizationSchema}
      />
      {/* Modern Hero Section */}
      <section className="relative flex items-center min-h-[90vh] bg-stone-900 overflow-hidden">

        {/* Background Slider */}
        {HERO_IMAGES.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt="Neusatz Community Landscape"
              className="w-full h-full object-cover scale-105 animate-subtle-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-stone-900/20" />
             <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
          </div>
        ))}

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Text Content */}
            <div className="flex flex-col items-start space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-secondary-300 text-sm font-medium tracking-wide uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-500"></span>
                </span>
                Progresivka • Berezanska Community
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                {t.hero.title}
              </h1>

              <p className="text-lg sm:text-xl text-stone-200 max-w-xl leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  to="/donate" 
                  className="group relative px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-full shadow-lg shadow-primary-900/20 transition-all duration-300 flex items-center gap-2 overflow-hidden"
                >
                  <span className="relative z-10">{t.hero.ctaPrimary}</span>
                  <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <Link 
                  to="/projects" 
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300"
                >
                  {t.hero.ctaSecondary}
                </Link>
              </div>
            </div>

            {/* Right: Glass Card List */}
            <div className="hidden lg:block relative perspective-1000">
              <div className="absolute -inset-4 bg-secondary-500/20 rounded-3xl blur-3xl opacity-50 animate-pulse-slow" />
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl transform transition-transform hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  <Target className="text-secondary-400 w-6 h-6" />
                  <h3 className="text-white font-bold text-xl tracking-wide">{t.hero.whatWeDoTitle}</h3>
                </div>
                <div className="space-y-4">
                  {t.hero.whatWeDoList.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="mt-1 w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors shrink-0">
                        <CheckCircle size={14} strokeWidth={3} />
                      </div>
                      <p className="text-amber-100 font-light group-hover:text-white transition-colors leading-snug">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-amber-50/80 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-200/50 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-amber-200/50">
          <div className="p-8 flex flex-col items-center text-center group">
            <div className="w-14 h-14 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users size={28} strokeWidth={1.5} />
            </div>
            <div className="text-4xl font-extrabold text-stone-900 mb-1">5+</div>
            <div className="text-xs font-bold text-stone-500 uppercase tracking-widest">{t.stats.label1}</div>
          </div>
          <div className="p-8 flex flex-col items-center text-center group">
            <div className="w-14 h-14 rounded-full bg-secondary-50 text-secondary-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Target size={28} strokeWidth={1.5} />
            </div>
            <div className="text-4xl font-extrabold text-stone-900 mb-1">6</div>
            <div className="text-xs font-bold text-stone-500 uppercase tracking-widest">{t.stats.label2}</div>
          </div>
          <div className="p-8 flex flex-col items-center text-center group">
            <div className="w-14 h-14 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Heart size={28} strokeWidth={1.5} />
            </div>
            <div className="text-4xl font-extrabold text-stone-900 mb-1">10+</div>
            <div className="text-xs font-bold text-stone-500 uppercase tracking-widest">{t.stats.label3}</div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gradient-to-b from-amber-50 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">{t.projects.title}</h2>
              <p className="text-stone-600 text-lg">{t.projects.subtitle}</p>
            </div>
            <Link to={`/${language}/projects`} className="inline-flex items-center text-primary-700 font-bold hover:text-primary-800 transition-colors group">
              {t.projects.viewAll} <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link to="/projects" key={project.id} className="group flex flex-col h-full bg-white/90 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100 hover:-translate-y-1">
                <div className="h-56 overflow-hidden relative">
                  <img src={project.image} alt={project.title[language]} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-800 uppercase tracking-wider shadow-sm border border-amber-100">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-primary-700 transition-colors">{project.title[language]}</h3>
                  <p className="text-stone-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">{project.description[language]}</p>
                  <div className="pt-6 border-t border-amber-50 mt-auto flex items-center justify-between">
                    <span className="text-xs font-bold text-primary-700 bg-primary-50 px-3 py-1.5 rounded-full">
                      {project.impact[language]}
                    </span>
                    <span className="text-stone-300 group-hover:text-primary-600 transition-colors">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-800 via-primary-900 to-stone-900 rounded-3xl overflow-hidden relative shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 px-6 py-16 md:py-20 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                {t.homeCta.title}
              </h2>
              <p className="text-amber-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                {t.homeCta.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/donate"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-primary-900 hover:bg-amber-50 font-bold rounded-full shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Heart className="text-primary-600 fill-primary-600" size={20} />
                  <span>{t.homeCta.buttonDonate}</span>
                </Link>

                <Link
                  to="/donate"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2"
                >
                  <Users size={20} />
                  <span>{t.homeCta.buttonJoin}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;