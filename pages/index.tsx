import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Hero from '@components/Hero';
import Experience from '@components/Experience';
import About from '@components/About';
import Footer from '@components/Footer';
import { SITE_CONFIG, SITE_CONTENT } from '@config';

export default function Home() {
  const { title, description, siteLogo, navLinks, lang, author, socialLinks, socialImage, canonicalURL, keywords } = SITE_CONFIG as any;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "url": canonicalURL,
        "name": title,
        "description": description,
        "publisher": {
          "@type": "Person",
          "name": author
        }
      },
      {
        "@type": "Person",
        "name": author,
        "url": canonicalURL,
        "sameAs": socialLinks ? Object.values(socialLinks) : []
      }
    ]
  };

  useEffect(() => {
    const setHeaderHeightVar = () => {
      const header = document.querySelector('#site-header');
      if (!header) return;
      const h = Math.ceil((header as HTMLElement).getBoundingClientRect().height) + 'px';
      document.documentElement.style.setProperty('--header-height', h);
    };

    setHeaderHeightVar();
    window.addEventListener('DOMContentLoaded', setHeaderHeightVar);
    window.addEventListener('load', setHeaderHeightVar);
    window.addEventListener('resize', setHeaderHeightVar);

    return () => {
      window.removeEventListener('DOMContentLoaded', setHeaderHeightVar);
      window.removeEventListener('load', setHeaderHeightVar);
      window.removeEventListener('resize', setHeaderHeightVar);
    };
  }, []);

  return (
    <div className="bg-black font-sans">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="48x48" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <title>{title}</title>

        <link rel="canonical" href={canonicalURL} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords ?? ''} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content={lang || 'en_US'} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalURL} />
        <meta property="og:image" content={canonicalURL + socialImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalURL} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={canonicalURL + socialImage} />
        <meta name="twitter:creator" content={socialLinks?.twitter || author} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

      <Header siteLogo={siteLogo} navLinks={navLinks} />

      <main className="mx-auto max-w-3xl px-5">
        <Hero {...SITE_CONTENT.hero} />
        <Experience experience={SITE_CONTENT.experience} />
        <About {...SITE_CONTENT.about} />
      </main>

      <Footer author={author} socialLinks={socialLinks} />

      
    </div>
  );
}
