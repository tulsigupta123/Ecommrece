// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };
// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // 👈 use this plugin instead of just "tailwindcss"
    autoprefixer: {},
  },
};
