export default function(eleventyConfig) {
    eleventyConfig.addWatchTarget("./assets/"); // Watch /assets for changes
    eleventyConfig.addPassthroughCopy("assets/");
    // eleventyConfig.addPassthroughCopy("assets/images"); // Ensure images are copied to _site
    // eleventyConfig.addPassthroughCopy("assets/javascript"); // Ensure images are copied to _site
    // eleventyConfig.addPassthroughCopy("assets/stylesheets"); // Ensure images are copied to _site
    // eleventyConfig.addPassthroughCopy("assets/typefaces"); // Ensure images are copied to _site

  
    /*return {
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      templateFormats: ["njk", "md", "html"]
    }*/
  };