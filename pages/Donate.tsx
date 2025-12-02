import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CreditCard, Wallet, Copy, Check } from 'lucide-react';
import SEO from '../components/SEO';

const Donate: React.FC = () => {
  const { t, language } = useLanguage();
  const [copied, setCopied] = React.useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-amber-50 to-stone-50 min-h-screen">
      <SEO
        title={t.seo.donate.title}
        description={t.seo.donate.description}
        path="/donate"
        lang={language}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">{t.donate.title}</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            {t.donate.subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {/* IBAN Card */}
          <div className="bg-white/90 rounded-xl shadow-sm border border-amber-200 overflow-hidden">
            <div className="bg-primary-50 p-4 border-b border-primary-100 flex items-center gap-3">
              <CreditCard className="text-primary-700" />
              <h3 className="font-bold text-primary-900">{t.donate.bankTransfer}</h3>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-xs font-semibold text-stone-500 uppercase mb-1">Currency</label>
                   <p className="text-stone-900 font-medium">UAH (Ukrainian Hryvnia)</p>
                </div>
                <div>
                   <label className="block text-xs font-semibold text-stone-500 uppercase mb-1">Recipient</label>
                   <p className="text-stone-900 font-medium">NGO "NEUSATZ"</p>
                </div>
              </div>
              <div className="pt-4">
                <label className="block text-xs font-semibold text-stone-500 uppercase mb-2">IBAN</label>
                <div className="flex items-center gap-2 bg-amber-50 p-3 rounded-lg border border-amber-200">
                  <code className="text-sm md:text-base font-mono text-stone-700 break-all">UA123456789012345678901234567</code>
                  <button
                    onClick={() => handleCopy('UA123456789012345678901234567', 'iban')}
                    className="p-2 hover:bg-white rounded-md transition ml-auto text-stone-500 hover:text-primary-700"
                  >
                    {copied === 'iban' ? <Check size={18} className="text-green-500"/> : <Copy size={18} />}
                  </button>
                </div>
              </div>
              <div className="pt-4">
                <label className="block text-xs font-semibold text-stone-500 uppercase mb-2">Swift</label>
                <p className="text-stone-700 font-mono">PBNKUA2X</p>
              </div>
            </div>
          </div>

          {/* Crypto & PayPal Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white/90 rounded-xl shadow-sm border border-amber-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                   <Wallet className="text-secondary-500" />
                   <h3 className="font-bold text-stone-900">{t.donate.crypto}</h3>
                </div>
                <p className="text-sm text-stone-500 mb-4">USDT (TRC20)</p>
                <div className="flex items-center gap-2 bg-amber-50 p-2 rounded-lg border border-amber-200 mb-2">
                  <code className="text-xs font-mono text-stone-700 truncate">T9y4...xZ21</code>
                  <button
                     onClick={() => handleCopy('T9y4...xZ21', 'usdt')}
                    className="p-1 hover:bg-white rounded transition ml-auto text-stone-500"
                  >
                     {copied === 'usdt' ? <Check size={14} className="text-green-500"/> : <Copy size={14} />}
                  </button>
                </div>
             </div>

             <div className="bg-white/90 rounded-xl shadow-sm border border-amber-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-6 h-6 rounded-full bg-[#003087] text-white flex items-center justify-center font-bold text-xs">P</div>
                   <h3 className="font-bold text-stone-900">PayPal</h3>
                </div>
                <p className="text-sm text-stone-500 mb-4">Fast and secure donation via PayPal.</p>
                <a href="#" className="block w-full text-center py-2 bg-[#003087] text-white font-semibold rounded-lg hover:bg-[#00256b] transition">
                  Donate via PayPal
                </a>
             </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-500 text-sm">
            Neusatz NGO is a registered non-profit organization in Ukraine (Code: 12345678).<br/>
            Contact us at finance@neusatz.org.ua for partnership inquiries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
