'use client';

import React, { useMemo, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { BlogGridProps } from '@/types/templates.types';
import { BlogCard } from '@/components/sections/BlogsSection';

export const BlogGrid = ({ data }: BlogGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = data ? Math.max(1, Math.ceil(data.pageBlogs.length / data.itemsPerPage)) : 1;
  const visibleBlogs = useMemo(() => {
    if (!data) return [];
    const startIndex = (currentPage - 1) * data.itemsPerPage;
    return data.pageBlogs.slice(startIndex, startIndex + data.itemsPerPage);
  }, [currentPage, data]);

  if (!data?.pageBlogs.length) return null;

  const changePage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <section className="w-full bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[var(--color-primary)]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-primary)] sm:text-sm">{data.subtitle}</span>
            <span className="h-px w-10 bg-[var(--color-primary)]" />
          </div>
          <h1 className="text-3xl font-extrabold leading-tight text-[var(--color-heading)] sm:text-4xl">
            {data.title1} <span className="text-[var(--color-primary)]">{data.title2}</span>
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-[var(--color-text-light)] sm:text-base">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} readMoreText={data.readMoreText} />)}
        </div>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button type="button" onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1} aria-label={data.previousLabel} className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-primary)] text-[var(--color-heading)] transition-colors hover:bg-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-40">
            <FaAngleLeft />
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button key={page} type="button" onClick={() => changePage(page)} aria-label={`${data.pageLabel} ${page}`} className={`flex h-10 min-w-10 items-center justify-center rounded-md border px-3 text-sm font-bold transition-colors ${currentPage === page ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white' : 'border-[var(--color-border)] text-[var(--color-heading)] hover:border-[var(--color-primary)]'}`}>
              {page}
            </button>
          ))}
          <button type="button" onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages} aria-label={data.nextLabel} className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-primary)] text-[var(--color-heading)] transition-colors hover:bg-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-40">
            <FaAngleRight />
          </button>
        </nav>
      </div>
    </section>
  );
};
