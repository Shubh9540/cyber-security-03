"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FaArrowRight,
  FaBriefcase,
  FaBuilding,
  FaChevronDown,
  FaEnvelope,
  FaPhoneAlt,
  FaRegCommentDots,
  FaUser,
} from 'react-icons/fa';
import { QuoteSectionProps } from '@/types/templates.types';

export const QuoteSection = ({ data }: QuoteSectionProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section className="bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto max-w-[1250px] px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-10 bg-[var(--color-accent)]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white">{data.eyebrow}</p>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
              {data.title}{' '}
              <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 md:text-base">{data.description}</p>

            <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-lg border border-[var(--color-border-card)]">
              <Image src={data.image} alt={data.imageAlt} fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>

          <div className="rounded-xl border border-[var(--color-accent)] bg-[var(--color-bg-card)] p-5 md:p-7 lg:p-8">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-10 bg-[var(--color-accent)]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white">{data.form.eyebrow}</p>
            </div>

            <h2 className="mt-4 text-2xl font-extrabold leading-tight text-white md:text-3xl lg:text-4xl">
              {data.form.title}{' '}
              <span className="text-[var(--color-accent)]">{data.form.titleHighlight}</span>
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/75 md:text-base">{data.form.description}</p>

            <form
              className="mt-6 space-y-4"
              onChange={() => setSubmitted(false)}
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
                event.currentTarget.reset();
              }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="relative block">
                  <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
                  <input name="fullName" type="text" required placeholder={data.form.fullNamePlaceholder} className="w-full rounded-md border border-[var(--color-border-card)] bg-[var(--color-bg-card-alt)] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/65 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]" />
                </label>
                <label className="relative block">
                  <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
                  <input name="email" type="email" required placeholder={data.form.emailPlaceholder} className="w-full rounded-md border border-[var(--color-border-card)] bg-[var(--color-bg-card-alt)] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/65 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]" />
                </label>
                <label className="relative block">
                  <FaPhoneAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
                  <input name="phone" type="tel" required placeholder={data.form.phonePlaceholder} className="w-full rounded-md border border-[var(--color-border-card)] bg-[var(--color-bg-card-alt)] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/65 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]" />
                </label>
                <label className="relative block">
                  <FaBuilding className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
                  <input name="company" type="text" required placeholder={data.form.companyPlaceholder} className="w-full rounded-md border border-[var(--color-border-card)] bg-[var(--color-bg-card-alt)] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/65 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]" />
                </label>
              </div>

              <label className="relative block">
                <FaBriefcase className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
                <select name="service" required defaultValue="" className="w-full appearance-none rounded-md border border-[var(--color-border-card)] bg-[var(--color-bg-card-alt)] py-3 pl-11 pr-10 text-sm text-white outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]">
                  <option value="" disabled>{data.form.servicePlaceholder}</option>
                  {data.form.services.map((service) => (
                    <option key={service.id} value={service.value}>{service.label}</option>
                  ))}
                </select>
                <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/70" />
              </label>

              <label className="relative block">
                <FaRegCommentDots className="pointer-events-none absolute left-4 top-4 text-white/70" />
                <textarea name="requirements" required rows={4} placeholder={data.form.messagePlaceholder} className="w-full resize-none rounded-md border border-[var(--color-border-card)] bg-[var(--color-bg-card-alt)] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/65 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]" />
              </label>

              <label className="flex items-start gap-3 text-sm leading-5 text-white/80">
                <input name="agreement" type="checkbox" required className="mt-0.5 h-5 w-5 flex-shrink-0 rounded border-[var(--color-accent)] bg-transparent accent-[var(--color-accent)]" />
                <span>{data.form.agreementText}</span>
              </label>

              <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[var(--color-primary-active)] to-[var(--color-accent)] px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90 md:text-base">
                {data.form.buttonText}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-primary-active)]"><FaArrowRight /></span>
              </button>

              {submitted && (
                <p role="status" className="rounded-md border border-[var(--color-success-border)] bg-[var(--color-success-bg)] px-4 py-3 text-sm font-semibold text-[var(--color-success-text)]">
                  {data.form.successMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
