import React from 'react';
import { CyberSecurityTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutPageIntro } from '@/components/sections/AboutPageIntro';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <Breadcrumb data={commonData.aboutBreadcrumb} />
      
      {/* About Page Intro */}
      <AboutPageIntro data={sectionData.AboutPageIntro?.variants?.CyberSecurityAboutPageIntro1} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection data={sectionData.whyChooseUs?.variants?.CyberSecurityAboutWhyChooseUs1} />
    </main>
  );
}
