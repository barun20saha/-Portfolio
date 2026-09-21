import type { Metadata } from 'next';
import { Geist, Pixelify_Sans } from 'next/font/google';
import Script from 'next/script';
import '@/index.css';
import { ThemeProvider } from '@/components/landing/theme-provider';
import Container from '@/components/layouts/Container';
import Layout from '@/components/common/Layout';
import Footer from '@/components/common/Footer';
import PageTracker from '@/components/common/PageTracker';
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const pixelifySans = Pixelify_Sans({
  variable: '--font-pixelify',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://barun20saha.vercel.app';

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Barun Saha',
      jobTitle: 'B.Tech CSE Student & Aspiring Data Scientist',
      url: siteUrl,
      sameAs: [
        'https://github.com/barun20saha',
        'https://www.linkedin.com/in/barun-saha-132312380/',
      ],
      knowsAbout: [
        'Data Science',
        'Machine Learning',
        'Artificial Intelligence',
        'Computer Vision',
        'Python',
        'Web Development',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Barun Saha Portfolio',
      description: 'Personal portfolio, technical blogs, and projects of Barun Saha.',
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Barun Saha | B.Tech CSE Student & Aspiring Data Scientist',
    template: '%s | Barun Saha',
  },
  description:
    'Portfolio of Barun Saha — B.Tech CSE student passionate about Data Science, AI, Machine Learning, and Computer Vision.',
  keywords: [
    'Barun Saha',
    'Data Scientist',
    'Machine Learning',
    'Artificial Intelligence',
    'Computer Vision',
    'Python',
    'Deep Learning',
    'Portfolio',
  ],
  authors: [{ name: 'Barun Saha', url: 'https://github.com/barun20saha' }],
  creator: 'Barun Saha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Barun Saha | B.Tech CSE Student & Aspiring Data Scientist',
    description:
      'Portfolio of Barun Saha — B.Tech CSE student passionate about Data Science, AI, Machine Learning, and Computer Vision.',
    siteName: 'Barun Saha Portfolio',
    images: [
      {
        url: `${siteUrl}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'Barun Saha | Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barun Saha | B.Tech CSE Student & Aspiring Data Scientist',
    description:
      'Portfolio of Barun Saha — B.Tech CSE student passionate about Data Science, AI, Machine Learning, and Computer Vision.',
    images: [`${siteUrl}/og-image.webp`],
    creator: '@barun20saha',
  },

  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteUrl,
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${pixelifySans.variable} min-h-screen font-sans antialiased`}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var key = "vite-ui-theme";
                  var theme = localStorage.getItem(key);
                  if (theme === "dark" || (!theme && "dark" === "dark")) {
                    document.documentElement.classList.add("dark");
                  } else if (theme === "light") {
                    document.documentElement.classList.add("light");
                  } else if (theme === "system") {
                    var dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    document.documentElement.classList.add(dark ? "dark" : "light");
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        <Script
          id="protect-images"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof document !== 'undefined') {
                document.addEventListener('contextmenu', function(e) {
                  if (e.target && e.target.tagName === 'IMG') {
                    e.preventDefault();
                  }
                });
              }
            `,
          }}
        />
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <PageTracker />
          <Analytics />
          <div className="min-h-screen dark:bg-black/90">
            <Container className="border-x border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] min-h-screen">
              <Layout>
                {children}
                <Footer />
              </Layout>
            </Container>
            <div className="from-background pointer-events-none fixed inset-x-0 bottom-0 z-40 h-10 bg-linear-to-t to-transparent [mask-image:linear-gradient(to_top,black_10%,transparent)] opacity-100 backdrop-blur-[5px] select-none dark:[mask-image:linear-gradient(to_top,black_20%,transparent)]" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
