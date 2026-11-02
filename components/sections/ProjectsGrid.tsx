import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { ProjectsGridProps } from '@/types/templates.types';

export const ProjectsGrid = ({ data }: ProjectsGridProps) => {
  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-bg-section)] py-8 lg:py-12">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rotate-45 border border-[var(--color-primary)]/10" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rotate-45 border border-[var(--color-primary)]/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[var(--color-primary)]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-primary)] sm:text-sm">{data.subtitle}</span>
            <span className="h-px w-10 bg-[var(--color-primary)]" />
          </div>
          <h2 className="text-2xl font-extrabold leading-tight text-[var(--color-heading)] sm:text-3xl lg:text-4xl">
            {data.title1}
            <span className="block text-[var(--color-primary-dark)]">{data.title2}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-[var(--color-text-light)] sm:text-base">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.projects.map((project) => (
            <article key={project.id} className="group relative min-h-80 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] via-[var(--color-bg-card)]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <span className="inline-flex rounded-full border border-[var(--color-primary)] bg-[var(--color-bg-main)]/80 px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">{project.category}</span>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-extrabold leading-snug text-[var(--color-heading)]">{project.title}</h3>
                    <span className="mt-3 block h-0.5 w-10 bg-[var(--color-primary)]" />
                  </div>
                  <Link href={project.url} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-primary)] bg-[var(--color-bg-main)]/80 text-sm text-[var(--color-heading)] transition-colors hover:bg-[var(--color-primary)]">
                    <FaArrowRight />
                    <span className="sr-only">{project.title}</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
