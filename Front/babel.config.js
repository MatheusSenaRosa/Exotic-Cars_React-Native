module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@fonts": "./src/global/fonts",
          "@services": "./src/shared/services",
          "@routes": "./src/routes",
        },
      },
    ],
  ],
};
