export const site = {
  name: 'Eduard Giménez',
  title: 'Eduard Giménez - Lead Product Designer in Madrid',
  description:
    'Explore Eduard Giménez’s work in complex B2B software. Lead Product Designer combining hands-on design, team leadership and an engineering background.',
  description_social:
    'Making complex B2B software easier to use. Selected work combining hands-on design, team leadership and an engineering background.',
  email: 'hello@eduard.io',
  linkedin: 'https://www.linkedin.com/in/eduard-io/',
  github: 'https://github.com/eduard-io',
};

export const emailLink = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
