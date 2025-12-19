import React, { useEffect } from 'react';
import Section from './Section';
import type { AboutProps } from '@types';

export default function About({ description, image }: AboutProps & { name?: string }) {
  useEffect(() => {
    const revealEls = () => {
      const section = document.getElementById('about');
      if (!section) return [] as Element[];
      return Array.from(section.querySelectorAll('.reveal'));
    };

    const createObserverForReveals = () => {
      const els = revealEls();
      if (!els.length) return null;

      const section = document.getElementById('about');
      const desc = section ? section.querySelector('p.reveal') : null;
      const inner = section ? section.querySelector('div') : null;
      const primaryReveals = inner ? Array.from(inner.querySelectorAll(':scope > .reveal')) : [];
      const excludes = [desc, ...primaryReveals].filter(Boolean) as Element[];
      const toObserve = els.filter(el => !excludes.includes(el));

      const vhOffsetPx = Math.round(window.innerHeight * 0.2);
      const rootMargin = `0px 0px -${vhOffsetPx}px 0px`;

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0, rootMargin });

      toObserve.forEach((el) => observer.observe(el));
      return observer;
    };

    const startWhenAbout40Visible = () => {
      const section = document.getElementById('about');
      if (!section) {
        createObserverForReveals();
        return;
      }

      const desc = section.querySelector('p.reveal');
      const inner = section.querySelector('div');
      const primaryReveals = inner ? Array.from(inner.querySelectorAll(':scope > .reveal')) : [];

      const sectionObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.4) {
            if (desc) desc.classList.add('is-visible');
            primaryReveals.forEach(el => el.classList.add('is-visible'));
            createObserverForReveals();
            obs.disconnect();
          }
        });
      }, { threshold: [0.4] });

      sectionObserver.observe(section);
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(startWhenAbout40Visible);
    } else {
      setTimeout(startWhenAbout40Visible, 200);
    }
  }, []);

  return (
    <Section text="About Me" href="about">
      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-8">
        <p className="reveal fade-up duration-2 delay-2 w-auto text-base text-neutral md:pr-5">{description}</p>
        <div className="h-80 w-64 flex-shrink-0 rotate-[5deg] bg-white p-4 md:rotate-[7deg]">
          <img src={image} alt="about image" width={260} height={260} className="object-cover reveal fade-up duration-2 delay-2" />
        </div>
      </div>
    </Section>
  );
}
