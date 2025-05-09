import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  sassOptions: {
    includePaths: ['./styles'],
    prependData: `@import "styles/variables.scss";`,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);