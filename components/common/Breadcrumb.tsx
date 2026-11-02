import React from 'react';
import Link from 'next/link';
import { BreadcrumbProps } from '@/types/templates.types';

export const Breadcrumb = ({ data }: BreadcrumbProps) => {
  if (!data) return null;

  return (
    <section
      className="relative flex min-h-52 w-full items-center overflow-hidden bg-[var(--color-navy-darker)] bg-cover bg-center px-4 py-8 sm:px-6 md:min-h-64 lg:min-h-72 lg:px-8"
      style={data.bgImage ? { backgroundImage: `url('${data.bgImage}')` } : undefined}
    >
      {data.bgImage && <div className="absolute inset-0 bg-[var(--color-navy-darker)]/45" />}
      {data.bgImage && <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-darker)]/75 via-[var(--color-navy-darker)]/40 to-[var(--color-navy-darker)]/25" />}

      <div className="relative z-10 mx-auto w-full max-w-7xl text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
          {data.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center justify-start gap-2 text-sm font-semibold text-white md:text-base">
          {data.paths.map((path, index) => (
            <React.Fragment key={path.id}>
              {path.url ? (
                <Link href={path.url} className="transition-colors hover:text-[var(--color-primary)]">
                  {path.label}
                </Link>
              ) : (
                <span>{path.label}</span>
              )}
              {index < data.paths.length - 1 && (
                <span className="h-4 w-px rotate-[24deg] bg-white" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
