import React from 'react';

export default function Section({ children, text, href }: { children: React.ReactNode; text: string; href: string }) {
  return (
    <section id={href} className="py-24">
      <h2 className="mb-14 font-serif text-4xl font-bold tracking-tighter text-white md:text-5xl">{text}</h2>
      {children}
    </section>
  );
}
