module.exports = {
  async rewrites() {
    return [
      {
        source: "/checkout/:step?",
        destination: "/checkout",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/main",
        permanent: true,
      },
    ];
  },
};
