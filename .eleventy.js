module.exports = (eleventyConfig) => {
  eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	})
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
}