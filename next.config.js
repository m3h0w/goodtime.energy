/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [{ name: 'preset-default', removeViewBox: false }],
            },
            titleProp: true,
          },
        },
      ],
    })
    return config
  },
}

module.exports = nextConfig
