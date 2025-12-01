
import React, { useState } from 'react';
import { NavLink, Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { Menu, X, Globe, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Layout: React.FC = () => {
  const { language, t } = useLanguage();
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get current path without language prefix
  const currentPath = location.pathname.replace(`/${lang}`, '') || '/';

  const toggleLanguage = (newLang: Language) => {
    navigate(`/${newLang}${currentPath}`);
    setIsMobileMenuOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-primary-700 font-bold' : 'text-stone-600 hover:text-primary-700'
    }`;

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-amber-50/95 backdrop-blur-sm border-b border-amber-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center">
              <NavLink to={`/${lang}`} className="text-2xl font-bold tracking-tight text-primary-900">
                {t.brandName}<span className="text-secondary-500">.</span>
              </NavLink>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              <NavLink to={`/${lang}`} className={navLinkClass}>{t.nav.home}</NavLink>
              <NavLink to={`/${lang}/projects`} className={navLinkClass}>{t.nav.projects}</NavLink>
              <NavLink to={`/${lang}/news`} className={navLinkClass}>{t.nav.news}</NavLink>
              <NavLink to={`/${lang}/community`} className={navLinkClass}>{t.nav.community}</NavLink>
              <NavLink to={`/${lang}/about`} className={navLinkClass}>{t.nav.about}</NavLink>
              <NavLink to={`/${lang}/donate`} className="px-5 py-2.5 rounded-full bg-primary-700 text-white font-medium text-sm hover:bg-primary-800 transition-all shadow-md flex items-center gap-2">
                <Heart size={16} fill="currentColor" />
                {t.nav.donate}
              </NavLink>
              
              {/* Language Switcher */}
              <div className="relative group ml-4">
                <button className="flex items-center gap-1 text-stone-500 hover:text-primary-700">
                  <Globe size={18} />
                  <span className="uppercase font-semibold text-xs">{language}</span>
                </button>
                <div className="absolute right-0 mt-2 w-24 bg-amber-50 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-amber-100">
                  {(['ua', 'en', 'de'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => toggleLanguage(lang)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-amber-100 ${language === lang ? 'font-bold text-primary-700' : 'text-stone-600'}`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
               <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-stone-600">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-amber-50 border-t border-amber-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-4">
              <NavLink to={`/${lang}`} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-medium text-stone-700">{t.nav.home}</NavLink>
              <NavLink to={`/${lang}/projects`} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-medium text-stone-700">{t.nav.projects}</NavLink>
              <NavLink to={`/${lang}/news`} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-medium text-stone-700">{t.nav.news}</NavLink>
              <NavLink to={`/${lang}/community`} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-medium text-stone-700">{t.nav.community}</NavLink>
              <NavLink to={`/${lang}/about`} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-medium text-stone-700">{t.nav.about}</NavLink>
              <NavLink to={`/${lang}/donate`} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-medium text-primary-700 font-bold">{t.nav.donate}</NavLink>

              <div className="pt-4 border-t border-amber-100 flex gap-4 justify-center">
                {(['ua', 'en', 'de'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => toggleLanguage(lang)}
                      className={`px-3 py-1 rounded-md text-sm border ${language === lang ? 'bg-primary-50 border-primary-200 text-primary-700' : 'border-amber-200 text-stone-600'}`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-amber-50 mb-4">{t.brandName}<span className="text-secondary-500">.</span></h3>
            <div className="flex items-start gap-2 text-sm text-stone-400 leading-relaxed">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <p>{t.footer.address}</p>
            </div>
          </div>
          <div>
            <h4 className="text-amber-50 font-semibold mb-4">{t.nav.projects}</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to={`/${lang}/projects`} className="hover:text-amber-100 transition">{t.footer.projectLinks.infrastructure}</NavLink></li>
              <li><NavLink to={`/${lang}/projects`} className="hover:text-amber-100 transition">{t.footer.projectLinks.community}</NavLink></li>
              <li><NavLink to={`/${lang}/projects`} className="hover:text-amber-100 transition">{t.footer.projectLinks.civicTech}</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-50 font-semibold mb-4">{t.nav.about}</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to={`/${lang}/about`} className="hover:text-amber-100 transition">{t.footer.aboutLinks.mission}</NavLink></li>
              <li><NavLink to={`/${lang}/about`} className="hover:text-amber-100 transition">{t.footer.aboutLinks.team}</NavLink></li>
              <li><NavLink to={`/${lang}/about`} className="hover:text-amber-100 transition">{t.footer.aboutLinks.reports}</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-50 font-semibold mb-4">{t.footer.contactsTitle}</h4>
             <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:ngoneusatz@gmail.com" className="hover:text-amber-100">ngoneusatz@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+380675024730" className="hover:text-amber-100">+380 67 502 4730</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
          &copy; {new Date().getFullYear()} {t.footer.rights}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
