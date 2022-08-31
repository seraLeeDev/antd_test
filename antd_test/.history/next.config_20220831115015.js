/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withAntdLess = require("next-plugin-antd-less");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withAntdLess({
  // optional: you can modify antd less variables directly here
  modifyVars: { "@primary-color": '"#fc1150' },
  // Or better still you can specify a path to a file
  lessVarsFilePath: "./styles/variables.less",
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {},
  ...nextConfig,
  webpack(config) {
    config.resolve.modules.push(__dirname); // 추가
    return config;
  },
});
