import React from 'react';
import Link from 'next/link';
import {
  FaAngleRight,
  FaClipboardCheck,
  FaCloudUploadAlt,
  FaCogs,
  FaEye,
  FaFingerprint,
  FaFireAlt,
  FaGlobe,
  FaLock,
  FaNetworkWired,
  FaShieldAlt,
  FaTv,
} from 'react-icons/fa';
import { ServiceDetailContentProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaNetworkWired': return <FaNetworkWired />;
    case 'FaLock': return <FaLock />;
    case 'FaFingerprint': return <FaFingerprint />;
    case 'FaEye': return <FaEye />;
    case 'FaCloudUploadAlt': return <FaCloudUploadAlt />;
    case 'FaCogs': return <FaCogs />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaFireAlt': return <FaFireAlt />;
    case 'FaTv': return <FaTv />;
    case 'FaGlobe': return <FaGlobe />;
    case 'FaClipboardCheck': return <FaClipboardCheck />;
    default: return null;
  }
};

export const ServiceDetailContent = ({ data }: ServiceDetailContentProps) => {
  if (!data) return null;

  return (
    <section className="w-full bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          <aside className="lg:col-span-3">
            <nav className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {data.serviceLinks.map((service) => {
                const isActive = service.id === data.activeServiceId;
                return (
                  <Link
                    key={service.id}
                    href={service.url}
                    className={`flex min-h-20 items-center gap-4 rounded-lg border px-4 py-4 transition-colors ${isActive ? 'border-[var(--color-primary)] bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20' : 'border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-heading)] hover:border-[var(--color-primary)]'}`}
                  >
                    <span className={`text-2xl ${isActive ? 'text-white' : 'text-[var(--color-primary)]'}`}>{renderIcon(service.icon)}</span>
                    <span className="min-w-0 flex-1 text-sm font-bold sm:text-base">{service.label}</span>
                    <FaAngleRight className="shrink-0" />
                  </Link>
                );
              })}
            </nav>
          </aside>

          <div className="overflow-hidden rounded-xl border border-[var(--color-primary)] bg-[var(--color-bg-card)] lg:col-span-4">
            <img src={data.imageMain} alt={data.imageMainAlt} className="h-full min-h-80 w-full object-cover" />
          </div>

          <div className="flex flex-col justify-center lg:col-span-5 lg:pl-4">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-10 bg-[var(--color-primary)]" />
              <span className="text-sm font-bold tracking-[0.16em] text-[var(--color-heading)]">{data.eyebrow}</span>
            </div>
            <h1 className="mt-5 text-3xl font-extrabold leading-snug text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
              <span className="block">{data.title1}</span>
              <span className="mt-1 block text-[var(--color-primary)]">{data.title2}</span>
            </h1>
            <p className="mt-5 text-sm leading-7 text-[var(--color-text-light)] sm:text-base">{data.description}</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-8 lg:border-r lg:border-[var(--color-border)] lg:pr-12">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-10 bg-[var(--color-primary)]" />
                <h2 className="text-sm font-bold tracking-[0.16em] text-[var(--color-heading)]">{data.overviewLabel}</h2>
              </div>
              <div className="mt-4 space-y-3">
                {data.overviewText.map((paragraph) => <p key={paragraph.id} className="text-sm leading-7 text-[var(--color-text-light)] sm:text-base">{paragraph.text}</p>)}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-10 bg-[var(--color-primary)]" />
                <h2 className="text-sm font-bold tracking-[0.16em] text-[var(--color-heading)]">{data.approachLabel}</h2>
              </div>
              <div className="mt-4 space-y-3">
                {data.approachText.map((paragraph) => <p key={paragraph.id} className="text-sm leading-7 text-[var(--color-text-light)] sm:text-base">{paragraph.text}</p>)}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-10 bg-[var(--color-primary)]" />
              <h2 className="text-sm font-bold tracking-[0.16em] text-[var(--color-heading)]">{data.featuresLabel}</h2>
            </div>
            <div className="mt-5 space-y-5">
              {data.features.map((feature) => (
                <article key={feature.id} className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-[var(--color-primary)] bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-accent)] text-2xl text-white shadow-lg shadow-[var(--color-primary)]/15">
                    {renderIcon(feature.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--color-heading)] sm:text-lg">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-light)]">{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
