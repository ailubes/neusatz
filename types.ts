
export type Language = 'en' | 'ua' | 'de';

export interface Translation {
  brandName: string;
  nav: {
    home: string;
    projects: string;
    about: string;
    donate: string;
    news: string;
    contact: string;
    assistant: string;
    community: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    whatWeDoTitle: string;
    whatWeDoList: string[];
  };
  stats: {
    label1: string;
    label2: string;
    label3: string;
  };
  homeCta: {
    title: string;
    subtitle: string;
    buttonDonate: string;
    buttonJoin: string;
  };
  about: {
    missionTitle: string;
    missionText: string;
    whoWeAreTitle: string;
    whoWeAreText: string;
    valuesTitle: string;
    valuesList: string[];
    activitiesTitle: string;
    activitiesList: string[];
    reportsTitle: string;
  };
  projects: {
    title: string;
    filterAll: string;
    status: {
      ongoing: string;
      completed: string;
      planned: string;
    }
  };
  news: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterAll: string;
    readMore: string;
    noResults: string;
    showingResults: string;
    forQuery: string;
    pageOf: string;
    previous: string;
    next: string;
    loading: string;
    backToNews: string;
    postNotFound: string;
    postNotFoundText: string;
    share: string;
    copyLink: string;
    copied: string;
    olderPost: string;
    newerPost: string;
    relatedPosts: string;
  };
  donate: {
    title: string;
    subtitle: string;
    waysToHelp: string[];
    bankTransfer: string;
    crypto: string;
    paypal: string;
  };
  footer: {
    rights: string;
    address: string;
    contactsTitle: string;
    projectLinks: {
      infrastructure: string;
      community: string;
      civicTech: string;
    };
    aboutLinks: {
      mission: string;
      team: string;
      reports: string;
    };
  };
  community: {
    title: string;
    subtitle: string;
    loadingText: string;
    errorText: string;
    retryButton: string;
    noPostsText: string;
    viewOnFacebook: string;
    postedOn: string;
  };
}

export interface Project {
  id: string;
  title: Record<Language, string>;
  category: 'Education' | 'Infrastructure' | 'Veterans' | 'Culture' | 'Civic-Tech' | 'Sports' | 'Ecology';
  status: 'ongoing' | 'completed' | 'planned';
  image: string;
  description: Record<Language, string>;
  impact: Record<Language, string>;
}

export interface NewsArticle {
  id: string;
  date: string;
  image: string;
  category: 'Innovation' | 'Policy' | 'Sports' | 'Economy' | 'Opportunities';
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  content: Record<Language, string>; // Full content placeholder
}

export interface TeamMember {
  id: string;
  name: string;
  role: Record<Language, string>;
  image: string;
}

export interface Report {
  id: string;
  year: number;
  title: Record<Language, string>;
  url: string;
}

// Facebook post as received from API (raw)
export interface FacebookAPIPost {
  id: string;
  message?: string;
  full_picture?: string;
  created_time: string;
  permalink_url: string;
  attachments?: {
    data: Array<{
      media?: { image: { src: string } };
      description?: string;
    }>;
  };
}

// Transformed Facebook post for app use
export interface FacebookPost {
  id: string;
  message: string;
  imageUrl: string | null;
  createdAt: Date;
  permalinkUrl: string;
}

// API response wrapper
export interface FacebookAPIResponse {
  data: FacebookAPIPost[];
  paging?: {
    cursors: { before: string; after: string };
    next?: string;
  };
  error?: {
    message: string;
    type: string;
    code: number;
  };
}
