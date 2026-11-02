import React from 'react';
import { CyberSecurityTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogDetailContent } from '@/components/sections/BlogDetailContent';

export const dynamic = 'force-dynamic';

export default function BlogDetailPage() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  const blogDetailData = sectionData.BlogDetails?.variants?.CyberSecurityBlogDetail1;
  const blogDetailBreadcrumb = commonData.blogDetailBreadcrumb;

  if (!blogDetailData || !blogDetailBreadcrumb) return null;

  return (
    <main className="bg-[var(--color-bg-main)]">
      <Breadcrumb data={blogDetailBreadcrumb} />
      <BlogDetailContent data={blogDetailData} />
    </main>
  );
}
