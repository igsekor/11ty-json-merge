function getTemplate(path) {

}

module.exports = function(eleventyConfig) {

  // Set to merge not only on the first level but deeply
  eleventyConfig.setDataDeepMerge(true);

  // Add meta from custom JSON
  eleventyConfig.addNunjucksShortcode('mergeInfo', (file) => {
    const json = require('./src/meta/' + file);
    return `<pre>${JSON.stringify(json)}</pre>`
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: 'data',
      includes: 'includes',
      layouts: 'layouts'
    },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
    templateFormats: [
      'md', 'njk'
    ],
  };
};