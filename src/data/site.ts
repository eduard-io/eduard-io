export const site = {
  name: 'Eduard Giménez',
  title: 'Eduard Giménez, Product Designer — Bridging Design & Development',
  description:
    'Based in Madrid, I’m a product designer making complex tools feel simple. From the problem to the pixel.',
  email: 'hello@eduard.io',
  linkedin: 'https://www.linkedin.com/in/eduard-io/',
  github: 'https://github.com/eduard-io',
};

export const emailLink = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
