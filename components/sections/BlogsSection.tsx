'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BlogCardProps, BlogsSectionProps } from '@/types/templates.types';

export const BlogCard = ({ blog, readMoreText }: BlogCardProps) => {
  const [dateDay, dateMonth, dateYear] = blog.date.split(' ');

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-border-card)] bg-[var(--color-bg-card)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]">
      <div className="relative h-44 overflow-hidden sm:h-48">
        <Image
          src={blog.image}
          alt={blog.imageAlt ?? blog.title}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)]/30 to-transparent" />

        <div className="absolute left-4 top-4 flex min-w-16 flex-col items-center rounded-lg bg-[var(--color-bg-main)]/90 px-3 py-2 text-[var(--color-heading)] shadow-xl backdrop-blur-sm">
          <span className="text-xl font-extrabold leading-none">{dateDay}</span>
          <span className="mt-1 text-xs">{dateMonth} {dateYear}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="mb-3 w-fit rounded-full border border-[var(--color-primary)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
          {blog.category}
        </span>

        <Link href={blog.url}>
          <h3 className="text-xl font-extrabold leading-tight text-[var(--color-heading)] transition-colors group-hover:text-[var(--color-primary)]">
            {blog.title}
          </h3>
        </Link>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-light)]">{blog.description}</p>

        <Link
          href={blog.url}
          className="mt-5 inline-flex w-fit items-center gap-4 text-sm font-bold text-[var(--color-heading)] transition-colors hover:text-[var(--color-primary)]"
        >
          {readMoreText}
          <FaArrowRight className="text-[var(--color-primary)]" />
        </Link>
      </div>
    </article>
  );
};

export const BlogsSection = ({ data, isPage = false }: BlogsSectionProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollBlogs = useCallback((direction: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const maximumScroll = slider.scrollWidth - slider.clientWidth;
    const reachedEnd = slider.scrollLeft >= maximumScroll - 4;
    const reachedStart = slider.scrollLeft <= 4;

    if (direction > 0 && reachedEnd) {
      slider.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }

    if (direction < 0 && reachedStart) {
      slider.scrollTo({ left: maximumScroll, behavior: 'smooth' });
      return;
    }

    slider.scrollBy({ left: direction * slider.clientWidth, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isPage || !data || data.blogs.length <= 1) return;

    const interval = window.setInterval(() => scrollBlogs(1), 5000);
    return () => window.clearInterval(interval);
  }, [data, isPage, scrollBlogs]);

  if (!data?.blogs.length) return null;

  const homepageBlogs = data.blogs.slice(0, 6);

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[var(--color-primary)]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-primary)] sm:text-sm">
              {data.subtitle}
            </span>
            <span className="h-px w-10 bg-[var(--color-primary)]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-[var(--color-heading)] sm:text-4xl">
            {data.title1} <span className="text-[var(--color-primary-dark)]">{data.title2}</span>
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-[var(--color-text-light)] sm:text-base">
            {data.description}
          </p>
        </div>

        {isPage ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.pageBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} readMoreText={data.readMoreText} />
            ))}
          </div>
        ) : (
          <>
            <div className="relative sm:mx-14">
              <button
                type="button"
                onClick={() => scrollBlogs(-1)}
                aria-label={data.previousLabel}
                className="absolute -left-14 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-primary)] bg-[var(--color-bg-main)] text-[var(--color-heading)] transition-colors hover:bg-[var(--color-primary)] sm:flex"
              >
                <FaArrowLeft />
              </button>

              <div
                ref={sliderRef}
                className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {homepageBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="min-w-full snap-start sm:min-w-[calc(50%-0.625rem)] lg:min-w-[calc(33.333%-0.875rem)]"
                  >
                    <BlogCard blog={blog} readMoreText={data.readMoreText} />
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollBlogs(1)}
                aria-label={data.nextLabel}
                className="absolute -right-14 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-primary)] bg-[var(--color-bg-main)] text-[var(--color-heading)] transition-colors hover:bg-[var(--color-primary)] sm:flex"
              >
                <FaArrowRight />
              </button>
            </div>

            <div className="mt-6 flex justify-center">
              <Link
                href={data.button.url}
                className="inline-flex items-center gap-4 rounded-lg border border-[var(--color-primary)] bg-[var(--color-bg-card)] px-6 py-3 text-sm font-bold text-[var(--color-heading)] transition-colors hover:bg-[var(--color-primary)]"
              >
                {data.button.text}
                <FaArrowRight />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
