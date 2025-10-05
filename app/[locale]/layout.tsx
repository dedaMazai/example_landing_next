import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { ThemeProvider } from '@/src/app/providers/theme-provider';
import { Header } from '@/src/widgets/Header';
import { Footer } from '@/src/widgets/Footer';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import {routing} from '@/i18n/routing';
import {setRequestLocale} from 'next-intl/server';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import { getBaseUrl } from '@/src/shared/lib/utils';
import cls from './style.module.scss';

const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  let messages;
  try {
    messages = (await import(`../../i18n/locales/${locale}.json`)).default;
  } catch {
    notFound();
  }

  // Динамическое определение базового URL
  const baseUrl = getBaseUrl();
  const ogImageUrl = `${baseUrl}/images/mockups/ecosystem-laptop.png`;
  const twitterImageUrl = `${baseUrl}/images/mockups/ecosystem-laptop.png`;

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    keywords: messages.metadata.keywords,
    authors: [{ name: messages.metadata.author }],
    creator: messages.metadata.author,
    publisher: 'Pioneer Digital Platform',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: baseUrl,
      languages: {
        'en': `${baseUrl}/en`,
        'ru': `${baseUrl}/ru`,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      shortcut: '/favicon.svg',
      apple: '/favicon.svg',
    },
    manifest: '/manifest.json',
    openGraph: {
      title: messages.metadata.openGraph?.title || messages.metadata.title,
      description: messages.metadata.openGraph?.description || messages.metadata.description,
      url: baseUrl,
      siteName: messages.metadata.openGraph?.siteName || 'Pioneer Digital Platform',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'Pioneer Digital Platform - Real Estate Development & Construction Management Platform',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: messages.metadata.twitter?.card || 'summary_large_image',
      title: messages.metadata.twitter?.title || messages.metadata.title,
      description: messages.metadata.twitter?.description || messages.metadata.description,
      images: [twitterImageUrl],
      creator: '@pioneerdigital',
      site: '@pioneerdigital',
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION_CODE,
      yandex: process.env.YANDEX_VERIFICATION_CODE,
    },
    category: 'technology',
    classification: 'Real Estate Software',
    other: {
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'apple-mobile-web-app-title': 'Pioneer Digital Platform',
      'mobile-web-app-capable': 'yes',
      'msapplication-TileColor': '#000000',
      'msapplication-config': '/browserconfig.xml',
      'format-detection': 'telephone=no',
    },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../i18n/locales/${locale}.json`)).default;
  } catch {
    notFound();
  }

  setRequestLocale(locale);

  const baseUrl = getBaseUrl();

  // Структурированные данные для SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": messages.metadata.structuredData.name,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": messages.metadata.description,
    "url": baseUrl,
    "author": {
      "@type": "Organization",
      "name": messages.metadata.structuredData.authorName
    },
    "offers": {
      "@type": "Offer",
      "category": messages.metadata.structuredData.offerCategory
    },
    "featureList": messages.metadata.structuredData.featureList
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={classNames(openSans.className, cls.body)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}