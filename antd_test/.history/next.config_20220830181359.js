/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withAntdLess = require("next-plugin-antd-less");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withAntdLess({
  modifyVars: { "@primary-color": "#fc1150" },
  lessVarsFilePath: "./styles/variables.less",

  ...nextConfig,
  webpack(config) {
    config.resolve.modules.push(__dirname); // 추가
    return config;
  },
});
