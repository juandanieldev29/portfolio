import React, { useEffect } from 'react';
import MenuIcon from './icons/Menu';
import type { HeaderProps } from '../src/types';

export default function Header({ siteLogo, navLinks }: HeaderProps) {
  useEffect(() => {
    const button = document.querySelector('#menu-button');
    const menu = document.querySelector('#main-menu');
    const navItems = Array.from(document.querySelectorAll('#main-menu > ul > li > a'));

    const toggleMenu = () => {
      menu?.classList.toggle('hidden');
      const isHidden = menu?.classList.contains('hidden');
      button?.setAttribute('aria-expanded', `${!isHidden}`);
    };

    button?.addEventListener('click', toggleMenu);
    navItems.forEach((item) => item.addEventListener('click', toggleMenu));

    // Intersection observer for highlighting nav items and glass effect
    const sectionObserverOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.target.id) return;
        if (entry.isIntersecting) {
          navItems.forEach((item) => {
            if (item.getAttribute('href') === `#${entry.target.id}`) {
              item.classList.add('text-white', 'md:after:opacity-100');
            } else {
              item.classList.remove('text-white', 'md:after:opacity-100');
            }
          });
        }
      });
    }, sectionObserverOptions);

    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));

    const headerEl = document.querySelector('#site-header');
    const heroSpecialty = document.querySelector('#hero-specialty');
    let heroObserver: IntersectionObserver | null = null;

    if (heroSpecialty && headerEl) {
      heroObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            headerEl.classList.remove('glass');
          } else {
            headerEl.classList.add('glass');
          }
        });
      }, { threshold: 0 });

      heroObserver.observe(heroSpecialty);
    }

    return () => {
      try {
        button?.removeEventListener('click', toggleMenu as any);
        navItems.forEach((item) => item.removeEventListener('click', toggleMenu as any));
        observer.disconnect();
        if (heroObserver) heroObserver.disconnect();
      } catch (e) {}
    };
  }, []);

  return (
    <header id="site-header" className="sticky top-0 z-50 mx-auto flex max-w-5xl animate-slide-in justify-between bg-black px-5 py-6 transition-colors duration-300">
      <div className="header-inner w-full flex items-center justify-between">
        <a href="/" aria-label="Home link">
          <img src={siteLogo} alt="website logo" width={45} height={45} className="rounded-full" />
        </a>

        <button type="button" id="menu-button" className="px-1.5 text-neutral sm:hidden" aria-expanded="false" aria-controls="main-menu">
          <MenuIcon />
        </button>

        <nav className="absolute top-20 right-5 hidden rounded-xl border border-neutral/40 bg-black px-4 py-5 text-neutral sm:static sm:block sm:border-0 sm:bg-transparent sm:p-0" id="main-menu">
          <ul className="gap-2 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href} className="relative">
                <a className={`nav-item relative block p-2 text-sm font-medium transition-all duration-500 after:absolute after:bottom-0 after:left-2/4 after:h-2 after:w-1 after:-translate-x-2/4 after:text-primary after:opacity-0 after:content-['•'] hover:text-white`} href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
