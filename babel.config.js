module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["tailwindcss-react-native/babel"],
  };
};

// module.exports = {
// - plugins: [],
// + plugins: ["tailwindcss-react-native/babel"],
// };
