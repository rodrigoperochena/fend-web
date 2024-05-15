module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/assets/')

  // eleventyConfig.setBrowserSyncConfig({
	// 	files: './_site/css/**/*.css'
	// })

  eleventyConfig.setServerOptions({
    // Enable live reload
    watch: [
      "_site/css/style.css", // path to your compiled CSS file
      // add any other files/folders you want to watch
    ]
  });
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
}