const NextFederationPlugin = require("@module-federation/nextjs-mf");

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   webpack: (config, { isServer }) => {
//     config.plugins.push(
//       new NextFederationPlugin({
//         name: "app1",
//         filename: "static/chunks/remoteEntry.js",
//         exposes: {
//           "./app1": "./pages/index.tsx",
//         },
//         remotes: {},
//         shared: {},
//         extraOptions: {
//           automaticAsyncBoundary: true,
//         },
//       })
//     );

//     return config;
//   },
// };

module.exports = {
  // reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "app1",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./app1": "./pages/index.tsx",
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
    portal: `portal@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  };
}
