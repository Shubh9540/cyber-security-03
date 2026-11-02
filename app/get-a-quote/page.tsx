import React from 'react';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { CyberSecurityTemplateData } from '@/types/templates.types';

export const dynamic = 'force-dynamic';

export default function GetAQuotePage() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)]">
      <Breadcrumb data={commonData.quoteBreadcrumb} />
      <QuoteSection data={sectionData.Quote?.variants?.CyberSecurityQuote1} />
    </main>
  );
}
