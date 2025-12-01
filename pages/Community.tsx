import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Calendar, Users, Sun, Mountain, Landmark, BookOpen, Sprout, ExternalLink } from 'lucide-react';

const Community: React.FC = () => {
  const { language } = useLanguage();

  // Content translations
  const content = {
    ua: {
      heroTitle: 'Прогресівка',
      heroSubtitle: 'Нейзац',
      heroDescription: 'Село з глибокою історією на березі Тилігульського лиману',

      // Quick facts
      quickFactsTitle: 'Коротко про головне',
      facts: [
        { icon: MapPin, label: 'Розташування', value: 'Березанська громада, Миколаївська область' },
        { icon: Users, label: 'Населення', value: '214 офіційно (~150 на сьогодні)' },
        { icon: Mountain, label: 'Площа', value: '0,74 км²' },
        { icon: Calendar, label: 'Засновано', value: '1858 рік' },
      ],

      // History sections
      historyTitle: 'Історія села',

      foundingTitle: 'Заснування та німецька колонія',
      foundingText: `Село було засноване у 1858 році переселенцями-німцями як колонія під назвою «Нейзац» (з німецької — «нове поселення»). Це була частина великої хвилі німецької колонізації півдня України, яка залишила глибокий культурний і демографічний слід у регіоні.

За даними на 1886 рік, у Нейзаці мешкало 569 осіб, існувало 87 дворів. У селі діяли лютеранський молитовний будинок, школа та дві крамниці. Колоністи займалися переважно землеробством та виноградарством — вино, вироблене в Нейзаці, славилося на ринках Одеси, Миколаєва та інших міст України.

Німецька громада проіснувала тут майже століття, формуючи унікальну культуру, архітектуру та традиції краю. Під час Другої світової війни більшість німецького населення була депортована або вимушено повернулася до Німеччини. У 1946 році село було перейменовано на Прогресівку.`,

      ancientTitle: 'Археологічна спадщина',
      ancientText: `Прогресівка — це не лише аграрна колонія XIX століття, а й край з надзвичайно глибокими давніми коренями. На околицях села археологи виявили курганні поховання бронзового віку — дослідження показують, що ця територія була заселена людьми ще у II тисячолітті до нашої ери.

Ці знахідки свідчать про те, що береги Тилігульського лиману здавна приваблювали людей своїми природними ресурсами, м'яким кліматом та зручним розташуванням. Кургани є частиною великої археологічної спадщини степової України та заслуговують на подальше вивчення й охорону.`,

      renamingTitle: 'Перейменування',
      renamingText: `У 1946 році, відповідно до ухвали Верховної Ради УРСР, колонію Нейзац перейменували на Прогресівка. Це перейменування було частиною масової кампанії зміни німецьких назв населених пунктів після Другої світової війни.

Проте історична назва «Нейзац» продовжує жити в пам'яті нащадків колоністів, в архівних документах та в назві нашої громадської організації — ГО «Нейзац», яка прагне зберегти й відродити історичну пам'ять про засновників села.`,

      modernTitle: 'Сучасність та розвиток',
      modernText: `Сьогодні Прогресівка — це невелике село на березі Тилігульського лиману, що входить до складу Березанської селищної громади. Село розташоване на висоті близько 8 метрів над рівнем моря, в оточенні степових ландшафтів та водних просторів лиману.

У 2019–2020 роках біля села було збудовано потужну сонячну електростанцію Scatec Solar — одну з найбільших в Україні. Також поруч функціонує Тилігульська вітрова електростанція потужністю 565 МВт. Ці проєкти символізують новий етап розвитку регіону та відкривають можливості для залучення інвестицій, створення робочих місць та сталого розвитку громади.`,

      whyMattersTitle: 'Чому Прогресівка важлива',
      whyMattersText: `Прогресівка — яскравий приклад того, як через століття змінюється сільське життя, але зберігається зв'язок із землею, історією та ідентичністю. У цьому невеликому селі переплітаються:

• Давня історія — кургани бронзового віку, сліди тисячолітньої присутності людини
• Спадщина колоністів — культура, традиції та архітектура німецьких переселенців XIX століття
• Радянський період — перейменування, колективізація, зміна укладу життя
• Сучасність — проєкти відновлюваної енергетики, нові можливості для розвитку

Збереження історії села — важлива частина національної пам'яті, особливо у час, коли Україна відроджує та цінує своє минуле. ГО «Нейзац» працює над створенням меморіального парку на честь засновників села та всіх, хто віддав життя за Україну.`,

      locationTitle: 'Розташування',
      locationDescription: 'Прогресівка розташована на березі Тилігульського лиману в Миколаївській області',

      galleryTitle: 'Фотогалерея',

      linksTitle: 'Корисні посилання',
      wikipediaLink: 'Вікіпедія',
      facebookLink: 'Facebook ГО «Нейзац»',
    },
    en: {
      heroTitle: 'Progresivka',
      heroSubtitle: 'Neusatz',
      heroDescription: 'A village with deep history on the shores of Tylihul Estuary',

      quickFactsTitle: 'Quick Facts',
      facts: [
        { icon: MapPin, label: 'Location', value: 'Berezanka Community, Mykolaiv Region' },
        { icon: Users, label: 'Population', value: '214 official (~150 currently)' },
        { icon: Mountain, label: 'Area', value: '0.74 km²' },
        { icon: Calendar, label: 'Founded', value: '1858' },
      ],

      historyTitle: 'Village History',

      foundingTitle: 'Foundation and German Colony',
      foundingText: `The village was founded in 1858 by German settlers as a colony called "Neusatz" (German for "new settlement"). This was part of the great wave of German colonization of southern Ukraine, which left a deep cultural and demographic mark on the region.

According to 1886 data, Neusatz had 569 residents and 87 households. The village had a Lutheran prayer house, a school, and two shops. The colonists were primarily engaged in agriculture and viticulture — wine produced in Neusatz was famous in the markets of Odesa, Mykolaiv, and other Ukrainian cities.

The German community existed here for almost a century, shaping the unique culture, architecture, and traditions of the region. During World War II, most of the German population was deported or forced to return to Germany. In 1946, the village was renamed Progresivka.`,

      ancientTitle: 'Archaeological Heritage',
      ancientText: `Progresivka is not just a 19th-century agricultural colony, but a land with extraordinarily deep ancient roots. Archaeologists have discovered Bronze Age burial mounds on the outskirts of the village — research shows that this territory was inhabited as early as the 2nd millennium BCE.

These findings indicate that the shores of Tylihul Estuary have long attracted people with their natural resources, mild climate, and convenient location. The burial mounds are part of the great archaeological heritage of steppe Ukraine and deserve further study and protection.`,

      renamingTitle: 'Renaming',
      renamingText: `In 1946, by decree of the Supreme Soviet of the Ukrainian SSR, the Neusatz colony was renamed Progresivka. This renaming was part of a mass campaign to change German place names after World War II.

However, the historical name "Neusatz" continues to live in the memory of colonists' descendants, in archival documents, and in the name of our NGO — Neusatz NGO, which strives to preserve and revive the historical memory of the village founders.`,

      modernTitle: 'Modern Times and Development',
      modernText: `Today, Progresivka is a small village on the shores of Tylihul Estuary, part of Berezanka settlement community. The village is located at about 8 meters above sea level, surrounded by steppe landscapes and the waters of the estuary.

In 2019–2020, a powerful Scatec Solar power plant was built near the village — one of the largest in Ukraine. The nearby Tylihul Wind Farm with 565 MW capacity also operates in the area. These projects symbolize a new stage of regional development and open opportunities for attracting investments, creating jobs, and sustainable community development.`,

      whyMattersTitle: 'Why Progresivka Matters',
      whyMattersText: `Progresivka is a vivid example of how rural life changes over centuries while maintaining connections to the land, history, and identity. In this small village, several eras intertwine:

• Ancient history — Bronze Age burial mounds, traces of millennia-old human presence
• Colonists' heritage — culture, traditions, and architecture of 19th-century German settlers
• Soviet period — renaming, collectivization, lifestyle changes
• Modern times — renewable energy projects, new development opportunities

Preserving village history is an important part of national memory, especially at a time when Ukraine is reviving and valuing its past. Neusatz NGO is working on creating a memorial park in honor of the village founders and all those who gave their lives for Ukraine.`,

      locationTitle: 'Location',
      locationDescription: 'Progresivka is located on the shores of Tylihul Estuary in Mykolaiv Region',

      galleryTitle: 'Photo Gallery',

      linksTitle: 'Useful Links',
      wikipediaLink: 'Wikipedia',
      facebookLink: 'Neusatz NGO Facebook',
    },
    de: {
      heroTitle: 'Progresiwka',
      heroSubtitle: 'Neusatz',
      heroDescription: 'Ein Dorf mit tiefer Geschichte am Ufer des Tylihul-Limans',

      quickFactsTitle: 'Kurzübersicht',
      facts: [
        { icon: MapPin, label: 'Standort', value: 'Gemeinde Beresanka, Region Mykolajiw' },
        { icon: Users, label: 'Bevölkerung', value: '214 offiziell (~150 derzeit)' },
        { icon: Mountain, label: 'Fläche', value: '0,74 km²' },
        { icon: Calendar, label: 'Gegründet', value: '1858' },
      ],

      historyTitle: 'Dorfgeschichte',

      foundingTitle: 'Gründung und deutsche Kolonie',
      foundingText: `Das Dorf wurde 1858 von deutschen Siedlern als Kolonie namens "Neusatz" gegründet. Dies war Teil der großen Welle der deutschen Kolonisierung Südukraines, die tiefe kulturelle und demografische Spuren in der Region hinterließ.

Nach Angaben von 1886 hatte Neusatz 569 Einwohner und 87 Haushalte. Im Dorf gab es ein lutherisches Bethaus, eine Schule und zwei Geschäfte. Die Kolonisten betrieben hauptsächlich Landwirtschaft und Weinbau — der in Neusatz produzierte Wein war auf den Märkten von Odessa, Mykolajiw und anderen ukrainischen Städten berühmt.

Die deutsche Gemeinschaft existierte hier fast ein Jahrhundert lang und prägte die einzigartige Kultur, Architektur und Traditionen der Region. Während des Zweiten Weltkriegs wurde der größte Teil der deutschen Bevölkerung deportiert oder zur Rückkehr nach Deutschland gezwungen. 1946 wurde das Dorf in Progresiwka umbenannt.`,

      ancientTitle: 'Archäologisches Erbe',
      ancientText: `Progresiwka ist nicht nur eine landwirtschaftliche Kolonie des 19. Jahrhunderts, sondern ein Land mit außerordentlich tiefen antiken Wurzeln. Archäologen haben am Rand des Dorfes Grabhügel aus der Bronzezeit entdeckt — Forschungen zeigen, dass dieses Gebiet bereits im 2. Jahrtausend v. Chr. besiedelt war.

Diese Funde deuten darauf hin, dass die Ufer des Tylihul-Limans seit langem Menschen mit ihren natürlichen Ressourcen, dem milden Klima und der günstigen Lage angezogen haben. Die Grabhügel sind Teil des großen archäologischen Erbes der ukrainischen Steppe und verdienen weitere Erforschung und Schutz.`,

      renamingTitle: 'Umbenennung',
      renamingText: `1946 wurde die Kolonie Neusatz durch Erlass des Obersten Sowjets der Ukrainischen SSR in Progresiwka umbenannt. Diese Umbenennung war Teil einer Massenkampagne zur Änderung deutscher Ortsnamen nach dem Zweiten Weltkrieg.

Der historische Name "Neusatz" lebt jedoch weiter in der Erinnerung der Nachkommen der Kolonisten, in Archivdokumenten und im Namen unserer NGO — Neusatz NGO, die sich bemüht, das historische Gedächtnis an die Dorfgründer zu bewahren und wiederzubeleben.`,

      modernTitle: 'Moderne Zeiten und Entwicklung',
      modernText: `Heute ist Progresiwka ein kleines Dorf am Ufer des Tylihul-Limans, Teil der Siedlungsgemeinde Beresanka. Das Dorf liegt etwa 8 Meter über dem Meeresspiegel, umgeben von Steppenlandschaften und den Gewässern des Limans.

In den Jahren 2019–2020 wurde in der Nähe des Dorfes ein leistungsstarkes Solarkraftwerk von Scatec Solar gebaut — eines der größten in der Ukraine. In der Nähe arbeitet auch der Tylihul-Windpark mit 565 MW Leistung. Diese Projekte symbolisieren eine neue Phase der regionalen Entwicklung und eröffnen Möglichkeiten für Investitionen, Arbeitsplätze und nachhaltige Gemeindeentwicklung.`,

      whyMattersTitle: 'Warum Progresiwka wichtig ist',
      whyMattersText: `Progresiwka ist ein anschauliches Beispiel dafür, wie sich das ländliche Leben über Jahrhunderte verändert und dennoch die Verbindung zum Land, zur Geschichte und zur Identität bewahrt. In diesem kleinen Dorf verflechten sich mehrere Epochen:

• Antike Geschichte — bronzezeitliche Grabhügel, Spuren jahrtausendealter menschlicher Präsenz
• Erbe der Kolonisten — Kultur, Traditionen und Architektur deutscher Siedler des 19. Jahrhunderts
• Sowjetzeit — Umbenennung, Kollektivierung, Lebensstiländerungen
• Moderne — Projekte für erneuerbare Energien, neue Entwicklungsmöglichkeiten

Die Bewahrung der Dorfgeschichte ist ein wichtiger Teil des nationalen Gedächtnisses, besonders in einer Zeit, in der die Ukraine ihre Vergangenheit wiederbelebt und wertschätzt. Die Neusatz NGO arbeitet an der Schaffung eines Gedenkparks zu Ehren der Dorfgründer und aller, die ihr Leben für die Ukraine gegeben haben.`,

      locationTitle: 'Standort',
      locationDescription: 'Progresiwka liegt am Ufer des Tylihul-Limans in der Region Mykolajiw',

      galleryTitle: 'Fotogalerie',

      linksTitle: 'Nützliche Links',
      wikipediaLink: 'Wikipedia',
      facebookLink: 'Neusatz NGO Facebook',
    }
  };

  const t = content[language] || content.ua;

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Selo_Progresivka.jpg"
          alt="Progresivka village"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-amber-300 font-medium mb-2 tracking-wider uppercase text-sm">
              {t.heroSubtitle}
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-stone-200 max-w-2xl">
              {t.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white/80 border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-stone-900 mb-8 text-center">
            {t.quickFactsTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.facts.map((fact, index) => (
              <div key={index} className="text-center p-4">
                <fact.icon className="w-8 h-8 mx-auto mb-3 text-primary-600" />
                <p className="text-sm text-stone-500 mb-1">{fact.label}</p>
                <p className="text-lg font-semibold text-stone-900">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* History Title */}
        <div className="flex items-center gap-3 mb-12">
          <BookOpen className="w-8 h-8 text-primary-600" />
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            {t.historyTitle}
          </h2>
        </div>

        {/* Founding Section */}
        <article className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Landmark className="w-6 h-6 text-amber-600" />
            <h3 className="text-2xl font-serif font-semibold text-stone-900">
              {t.foundingTitle}
            </h3>
          </div>
          <div className="prose prose-lg max-w-none text-stone-700">
            {t.foundingText.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-4 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </article>

        {/* Ancient History Section */}
        <article className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="w-6 h-6 text-amber-600" />
            <h3 className="text-2xl font-serif font-semibold text-stone-900">
              {t.ancientTitle}
            </h3>
          </div>
          <div className="prose prose-lg max-w-none text-stone-700">
            {t.ancientText.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-4 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </article>

        {/* Renaming Section */}
        <article className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-amber-600" />
            <h3 className="text-2xl font-serif font-semibold text-stone-900">
              {t.renamingTitle}
            </h3>
          </div>
          <div className="prose prose-lg max-w-none text-stone-700">
            {t.renamingText.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-4 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </article>

        {/* Modern Section */}
        <article className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Sun className="w-6 h-6 text-amber-600" />
            <h3 className="text-2xl font-serif font-semibold text-stone-900">
              {t.modernTitle}
            </h3>
          </div>
          <div className="prose prose-lg max-w-none text-stone-700">
            {t.modernText.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-4 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </article>

        {/* Why Matters Section */}
        <article className="mb-16 bg-primary-50/50 rounded-2xl p-8 border border-primary-100">
          <div className="flex items-center gap-3 mb-4">
            <Sprout className="w-6 h-6 text-primary-600" />
            <h3 className="text-2xl font-serif font-semibold text-stone-900">
              {t.whyMattersTitle}
            </h3>
          </div>
          <div className="prose prose-lg max-w-none text-stone-700">
            {t.whyMattersText.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-4 leading-relaxed whitespace-pre-line">{paragraph}</p>
            ))}
          </div>
        </article>

        {/* Location Map */}
        <section className="mb-16">
          <h3 className="text-2xl font-serif font-semibold text-stone-900 mb-4 flex items-center gap-3">
            <MapPin className="w-6 h-6 text-amber-600" />
            {t.locationTitle}
          </h3>
          <p className="text-stone-600 mb-6">{t.locationDescription}</p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-amber-200">
            <img
              src="https://maps.vlasenko.net/map/?h=400&lat=46.9212&lon=31.0612&map=smtm100&w=920"
              alt="Map of Progresivka"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mb-16">
          <h3 className="text-2xl font-serif font-semibold text-stone-900 mb-6">
            {t.galleryTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Selo_Progresivka.jpg"
                alt="Progresivka village aerial view"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://travel.24tv.ua/resources/photos/news/202509/2918548.jpg?v=1758410081000"
                alt="Tylihul Estuary"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Useful Links */}
        <section className="bg-white/90 rounded-2xl p-8 border border-amber-200 shadow-sm">
          <h3 className="text-xl font-serif font-semibold text-stone-900 mb-6">
            {t.linksTitle}
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://uk.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B5%D1%81%D1%96%D0%B2%D0%BA%D0%B0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 rounded-lg text-stone-700 transition-colors"
            >
              <ExternalLink size={16} />
              {t.wikipediaLink}
            </a>
            <a
              href="https://www.facebook.com/ngo.neusatz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-700 transition-colors"
            >
              <ExternalLink size={16} />
              {t.facebookLink}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Community;
