import React from 'react';
import { CyberSecurityTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetailContent } from '@/components/sections/ServiceDetailContent';

export const dynamic = 'force-dynamic';

export default function ServiceDetailPage() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  const serviceDetailData = sectionData.ServiceDetails?.variants?.CyberSecurityServiceDetail1;
  const serviceDetailBreadcrumb = commonData.serviceDetailBreadcrumb;

  if (!serviceDetailData || !serviceDetailBreadcrumb) return null;

  return (
    <main className="bg-[var(--color-bg-section)] min-h-screen flex flex-col">
      <Breadcrumb data={serviceDetailBreadcrumb} />
      <ServiceDetailContent data={serviceDetailData} />
    </main>
  );
}
