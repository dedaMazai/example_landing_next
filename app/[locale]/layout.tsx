import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/src/app/providers/theme-provider';
import { Header } from '@/src/widgets/header/header';
import { Footer } from '@/src/widgets/footer/footer';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import {routing} from '@/i18n/routing';
import {setRequestLocale} from 'next-intl/server';
import cls from './style.module.scss';
import { classNames } from '@/src/shared/lib/classNames/classNames';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  let messages;
  try {
    messages = (await import(`../../i18n/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    keywords: messages.metadata.keywords,
    authors: [{ name: messages.metadata.author }],
    openGraph: {
      title: messages.metadata.title,
      description: messages.metadata.description,
      url: 'https://pioneer-work.com',
      siteName: 'Pioneer Digital Platform',
      images: [
        {
          url: 'https://example.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Pioneer Digital Platform Logo',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.metadata.title,
      description: messages.metadata.description,
      images: ['https://example.com/twitter-image.jpg'],
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
  } catch (error) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={classNames(inter.className, cls.body)}>
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