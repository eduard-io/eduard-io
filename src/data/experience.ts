interface Job {
  company: string;
  icon: string;
  dates: string;
  roles: { title: string; dates?: string }[];
}

export const experience: Job[] = [
  {
    company: 'Gelato',
    icon: 'gelato',
    dates: '2022 – 2026',
    roles: [
      { title: 'Interim Head of UX', dates: '2024 – 2026' },
      { title: 'Lead Product Designer', dates: '2022 – 2026' },
    ],
  },
  {
    company: 'Smart Protection',
    icon: 'smart-protection',
    dates: '2020 – 2022',
    roles: [{ title: 'Design Manager' }],
  },
  {
    company: 'Astara Store (Trive)',
    icon: 'astara',
    dates: '2019 – 2020',
    roles: [{ title: 'Head of Product Design & Technology' }],
  },
  {
    company: 'Clarity AI',
    icon: 'clarity',
    dates: '2018 – 2019',
    roles: [{ title: 'Senior Product Manager (UX)' }],
  },
  {
    company: 'Emtrics',
    icon: 'emtrics',
    dates: '2011 – 2017',
    roles: [{ title: 'Co-founder and CPO/CTO' }],
  },
  {
    company: 'Tuenti',
    icon: 'tuenti',
    dates: '2008 – 2011',
    roles: [{ title: 'Senior Backend Engineer' }],
  },
];
