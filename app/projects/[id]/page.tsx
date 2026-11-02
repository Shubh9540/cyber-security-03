import React from 'react';
import { CyberSecurityTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ProjectDetailContent } from '@/components/sections/ProjectDetailContent';

export const dynamic = 'force-dynamic';

export default function ProjectDetailPage() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  const projectDetailData = sectionData.ProjectDetails?.variants?.CyberSecurityProjectDetail1;
  const projectDetailBreadcrumb = commonData.projectDetailBreadcrumb;

  if (!projectDetailData || !projectDetailBreadcrumb) return null;

  return (
    <main className="min-h-screen bg-[var(--color-bg-main)]">
      <Breadcrumb data={projectDetailBreadcrumb} />
      <ProjectDetailContent data={projectDetailData} />
    </main>
  );
}
