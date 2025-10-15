export default function (eleventyConfig) {
  eleventyConfig.addWatchTarget('public/'); // Watch /assets for changes
  eleventyConfig.addPassthroughCopy({ public: '/' });
  eleventyConfig.addPassthroughCopy({ 'robots.txt': 'robots.txt' });
  // eleventyConfig.addPassthroughCopy("assets/images"); // Ensure images are copied to _site
  // eleventyConfig.addPassthroughCopy("assets/javascript"); // Ensure images are copied to _site
  // eleventyConfig.addPassthroughCopy("assets/stylesheets"); // Ensure images are copied to _site
  // eleventyConfig.addPassthroughCopy("assets/typefaces"); // Ensure images are copied to _site

  // Pass environment variables to templates
  eleventyConfig.addGlobalData('env', {
    CONTEXT: process.env.CONTEXT || 'development',
  });

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: ['njk', 'md', 'html'],
  };
}
