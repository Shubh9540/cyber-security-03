import React from 'react';
import { CyberSecurityTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServicesSection } from '@/components/sections/ServicesSection';

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <Breadcrumb data={commonData.servicesBreadcrumb} />

      <ServicesSection data={sectionData.Services?.variants?.CyberSecurityServices1} />
    </main>
  );
}
