import React from 'react';
import { CyberSecurityTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { NotFoundSection } from '@/components/sections/NotFoundSection';

export default function NotFoundPage() {
  const templateData: CyberSecurityTemplateData = rawData;
  const commonData = templateData?.common;

  if (!commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <NotFoundSection data={commonData.notFound} />
    </main>
  );
}
