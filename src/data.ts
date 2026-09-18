export const company = {
  name: 'Coreva Ltd',
  short: 'Coreva',
  tagline: 'We design websites, mobile apps, and operational systems that organisations actually run on.',
  location: 'Accra, Ghana',
  email: 'hello@corevaltd.com',
}

export const shareholders = [
  { name: 'Samuel Kojo Wobil', role: 'Shareholder' },
  { name: 'Elliot Oduro Danso', role: 'Shareholder' },
  { name: 'Ortis Yartey', role: 'Shareholder' },
  { name: 'Hakeem Youre Rabiu', role: 'Shareholder' },
]

export const services = [
  {
    slug: 'websites',
    title: 'Website Design & Development',
    summary:
      'Corporate sites, club platforms, and product marketing pages with a clear structure, fast load times, and a professional presence.',
    points: ['Brand-led visual design', 'Responsive engineering', 'Content architecture', 'SEO foundations'],
  },
  {
    slug: 'mobile',
    title: 'Mobile Applications',
    summary:
      'Native and progressive apps for Android and iOS, built around real operational workflows rather than generic templates.',
    points: ['Android & iOS delivery', 'Offline-aware flows', 'Push & SMS alerts', 'App store / PWA packaging'],
  },
  {
    slug: 'systems',
    title: 'Custom Software Systems',
    summary:
      'Internal platforms that replace spreadsheets: registries, medical logs, payroll, reporting, and role-based access.',
    points: ['Secure multi-role access', 'Reporting & exports', 'Integrations', 'Ongoing product support'],
  },
  {
    slug: 'sms',
    title: 'SMS & Schedule Notifications',
    summary:
      'Reliable alerts for training, fixtures, medical reviews, and staff schedules so teams stay coordinated off the pitch.',
    points: ['Training & fixture reminders', 'Medical follow-ups', 'Role-based audiences', 'Delivery tracking'],
  },
  {
    slug: 'product',
    title: 'Product Engineering',
    summary:
      'We take a product from concept to production: discovery, interface design, backend, launch, and iteration.',
    points: ['Discovery workshops', 'UX & interface design', 'Cloud architecture', 'Launch & training'],
  },
  {
    slug: 'partnerships',
    title: 'Club & Enterprise Partnerships',
    summary:
      'Longer engagements where we own the digital layer — websites, operations software, and support — for growing organisations.',
    points: ['Retained product teams', 'Brand & web presence', 'Onboarding & training', 'Priority support'],
  },
]

export const projects = [
  {
    slug: 'apextrack',
    name: 'ApexTrack',
    url: 'https://apextrackgh.com',
    category: 'Product · Athlete management',
    location: 'Ghana',
    summary:
      'A Ghana-based athlete and club management system for football organisations. Clubs track player history, medical records, match performance, training schedules, and send SMS notifications so staff and athletes never miss a session.',
    highlights: [
      'Player history & registry',
      'Medical and injury logs',
      'Performance analytics',
      'Training & fixture schedules',
      'SMS notifications',
      'Scouting and transfer records',
    ],
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'young-apostles',
    name: 'Young Apostles FC',
    url: 'https://youngapostlesfcgh.com',
    category: 'Partnership · Club website',
    location: 'Wenchi, Ghana',
    summary:
      'Official digital platform for Young Apostles FC, developed as part of our partnership with the club. The site carries news, fixtures, the Premier League table, squad, and matchday presence for Ghana’s top flight.',
    highlights: [
      'Official club website',
      'Fixtures & league table',
      'Squad & matchday content',
      'Partnership delivery',
    ],
    image:
      'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?auto=format&fit=crop&w=1600&q=80',
  },
]
