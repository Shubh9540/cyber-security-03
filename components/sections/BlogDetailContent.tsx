import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCalendarAlt, FaFolder, FaQuoteLeft, FaUser } from 'react-icons/fa';
import { BlogDetailContentProps } from '@/types/templates.types';

export const BlogDetailContent = ({ data }: BlogDetailContentProps) => {
  if (!data) return null;

  return (
    <section className="w-full bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(18rem,0.8fr)] lg:px-8">
        <article className="min-w-0">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-[var(--color-border)]">
            <Image src={data.image} alt={data.imageAlt} fill sizes="(max-width: 1023px) 100vw, 66vw" className="object-cover" />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--color-text-light)]">
            <span className="flex items-center gap-2"><FaUser className="text-[var(--color-primary)]" />{data.authorLabel}</span>
            <span className="flex items-center gap-2"><FaCalendarAlt className="text-[var(--color-primary)]" />{data.date}</span>
            <span className="flex items-center gap-2"><FaFolder className="text-[var(--color-primary)]" />{data.category}</span>
          </div>

          <h1 className="mt-5 text-3xl font-extrabold leading-snug text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            {data.title1} <span className="text-[var(--color-primary)]">{data.title2}</span>
          </h1>
          <p className="mt-5 text-sm leading-7 text-[var(--color-text-light)] sm:text-base">{data.introText}</p>

          {data.articleSections.map((section, index) => (
            <div key={section.id} className="mt-7">
              <h2 className="text-xl font-extrabold text-[var(--color-heading)] sm:text-2xl">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-light)] sm:text-base">{section.text}</p>
              {index === 0 && (
                <blockquote className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 sm:p-6">
                  <div className="flex gap-4">
                    <FaQuoteLeft className="shrink-0 text-3xl text-[var(--color-primary)]" />
                    <div>
                      <p className="text-base font-semibold leading-relaxed text-[var(--color-heading)] sm:text-lg">{data.quote}</p>
                      <p className="mt-4 font-bold text-[var(--color-primary)]">{data.quoteAuthor}</p>
                      <p className="text-sm text-[var(--color-text-light)]">{data.quoteRole}</p>
                    </div>
                  </div>
                </blockquote>
              )}
            </div>
          ))}

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {data.inlineImages.map((item) => (
              <div key={item.id} className="relative aspect-[16/9] overflow-hidden rounded-lg border border-[var(--color-border)]">
                <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 639px) 100vw, 33vw" className="object-cover" />
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-[var(--color-text-light)] sm:text-base">{data.closingText}</p>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-6">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h2 className="text-xl font-extrabold text-[var(--color-heading)]">{data.categoriesTitle}</h2>
            <div className="mt-5 space-y-3">
              {data.categories.map((category) => (
                <Link key={category.id} href={category.url} className="flex items-center justify-between gap-3 rounded-full bg-[var(--color-bg-main)] px-5 py-3 text-sm font-semibold text-[var(--color-heading)] transition-colors hover:text-[var(--color-primary)]">
                  <span>{category.label}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white"><FaArrowRight className="text-xs" /></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h2 className="text-xl font-extrabold text-[var(--color-heading)]">{data.recentPostsTitle}</h2>
            <div className="mt-5 divide-y divide-[var(--color-border)]">
              {data.recentPosts.map((post) => (
                <Link key={post.id} href={post.url} className="group flex gap-3 py-4 first:pt-0 last:pb-0">
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-md">
                    <Image src={post.image} alt={post.imageAlt} fill sizes="96px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="min-w-0">
                    <span className="flex items-center gap-2 text-xs text-[var(--color-text-light)]"><FaCalendarAlt className="text-[var(--color-primary)]" />{post.date}</span>
                    <h3 className="mt-2 line-clamp-2 text-sm font-bold leading-tight text-[var(--color-heading)] group-hover:text-[var(--color-primary)]">{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
