module.exports = function (eleventyConfig) {
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    // excerpt_separator: "<!-- excerpt -->"
  });

  eleventyConfig.addFilter("inspect", require("node:util").inspect);
  eleventyConfig.addFilter("keys", function (obj) { return Object.keys(obj) });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
