import React from 'react';
import { CyberSecurityTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ImpactSection } from '@/components/sections/ImpactSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { BlogsSection } from '@/components/sections/BlogsSection';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;
  if (!sectionData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <HeroSection data={sectionData.Hero?.variants?.CyberSecurityHero1} />
      <AboutUsSection data={sectionData.AboutUs?.variants?.CyberSecurityAboutUs1} />
      <ServicesSection data={sectionData.Services?.variants?.CyberSecurityServices1} />
      <WhyChooseUsSection data={sectionData.whyChooseUs?.variants?.CyberSecurityWhyChooseUs1} />
      <ProjectsSection data={sectionData.Projects?.variants?.CyberSecurityProjects1} />
      <ImpactSection data={sectionData.Impact?.variants?.CyberSecurityImpact1} />
      <TestimonialSection data={sectionData.Testimonials?.variants?.CyberSecurityTestimonials1} />
      <FaqSection data={sectionData.Faq?.variants?.CyberSecurityFaq1} />
      <BlogsSection data={sectionData.Blogs?.variants?.CyberSecurityBlogs1} />
    </main>
  );
}
