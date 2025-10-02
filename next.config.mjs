import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  sassOptions: {
    includePaths: ['./src/app/styles'],
    prependData: `@import "src/app/styles/variables.scss";`,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);