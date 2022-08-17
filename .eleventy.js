module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/assets/')
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