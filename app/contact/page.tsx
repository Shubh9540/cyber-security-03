import React from 'react';
import { CyberSecurityTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ContactSection } from '@/components/sections/ContactSection';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)]">
      <Breadcrumb data={commonData.contactBreadcrumb} />
      
      <ContactSection data={sectionData.contact?.variants?.CyberSecurityContact1} />

    </main>
  );
}
