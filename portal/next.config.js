const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "portal",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./button": "./components/button.tsx",
        },
        remotes: getRemotes(isServer),
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );

    return config;
  },
};

function getRemotes(isServer) {
  const location = isServer ? "ssr" : "chunks";
  return {
    app1: `app1@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
  };
}

module.exports = nextConfig;
