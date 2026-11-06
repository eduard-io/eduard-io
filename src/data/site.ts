export const site = {
  name: 'Eduard Giménez',
  title: 'Eduard Giménez, Product Designer — Bridging Design & Development',
  description:
      'Eduard Giménez is a Lead Product Designer based in Madrid, combining hands-on design, team leadership and engineering experience to simplify complex B2B software.',
  email: 'hello@eduard.io',
  linkedin: 'https://www.linkedin.com/in/eduard-io/',
  github: 'https://github.com/eduard-io',
};

export const emailLink = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
