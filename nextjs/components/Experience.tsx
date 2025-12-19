import React, { useEffect } from 'react';
import Section from './Section';
import type { ExperienceProps as Exp } from '../src/types';

export default function Experience({ experience }: { experience: Exp[] }) {
  useEffect(() => {
    const run = () => {
      const section = document.getElementById('experience');
      if (!section) return;
      const els = Array.from(section.querySelectorAll('.reveal'));
      if (!els.length) return;

      const vhOffsetPx = Math.round(window.innerHeight * 0);
      const rootMargin = `0px 0px -${vhOffsetPx}px 0px`;

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0, rootMargin });

      els.forEach((el) => observer.observe(el));
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(run);
    } else {
      setTimeout(run, 200);
    }
  }, []);

  return (
    <Section text="Work Experience" href="experience">
      {experience.map(({ company, position, startDate, endDate, summary }, i) => (
        <div key={`${company}-${i}`} className="mb-10">
          <h3 className="mb-1.5 font-serif text-2xl font-semibold text-white reveal" style={{ transitionDelay: `${i * 200}ms` }}>{company}</h3>
          <div className="flex flex-col items-start pb-5">
            <h4 className="mb-0.5 font-serif text-2xl font-medium text-primary reveal" style={{ transitionDelay: `${i * 200 + 80}ms` }}>{position}</h4>
            <span className="pb-[2px] text-sm text-white/70 reveal" style={{ transitionDelay: `${i * 200 + 120}ms` }}>{startDate} — {endDate}</span>
          </div>
          {Array.isArray(summary) ? (
            <ul className="list-none">
              {summary.map((log, j) => (
                <li key={j} className="relative mb-3 pl-8 text-base text-neutral before:absolute before:top-1 before:left-0 before:content-[url(/check.svg)] reveal" style={{ transitionDelay: `${i * 200 + 160 + j * 80}ms` }}>{log}</li>
              ))}
            </ul>
          ) : (
            <p className="text-base text-neutral reveal" style={{ transitionDelay: `${i * 200 + 160}ms` }}>{summary}</p>
          )}
        </div>
      ))}
    </Section>
  );
}
