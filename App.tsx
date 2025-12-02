
import React, { ReactNode, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import News from './pages/News';
import NewsPost from './pages/NewsPost';
import About from './pages/About';
import Donate from './pages/Donate';
import Community from './pages/Community';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import GeminiAssistant from './components/GeminiAssistant';
import { Language } from './types';

// LanguageWrapper component that syncs URL param with LanguageContext
const LanguageWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { lang } = useParams<{ lang: string }>();
  const { setLanguage } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const validLangs: Language[] = ['ua', 'en', 'de'];
    if (lang && validLangs.includes(lang as Language)) {
      setLanguage(lang as Language);
    } else {
      navigate('/ua', { replace: true });
    }
  }, [lang, setLanguage, navigate]);

  return <>{children}</>;
};

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/ua" replace />} />
            <Route path="/:lang" element={<LanguageWrapper><Layout /></LanguageWrapper>}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="news" element={<News />} />
              <Route path="news/:postId" element={<NewsPost />} />
              <Route path="about" element={<About />} />
              <Route path="donate" element={<Donate />} />
              <Route path="community" element={<Community />} />
            </Route>
            <Route path="*" element={<Navigate to="/ua" replace />} />
          </Routes>
          <GeminiAssistant />
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
