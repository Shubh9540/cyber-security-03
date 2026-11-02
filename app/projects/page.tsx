import React from 'react';
import { CyberSecurityTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';

export const dynamic = 'force-dynamic';

export default function ProjectsPage() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="min-h-screen bg-[var(--color-bg-main)]">
      <Breadcrumb data={commonData.projectsBreadcrumb} />
      <ProjectsGrid data={sectionData.Projects?.variants?.CyberSecurityProjects1} />
    </main>
  );
}
