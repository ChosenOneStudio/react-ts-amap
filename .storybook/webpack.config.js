const path = require("path");
module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    "@core": path.resolve("./src/core"),
    "@containers": path.resolve("./src/containers"),
    "@enhances": path.resolve("./src/enhances"),
    "@components": path.resolve("./src/components"),
  });
  return config;
};
