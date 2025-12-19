import React from 'react';
import type { HeroProps } from '@types';

export default function Hero({ name, specialty, summary }: HeroProps) {
  return (
    <section className="py-24" id="hero">
      <h1 className="fade-up duration-1 delay-1 mb-1.5 font-serif text-7xl font-bold tracking-tightest text-white sm:text-8xl md:mb-0 md:text-9xl">{name}</h1>
      <p id="hero-specialty" className="fade-up duration-2 delay-2 mb-9 font-serif text-4xl leading-[46px] font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">{specialty}</p>
      <p className="fade-up duration-2 delay-2 mb-16 text-base font-normal text-neutral md:text-lg">{summary}</p>
    </section>
  );
}
