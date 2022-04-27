/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  serverBuildDirectory: "netlify/functions/server/build",
  publicPath: "/build/",
  serverBuildTarget: "netlify",
  // server: "./server.js",
  ignoredRouteFiles: [".*"],
  // devServerPort: 8888,
}
