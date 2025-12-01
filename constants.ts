import { Language, Project, Translation, TeamMember, Report, NewsArticle } from './types';

export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    brandName: "Neusatz",
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About Us",
      donate: "Get Involved",
      news: "News",
      community: "Community",
      contact: "Contact",
      assistant: "Ask AI",
    },
    hero: {
      title: "Neusatz — a community where people create change",
      subtitle: "We empower the Berezanka community through innovation, education, economic development, memory of our roots, and strong local networks.",
      ctaPrimary: "Support Us",
      ctaSecondary: "Our Projects",
      whatWeDoTitle: "We work to:",
      whatWeDoList: [
        "Create opportunities for youth and families",
        "Launch modern industries and entrepreneurship",
        "Strengthen sports and culture in rural areas",
        "Introduce digital solutions for local governance",
        "Support veterans and vulnerable groups",
        "Preserve historical memory and local heritage",
        "Promote green energy and climate-resilient development"
      ]
    },
    stats: {
      label1: "Villages Supported",
      label2: "Initiatives Launched",
      label3: "Community Partners",
    },
    homeCta: {
      title: "Shape the Future Together",
      subtitle: "Your contribution helps us implement vital projects and support our community. Every donation and every volunteer hour counts.",
      buttonDonate: "Support Financially",
      buttonJoin: "Become a Volunteer"
    },
    about: {
      whoWeAreTitle: "Who We Are",
      whoWeAreText: "Neusatz is a modern, community-based NGO created to support the development of the Berezanka rural community. We work so that villages like Progresivka, Tashyne, Lyubylyne, Dmytrivka, Kobleve and others have the infrastructure, opportunities, and social capital they need to grow. Our role is to connect active residents, local authorities, businesses, and international partners around concrete projects that improve everyday life in the community.",
      missionTitle: "Our Mission",
      missionText: "To create an environment where communities grow through innovation, education, economic projects, respect for history, and mutual support.",
      valuesTitle: "Our Values",
      valuesList: [
        "Responsibility",
        "Transparency",
        "Humanity",
        "Innovation",
        "Partnership"
      ],
      activitiesTitle: "What We Do",
      activitiesList: [
        "Launch economic and industrial projects",
        "Develop aquaculture and modernize the fisheries sector",
        "Strengthen youth, sports, and cultural opportunities",
        "Implement digital solutions for local governance",
        "Support veterans and initiate social reintegration programs",
        "Preserve the historical memory of Neusatz / Progresivka and surrounding villages",
        "Support green energy, water management, and ecological projects"
      ],
      reportsTitle: "Documents & Reports",
    },
    projects: {
      title: "Our Projects",
      filterAll: "All Projects",
      status: {
        ongoing: "Ongoing",
        completed: "Completed",
        planned: "Planned",
      }
    },
    news: {
      title: "News & Insights",
      subtitle: "Latest updates on our initiatives, community stories, and future plans.",
      searchPlaceholder: "Search articles...",
      filterAll: "All News",
      readMore: "Read Article",
      noResults: "No news found matching your criteria.",
      showingResults: "Showing {count} of {total} results",
      forQuery: "for \"{query}\"",
      pageOf: "Page {current} of {total}",
      previous: "Previous",
      next: "Next",
      loading: "Loading posts...",
      backToNews: "Back to News",
      postNotFound: "Post Not Found",
      postNotFoundText: "The post you're looking for doesn't exist or has been removed.",
      share: "Share",
      copyLink: "Copy Link",
      copied: "Copied!",
      olderPost: "Older Post",
      newerPost: "Newer Post",
      relatedPosts: "Related Posts"
    },
    donate: {
      title: "Get Involved",
      subtitle: "You can help develop the community by donating, volunteering, offering equipment or expertise, or partnering with us.",
      waysToHelp: [
        "Donate funds",
        "Become a volunteer",
        "Offer equipment or expertise",
        "Propose a partnership",
        "Host a local event or fundraiser"
      ],
      bankTransfer: "Bank Transfer (IBAN)",
      crypto: "Crypto Donation",
      paypal: "PayPal",
    },
    community: {
      title: "Community Updates",
      subtitle: "Latest posts from our Facebook page. Stay connected with Neusatz!",
      loadingText: "Loading posts...",
      errorText: "Unable to load posts. Please try again.",
      retryButton: "Retry",
      noPostsText: "No posts available at the moment.",
      viewOnFacebook: "View on Facebook",
      postedOn: "Posted on"
    },
    footer: {
      rights: "Neusatz NGO. All rights reserved.",
      address: "Progresivka, Berezanka Community, Mykolaiv Region, Ukraine",
      contactsTitle: "Contacts",
      projectLinks: {
        infrastructure: "Infrastructure",
        community: "Community",
        civicTech: "Civic-Tech"
      },
      aboutLinks: {
        mission: "Mission",
        team: "Team",
        reports: "Reports"
      }
    }
  },
  ua: {
    brandName: "ГО «Нейзац»",
    nav: {
      home: "Головна",
      projects: "Проєкти",
      about: "Про нас",
      donate: "Долучитися",
      news: "Новини",
      community: "Громада",
      contact: "Контакти",
      assistant: "AI Асистент",
    },
    hero: {
      title: "ГО «Нейзац» — простір людей, які змінюють громаду",
      subtitle: "Ми розвиваємо Березанську громаду через інновації, освіту, економічні та соціальні проєкти, збереження історичної памʼяті та сильні спільноти.",
      ctaPrimary: "Підтримати",
      ctaSecondary: "Наші проєкти",
      whatWeDoTitle: "Ми працюємо, щоб:",
      whatWeDoList: [
        "створювати нові можливості для молоді та родин",
        "запускати сучасні індустрії та виробництва",
        "розвивати спорт і культуру в селах",
        "впроваджувати цифрові рішення для управління громадою",
        "підтримувати ветеранів та вразливі групи",
        "зберігати історію та культурну спадщину наших сіл",
        "просувати «зелену» енергетику та сталий розвиток"
      ]
    },
    stats: {
      label1: "Охоплених сіл",
      label2: "Запущених ініціатив",
      label3: "Партнерів громади",
    },
    homeCta: {
      title: "Творимо майбутнє разом",
      subtitle: "Ваш внесок допомагає нам реалізовувати важливі проєкти та підтримувати громаду. Кожна пожертва та кожна година волонтерства мають значення.",
      buttonDonate: "Підтримати фінансово",
      buttonJoin: "Стати волонтером"
    },
    about: {
      whoWeAreTitle: "Хто ми",
      whoWeAreText: "ГО «Нейзац» — це сучасна громадська організація, створена для розвитку Березанської громади. Ми працюємо над тим, щоб села Прогресівка, Ташине, Люблине, Дмитрівка, Коблеве та інші населені пункти мали інфраструктуру, можливості та соціальний капітал, необхідні для зростання. Наша мета — обʼєднувати активних мешканців, місцеву владу, бізнес та партнерів навколо конкретних справ: від спорту й культури до цифрових сервісів, економічних проєктів та збереження історичної памʼяті села Нейзац / Прогресівка.",
      missionTitle: "Наша Місія",
      missionText: "Створювати умови, у яких громади розвиваються через інновації, освіту, економічні та соціальні ініціативи, повагу до минулого й взаємну підтримку.",
      valuesTitle: "Наші Цінності",
      valuesList: [
        "Відповідальність",
        "Прозорість",
        "Гуманізм",
        "Інновації",
        "Партнерство"
      ],
      activitiesTitle: "Що ми робимо",
      activitiesList: [
        "запускаємо економічні та індустріальні проєкти",
        "розвиваємо аквакультуру та модернізуємо рибну галузь",
        "покращуємо молодіжні, спортивні та культурні можливості",
        "впроваджуємо цифрові технології в роботу громади",
        "підтримуємо ветеранів та організовуємо соціальні програми",
        "працюємо над створенням меморіалу та збереженням історії Нойзатц / Прогресівки",
        "просуваємо «зелену» енергетику, водні та екологічні проєкти"
      ],
      reportsTitle: "Документи та Звіти",
    },
    projects: {
      title: "Наші Проєкти",
      filterAll: "Всі Проєкти",
      status: {
        ongoing: "В процесі",
        completed: "Завершено",
        planned: "Заплановано",
      }
    },
    news: {
      title: "Новини та Статті",
      subtitle: "Останні оновлення наших ініціатив, історії громади та плани на майбутнє.",
      searchPlaceholder: "Пошук новин...",
      filterAll: "Всі новини",
      readMore: "Читати статтю",
      noResults: "Новин за вашим запитом не знайдено.",
      showingResults: "Показано {count} з {total} результатів",
      forQuery: "за запитом \"{query}\"",
      pageOf: "Сторінка {current} з {total}",
      previous: "Назад",
      next: "Вперед",
      loading: "Завантаження публікацій...",
      backToNews: "Назад до новин",
      postNotFound: "Публікацію не знайдено",
      postNotFoundText: "Публікація, яку ви шукаєте, не існує або була видалена.",
      share: "Поділитися",
      copyLink: "Копіювати посилання",
      copied: "Скопійовано!",
      olderPost: "Старіша публікація",
      newerPost: "Новіша публікація",
      relatedPosts: "Схожі публікації"
    },
    donate: {
      title: "Долучитися",
      subtitle: "Ви можете підтримати розвиток громади: зробити пожертву, стати волонтером, допомогти з обладнанням чи експертизою, організувати подію або запропонувати партнерство.",
      waysToHelp: [
        "Зробити пожертву",
        "Стати волонтером",
        "Допомогти з обладнанням чи експертизою",
        "Запропонувати партнерство",
        "Організувати локальну благодійну подію"
      ],
      bankTransfer: "Банківський переказ",
      crypto: "Криптовалюта",
      paypal: "PayPal",
    },
    community: {
      title: "Новини громади",
      subtitle: "Останні публікації з нашої сторінки Facebook. Залишайтесь на зв'язку з ГО «Нейзац»!",
      loadingText: "Завантаження публікацій...",
      errorText: "Не вдалося завантажити публікації. Будь ласка, спробуйте ще раз.",
      retryButton: "Повторити",
      noPostsText: "Наразі публікацій немає.",
      viewOnFacebook: "Переглянути на Facebook",
      postedOn: "Опубліковано"
    },
    footer: {
      rights: "ГО «Нейзац». Всі права захищено.",
      address: "с. Прогресівка, Березанська громада, Миколаївська обл., Україна",
      contactsTitle: "Контакти",
      projectLinks: {
        infrastructure: "Інфраструктура",
        community: "Громада",
        civicTech: "Civic-Tech"
      },
      aboutLinks: {
        mission: "Місія",
        team: "Команда",
        reports: "Звіти"
      }
    }
  },
  de: {
    brandName: "Neusatz",
    nav: {
      home: "Startseite",
      projects: "Projekte",
      about: "Über Uns",
      donate: "Mitmachen",
      news: "Aktuelles",
      community: "Gemeinschaft",
      contact: "Kontakt",
      assistant: "KI-Assistent",
    },
    hero: {
      title: "Neusatz — eine Gemeinschaft, die Veränderung schafft",
      subtitle: "Wir stärken die Gemeinde Berezanka durch Innovation, Bildung, wirtschaftliche Entwicklung, Erinnerungskultur und ein starkes lokales Netzwerk.",
      ctaPrimary: "Unterstützen",
      ctaSecondary: "Unsere Projekte",
      whatWeDoTitle: "Wir arbeiten daran:",
      whatWeDoList: [
        "neue Möglichkeiten für Kinder, Jugendliche und Familien zu schaffen",
        "moderne Industrien und lokale Unternehmen aufzubauen",
        "Sport und Kultur in den Dörfern zu fördern",
        "digitale Lösungen für die Gemeindeverwaltung einzuführen",
        "Veteranen und schutzbedürftige Gruppen zu unterstützen",
        "historisches Erbe und lokale Identität zu bewahren",
        "grüne Energie und nachhaltige Entwicklung zu fördern"
      ]
    },
    stats: {
      label1: "Unterstützte Dörfer",
      label2: "Gestartete Initiativen",
      label3: "Gemeindepartner",
    },
    homeCta: {
      title: "Gemeinsam die Zukunft gestalten",
      subtitle: "Ihr Beitrag hilft uns, wichtige Projekte umzusetzen und unsere Gemeinschaft zu stärken. Jede Spende und jede Stunde ehrenamtlicher Arbeit zählt.",
      buttonDonate: "Finanziell unterstützen",
      buttonJoin: "Freiwilliger werden"
    },
    about: {
      whoWeAreTitle: "Wer wir sind",
      whoWeAreText: "Neusatz ist eine moderne, gemeinwohlorientierte Organisation, die sich der Entwicklung der Gemeinde Berezanka widmet. Wir arbeiten daran, dass Dörfer wie Progresivka, Tashyne, Lyubylyne, Dmytrivka, Kobleve und andere über die Infrastruktur, Chancen und den sozialen Zusammenhalt verfügen, den sie für nachhaltiges Wachstum brauchen. Unsere Aufgabe ist es, engagierte Bürgerinnen und Bürger, die lokale Verwaltung, Unternehmen und internationale Partner rund um konkrete Projekte zusammenzubringen.",
      missionTitle: "Unsere Mission",
      missionText: "Ein Umfeld zu schaffen, in dem Gemeinden durch Innovation, Bildung, wirtschaftliche Projekte, Erinnerungskultur und gegenseitige Unterstützung wachsen.",
      valuesTitle: "Unsere Werte",
      valuesList: [
        "Verantwortung",
        "Transparenz",
        "Menschlichkeit",
        "Innovation",
        "Partnerschaft"
      ],
      activitiesTitle: "Was wir tun",
      activitiesList: [
        "wirtschaftliche und industrielle Projekte starten",
        "Aquakultur fördern und den Fischereisektor modernisieren",
        "Jugend, Sport und Kultur stärken",
        "digitale Lösungen für die lokale Verwaltung einführen",
        "Veteranen unterstützen und soziale Programme aufbauen",
        "die Geschichte von Neusatz / Progresivka und der Region bewahren",
        "grüne Energie-, Wasser- und Umweltprojekte entwickeln"
      ],
      reportsTitle: "Dokumente & Berichte",
    },
    projects: {
      title: "Unsere Projekte",
      filterAll: "Alle Projekte",
      status: {
        ongoing: "Laufend",
        completed: "Abgeschlossen",
        planned: "Geplant",
      }
    },
    news: {
      title: "Aktuelles & Einblicke",
      subtitle: "Neueste Updates zu unseren Initiativen, Geschichten aus der Gemeinde und Zukunftspläne.",
      searchPlaceholder: "Artikel suchen...",
      filterAll: "Alle Nachrichten",
      readMore: "Artikel lesen",
      noResults: "Keine Nachrichten gefunden.",
      showingResults: "{count} von {total} Ergebnissen",
      forQuery: "für \"{query}\"",
      pageOf: "Seite {current} von {total}",
      previous: "Zurück",
      next: "Weiter",
      loading: "Beiträge werden geladen...",
      backToNews: "Zurück zu Aktuelles",
      postNotFound: "Beitrag nicht gefunden",
      postNotFoundText: "Der gesuchte Beitrag existiert nicht oder wurde entfernt.",
      share: "Teilen",
      copyLink: "Link kopieren",
      copied: "Kopiert!",
      olderPost: "Älterer Beitrag",
      newerPost: "Neuerer Beitrag",
      relatedPosts: "Ähnliche Beiträge"
    },
    donate: {
      title: "Mitmachen",
      subtitle: "Sie können unsere Arbeit unterstützen – durch Spenden, ehrenamtliches Engagement, fachliche Hilfe oder Ausrüstung sowie durch Partnerschaften.",
      waysToHelp: [
        "Spenden",
        "Freiwilligenarbeit",
        "Ausrüstung oder Fachwissen anbieten",
        "Partnerschaft vorschlagen",
        "Lokale Benefizveranstaltung organisieren"
      ],
      bankTransfer: "Banküberweisung",
      crypto: "Kryptowährung",
      paypal: "PayPal",
    },
    community: {
      title: "Community-Updates",
      subtitle: "Neueste Beiträge von unserer Facebook-Seite. Bleiben Sie mit Neusatz verbunden!",
      loadingText: "Beiträge werden geladen...",
      errorText: "Beiträge konnten nicht geladen werden. Bitte versuchen Sie es erneut.",
      retryButton: "Wiederholen",
      noPostsText: "Derzeit sind keine Beiträge verfügbar.",
      viewOnFacebook: "Auf Facebook ansehen",
      postedOn: "Veröffentlicht am"
    },
    footer: {
      rights: "Neusatz NGO. Alle Rechte vorbehalten.",
      address: "Progresivka, Gemeinde Berezanka, Region Mykolajiw, Ukraine",
      contactsTitle: "Kontakt",
      projectLinks: {
        infrastructure: "Infrastruktur",
        community: "Gemeinschaft",
        civicTech: "Civic-Tech"
      },
      aboutLinks: {
        mission: "Mission",
        team: "Team",
        reports: "Berichte"
      }
    }
  }
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: {
      en: '“United Team” Initiative',
      ua: 'Ініціатива «ЄДИНА КОМАНДА»',
      de: 'Initiative „EIN TEAM“'
    },
    category: 'Culture',
    status: 'ongoing',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: {
      en: 'A community cohesion program including “My Family Story” video competition, school engagement, and intergenerational cultural projects across Berezanka community.',
      ua: 'Програма згуртування громади, що включає конкурс відеоінтервʼю «Історія моєї родини», залучення шкіл та міжпоколінні культурні ініціативи в Березанській громаді.',
      de: 'Ein Programm zur Stärkung des sozialen Zusammenhalts, einschließlich des Videowettbewerbs „Geschichte meiner Familie“, der Schulen und mehrere Generationen einbindet.'
    },
    impact: {
      en: '500+ participants engaged',
      ua: 'Залучено 500+ учасників',
      de: '500+ Teilnehmer engagiert'
    }
  },
  {
    id: '2',
    title: {
      en: 'Progresivka Industrial Park',
      ua: 'Індустріальний парк «Прогресівка»',
      de: 'Industriepark Progresivka'
    },
    category: 'Infrastructure',
    status: 'planned',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: {
      en: 'A development zone for new industries, data centers, logistics and renewable energy infrastructure in the south of Mykolaiv region.',
      ua: 'Майданчик для розвитку нових виробництв, дата-центрів, логістики та обʼєктів відновлюваної енергетики на півдні Миколаївщини.',
      de: 'Ein Standort für neue Industrien, Rechenzentren, Logistik und Projekte im Bereich erneuerbare Energien im Süden der Region Mykolajiw.'
    },
    impact: {
      en: 'Creating 200+ local jobs',
      ua: 'Створення 200+ робочих місць',
      de: 'Schaffung von 200+ Arbeitsplätzen'
    }
  },
  {
    id: '3',
    title: {
      en: 'EcoSmart Water Reservoirs',
      ua: 'EcoSmart Water Reservoirs',
      de: 'EcoSmart Water Reservoirs'
    },
    category: 'Ecology',
    status: 'ongoing',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
    description: {
      en: 'An innovative reservoir model supporting clean energy, aquaculture, biodiversity and ecological stability in rural communities.',
      ua: 'Інноваційна система водних резервуарів для «зеленої» енергетики, аквакультури, біорізноманіття та екологічної стабільності в сільських громадах.',
      de: 'Ein innovatives Reservoirsystem für erneuerbare Energie, Aquakultur, Biodiversität und ökologische Stabilität in ländlichen Gemeinden.'
    },
    impact: {
      en: 'Sustainable water management',
      ua: 'Стале управління водними ресурсами',
      de: 'Nachhaltiges Wassermanagement'
    }
  },
  {
    id: '4',
    title: {
      en: 'Progresivka Data Center',
      ua: 'Дата-центр у Прогресівці',
      de: 'Rechenzentrum Progresivka'
    },
    category: 'Civic-Tech',
    status: 'planned',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    description: {
      en: 'A rural AI and cloud infrastructure project creating high-tech jobs, supporting research, and generating income for the community.',
      ua: 'Проєкт створення AI-та хмарної інфраструктури в селі, що забезпечує високотехнологічні робочі місця, підтримує дослідження та приносить громаді нові доходи.',
      de: 'Ein Projekt zum Aufbau von KI- und Cloud-Infrastruktur im ländlichen Raum, das High-Tech-Arbeitsplätze schafft und zusätzliche Einnahmen für die Gemeinde generiert.'
    },
    impact: {
      en: 'High-tech in rural areas',
      ua: 'High-tech у селі',
      de: 'High-Tech im ländlichen Raum'
    }
  },
  {
    id: '5',
    title: {
      en: 'Fisheries Sector Reform',
      ua: 'Реформа рибної галузі',
      de: 'Reform des Fischereisektors'
    },
    category: 'Civic-Tech',
    status: 'ongoing',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: {
      en: 'Policy analysis, public campaigns, official letters, and reform proposals for a transparent and sustainable fisheries and aquaculture sector in Ukraine.',
      ua: 'Аналітика, публічні кампанії, офіційні звернення та розробка реформаторських пропозицій для прозорої та сталої рибної галузі й аквакультури в Україні.',
      de: 'Analysen, Öffentlichkeitsarbeit, offizielle Schreiben und Reformvorschläge für einen transparenten und nachhaltigen Fischerei- und Aquakultursektor in der Ukraine.'
    },
    impact: {
      en: 'Transparent regulations',
      ua: 'Прозорі правила',
      de: 'Transparente Vorschriften'
    }
  },
  {
    id: '6',
    title: {
      en: 'Sports Hub',
      ua: 'Спортивний хаб',
      de: 'Sport-Hub'
    },
    category: 'Sports',
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    description: {
      en: 'A modern sports club system with youth and adult sections, renovated facilities and regular tournaments in the Berezanka community.',
      ua: 'Сучасна клубна система спорту з секціями для дітей та дорослих, оновленою інфраструктурою та регулярними турнірами в Березанській громаді.',
      de: 'Ein modernes Vereinssystem mit Sportangeboten für Jugendliche und Erwachsene, erneuerter Infrastruktur und regelmäßigen Turnieren in der Gemeinde Berezanka.'
    },
    impact: {
      en: 'Healthy youth',
      ua: 'Здорова молодь',
      de: 'Gesunde Jugend'
    }
  },
  {
    id: '7',
    title: {
      en: 'Neusatz Memorial & Heritage Park',
      ua: 'Меморіал та парк спадщини «Нейзац»',
      de: 'Neusatz-Gedenk- und Erinnerungspark'
    },
    category: 'Culture',
    status: 'planned',
    image: 'https://images.unsplash.com/photo-1549897164-5a3d8a4b10c5?auto=format&fit=crop&w=800&q=80',
    description: {
      en: 'A memorial and public space in Progresivka dedicated to the history of Neusatz, local families and those who lost their lives defending Ukraine.',
      ua: 'Меморіал та громадський простір у Прогресівці, присвячений історії Нойзатц / Нейзац, місцевим родинам та всім, хто віддав життя за Україну.',
      de: 'Ein Gedenk- und Begegnungsort in Progresivka, der der Geschichte von Neusatz, den lokalen Familien und allen gewidmet ist, die ihr Leben für die Ukraine gegeben haben.'
    },
    impact: {
      en: 'Preserved memory and stronger identity',
      ua: 'Збережена памʼять та посилена відчутність спільної ідентичності',
      de: 'Bewahrte Erinnerung und gestärkte lokale Identität'
    }
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Lubomyr Haidamaka',
    role: { en: 'Chairman of the Board', ua: 'Голова правління', de: 'Vorstandsvorsitzender' },
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '2',
    name: 'Olena Holovatenko',
    role: { en: 'Executive Director', ua: 'Виконавча директорка', de: 'Geschäftsführerin' },
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '3',
    name: 'Iryna V.',
    role: { en: 'Community Lead', ua: 'Керівниця роботи з громадою', de: 'Community-Leiterin' },
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }
];

export const REPORTS: Report[] = [
  { id: '1', year: 2024, title: { en: 'Strategic Development Overview', ua: 'Стратегічний огляд розвитку', de: 'Strategischer Entwicklungsüberblick' }, url: '#' },
  { id: '2', year: 2023, title: { en: 'Annual Financial Report', ua: 'Річний фінансовий звіт', de: 'Jahresfinanzbericht' }, url: '#' },
  { id: '3', year: 2023, title: { en: 'Activity Report', ua: 'Звіт про діяльність', de: 'Tätigkeitsbericht' }, url: '#' },
  { id: '4', year: 2022, title: { en: 'Audit Results', ua: 'Результати аудиту', de: 'Prüfungsergebnisse' }, url: '#' },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: '1',
    date: '2023-10-15',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    category: 'Innovation',
    title: {
      en: 'Data Centers in the Village: Why it\'s Possible',
      ua: 'Дата-центри у селі: чому це можливо',
      de: 'Rechenzentren im Dorf: Warum es möglich ist'
    },
    excerpt: {
      en: 'How rural areas can become hubs for digital infrastructure, attract investment and create new high-tech jobs.',
      ua: 'Як села можуть стати хабами цифрової інфраструктури, залучати інвестиції та створювати нові високотехнологічні робочі місця.',
      de: 'Wie ländliche Gebiete zu Knotenpunkten für digitale Infrastruktur werden, Investitionen anziehen und neue High-Tech-Arbeitsplätze schaffen können.'
    },
    content: {
      en: 'Full article content about data centers and the vision of building AI-ready infrastructure in Progresivka, including benefits for local schools, businesses and residents...',
      ua: 'Повний текст статті про дата-центри та бачення створення AI-та хмарної інфраструктури в Прогресівці, включно з вигодами для шкіл, бізнесу та мешканців...',
      de: 'Vollständiger Artikel über Rechenzentren und die Vision eines KI- und Cloud-Infrastrukturstandorts in Progresivka, mit Vorteilen für Schulen, Unternehmen und Bewohner...'
    }
  },
  {
    id: '2',
    date: '2023-09-28',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Policy',
    title: {
      en: 'Reforming the Fisheries Sector',
      ua: 'Реформа рибної галузі',
      de: 'Reform des Fischereisektors'
    },
    excerpt: {
      en: 'Analysis and proposals for a transparent, fair and sustainable aquaculture and fisheries market in Ukraine.',
      ua: 'Аналітика та пропозиції для прозорого, справедливого та сталого ринку аквакультури й рибальства в Україні.',
      de: 'Analysen und Vorschläge für einen transparenten, fairen und nachhaltigen Aquakultur- und Fischereimarkt in der Ukraine.'
    },
    content: {
      en: 'Full article content about fisheries reform, including problems of current regulation, role of communities, and Neusatz NGO’s proposals...',
      ua: 'Повний текст статті про реформу рибної галузі, включно з аналізом нинішнього регулювання, роллю громад та пропозиціями ГО «Нейзац»...',
      de: 'Vollständiger Artikel über die Reform des Fischereisektors, mit Analyse der aktuellen Regelungen, der Rolle der Gemeinden und den Vorschlägen der NGO Neusatz...'
    }
  },
  {
    id: '3',
    date: '2023-09-10',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    category: 'Sports',
    title: {
      en: 'Building a Modern Sports Club System',
      ua: 'Будуємо сучасну клубну систему спорту',
      de: 'Aufbau eines modernen Sportvereinssystems'
    },
    excerpt: {
      en: 'Creating opportunities for youth and adults in Berezanka through new infrastructure, clubs and regular competitions.',
      ua: 'Створення можливостей для молоді та дорослих у Березанській громаді завдяки новій інфраструктурі, клубам та регулярним змаганням.',
      de: 'Schaffung von Möglichkeiten für Jugendliche und Erwachsene in Berezanka durch neue Infrastruktur, Vereine und regelmäßige Wettbewerbe.'
    },
    content: {
      en: 'Full article content about sports, club system, and how village schools can become hubs for physical activity...',
      ua: 'Повний текст статті про спорт, клубну систему та про те, як шкільні приміщення в селах можуть стати центрами фізичної активності...',
      de: 'Vollständiger Artikel über Sport, Vereinssysteme und darüber, wie Schulgebäude in Dörfern zu Zentren für Bewegung werden können...'
    }
  },
  {
    id: '4',
    date: '2023-08-05',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Opportunities',
    title: {
      en: 'Grant Opportunities for Communities',
      ua: 'Грантові можливості для громад',
      de: 'Fördermöglichkeiten für Gemeinden'
    },
    excerpt: {
      en: 'How local NGOs can attract international funding to support development, culture, sports and civic-tech projects.',
      ua: 'Як місцеві ГО можуть залучати міжнародне фінансування для підтримки проєктів розвитку, культури, спорту та civic-tech.',
      de: 'Wie lokale NGOs internationale Fördermittel für Entwicklungs-, Kultur-, Sport- und Civic-Tech-Projekte einwerben können.'
    },
    content: {
      en: 'Full article content about grants, partner programmes and Neusatz NGO’s experience in preparing applications...',
      ua: 'Повний текст статті про гранти, партнерські програми та досвід ГО «Нейзац» у підготовці заявок...',
      de: 'Vollständiger Artikel über Förderprogramme, Partnerschaften und die Erfahrungen der NGO Neusatz bei der Antragstellung...'
    }
  }
];
