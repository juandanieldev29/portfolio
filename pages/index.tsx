import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Hero from '@components/Hero';
import Experience from '@components/Experience';
import About from '@components/About';
import Footer from '@components/Footer';
import { SITE_CONFIG, SITE_CONTENT } from '@config';

export default function Home() {
  const { title, description, siteLogo, navLinks, lang, author, socialLinks, socialImage, canonicalURL } = SITE_CONFIG as any;

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
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>{title}</title>

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalURL} />
        <meta property="og:image" content={canonicalURL + socialImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalURL} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={canonicalURL + socialImage} />
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
