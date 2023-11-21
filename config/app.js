const isProd = process.argv.includes("--production");
const isDev = !isProd;
module.exports = {
  isProd: isProd,
  isDev: isDev,
  sourcemaps: true,
  htmlmin: {
    collapseWhitespace: isProd,
  },
  webpack: {
    mode: "development",
  },
  imagemin: {
    verbose: true,
  },
  fonter: {
    formats: ["ttf", "woff", "eot", "svg"],
  },
};
