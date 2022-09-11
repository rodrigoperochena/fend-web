module.exports = {
  onPreBuild: async ({ utils: { run } }) => {
    await run.command(
      "npx sass src/sass:_site/css"
    );
  },
};