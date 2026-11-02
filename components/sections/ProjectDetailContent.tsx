import React from 'react';
import Image from 'next/image';
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaCoins,
  FaFolder,
  FaMapMarkerAlt,
  FaUser,
} from 'react-icons/fa';
import { ProjectDetailContentProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUser': return <FaUser />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaCalendarAlt': return <FaCalendarAlt />;
    case 'FaFolder': return <FaFolder />;
    case 'FaCoins': return <FaCoins />;
    default: return null;
  }
};

export const ProjectDetailContent = ({ data }: ProjectDetailContentProps) => {
  if (!data) return null;

  return (
    <section className="w-full bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-extrabold leading-snug text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            {data.title1} <span className="text-[var(--color-primary)]">{data.title2}</span>
          </h1>
          <p className="mt-4 text-sm leading-7 text-[var(--color-text-light)] sm:text-base">{data.description}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-[var(--color-border)]">
              <Image src={data.image} alt={data.imageAlt} fill sizes="(max-width: 1023px) 100vw, 66vw" className="object-cover" />
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-10 bg-[var(--color-primary)]" />
                <h2 className="text-xl font-extrabold text-[var(--color-heading)] sm:text-2xl">{data.overviewTitle}</h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-light)] sm:text-base">{data.overviewText}</p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-10 bg-[var(--color-primary)]" />
                <h2 className="text-xl font-extrabold text-[var(--color-heading)] sm:text-2xl">{data.highlightsTitle}</h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-light)] sm:text-base">{data.highlightsDescription}</p>
              <ul className="mt-5 space-y-3">
                {data.highlights.map((highlight) => (
                  <li key={highlight.id} className="flex items-start gap-3 text-sm text-[var(--color-text-light)] sm:text-base">
                    <FaCheckCircle className="mt-1 shrink-0 text-[var(--color-primary)]" />
                    <span>{highlight.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 sm:p-6">
              <h2 className="text-xl font-extrabold text-[var(--color-heading)] sm:text-2xl">{data.informationTitle}</h2>
              <div className="mt-5 divide-y divide-[var(--color-border)]">
                {data.information.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-dark)] text-xl text-white">{renderIcon(item.icon)}</div>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--color-heading)] sm:text-base">{item.label}</h3>
                      <p className="mt-1 text-sm text-[var(--color-text-light)]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-10 bg-[var(--color-primary)]" />
                <h2 className="text-xl font-extrabold text-[var(--color-heading)] sm:text-2xl">{data.galleryTitle}</h2>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {data.gallery.map((item) => (
                  <div key={item.id} className="relative aspect-square overflow-hidden rounded-lg border border-[var(--color-border)]">
                    <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 1023px) 50vw, 16vw" className="object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
