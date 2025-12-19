import React from 'react';
import type { SiteConfig } from '@types';

export default function Footer({ author, socialLinks }: Pick<SiteConfig, 'author' | 'socialLinks'>) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-neutral/20 px-5 pt-5 pb-8 text-center text-white">
      <ul className="mb-5 flex flex-wrap justify-center gap-x-5 text-xs">
        {socialLinks.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noreferrer" className="inline-block px-4 py-3 after:relative after:bottom-[-4px] after:content-[url(/external.svg)] hover:text-primary">
              {s.text}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-xs">{author} © {currentYear}.</p>
    </footer>
  );
}
