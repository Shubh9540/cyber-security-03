export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
  hasDropdown?: boolean;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinks: HeaderNavLink[];
  contactButton: { text: string; url: string };
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface BreadcrumbPath {
  id: string;
  label: string;
  url?: string;
}

export interface BreadcrumbData {
  title: string;
  bgImage: string;
  paths: BreadcrumbPath[];
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  titleStart: string;
  highlightedTitle: string;
  titleEnd: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface HeroData {
  slideNavigationLabel: string;
  goToSlideLabel: string;
  autoplayDelay: number;
  slides: HeroSlide[];
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface AboutFeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AboutUsData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  title2: string;
  description: string;
  imageMain: string;
  imageMainAlt: string;
  imageTop: string;
  imageTopAlt: string;
  imageBottom: string;
  imageBottomAlt: string;
  features: AboutFeatureItem[];
}

export interface AboutUsSectionProps {
  data?: AboutUsData;
}

export interface AboutPageParagraph {
  id: string;
  text: string;
}

export interface AboutPageIntroData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  title2: string;
  imageMain: string;
  imageMainAlt: string;
  imageSecondary: string;
  imageSecondaryAlt: string;
  experienceValue: string;
  experienceLabel: string;
  paragraphs: AboutPageParagraph[];
}

export interface AboutPageIntroProps {
  data?: AboutPageIntroData;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  url: string;
}

export interface ServicesData {
  subtitle: string;
  title1: string;
  title2: string;
  title3: string;
  description: string;
  linkText: string;
  services: ServiceItem[];
}

export interface ServicesSectionProps {
  data?: ServicesData;
}

export interface ServiceCardProps {
  service: ServiceItem;
  linkText: string;
}

export interface ServiceDetailFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ServiceDetailText {
  id: string;
  text: string;
}

export interface ServiceDetailNavItem {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface ServiceDetailPageData {
  id: string;
  activeServiceId: string;
  serviceLinks: ServiceDetailNavItem[];
  eyebrow: string;
  title1: string;
  title2: string;
  description: string;
  imageMain: string;
  imageMainAlt: string;
  overviewLabel: string;
  overviewText: ServiceDetailText[];
  approachLabel: string;
  approachText: ServiceDetailText[];
  featuresLabel: string;
  features: ServiceDetailFeature[];
}

export interface ServiceDetailContentProps {
  data?: ServiceDetailPageData;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  videoImage: string;
  videoImageAlt: string;
  previousLabel: string;
  nextLabel: string;
  slideLabel: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialsSectionProps {
  data?: TestimonialsData;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  brandTitle: string;
  copyrightText: string;
  description: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  quickLinksTitle: string;
  servicesTitle: string;
  contactTitle: string;
  followUsTitle: string;
  socialLinks: { id: string; icon: string; label: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  servicesLinks: { id: string; label: string; url: string }[];
  contactInfo: { address: string; phone: string; email: string };
}

export interface FooterProps {
  data?: FooterData;
}

export interface NotFoundData {
  code: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface NotFoundSectionProps {
  data?: NotFoundData;
}

export interface TemplateComponentItem {
  key: string;
  component: string;
}

export interface TemplateComponentPage {
  components: TemplateComponentItem[];
}

export interface TemplateComponentsData {
  shared: {
    Header: string;
    Footer: string;
  };
  pages: Record<string, TemplateComponentPage>;
}

export interface PageComponentRegistry {
  components: string[];
}

export interface WhyChooseUsFeature {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: WhyChooseUsFeature[];
  button: { text: string; url: string };
  showButton: boolean;
  imageMain: string;
  imageAlt: string;
}

export interface WhyChooseUsSectionProps {
  data?: WhyChooseUsData;
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  image: string;
  imageAlt: string;
  url: string;
}

export interface ProjectsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  previousLabel: string;
  nextLabel: string;
  buttonText: string;
  buttonUrl: string;
  projects: ProjectItem[];
}

export interface ProjectsSectionProps {
  data?: ProjectsData;
}

export interface ProjectsGridProps {
  data?: ProjectsData;
}

export interface ProjectDetailInfoItem {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export interface ProjectDetailGalleryItem {
  id: string;
  image: string;
  imageAlt: string;
}

export interface ProjectDetailHighlight {
  id: string;
  text: string;
}

export interface ProjectDetailData {
  id: string;
  title1: string;
  title2: string;
  description: string;
  image: string;
  imageAlt: string;
  overviewTitle: string;
  overviewText: string;
  highlightsTitle: string;
  highlightsDescription: string;
  highlights: ProjectDetailHighlight[];
  informationTitle: string;
  information: ProjectDetailInfoItem[];
  galleryTitle: string;
  gallery: ProjectDetailGalleryItem[];
}

export interface ProjectDetailContentProps {
  data?: ProjectDetailData;
}

export interface ImpactStat {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export interface ImpactData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  stats: ImpactStat[];
}

export interface ImpactSectionProps {
  data?: ImpactData;
}

export interface ImpactCounterProps {
  value: string;
  start: boolean;
}

export interface FaqItem {
  id: string;
  icon: string;
  question: string;
  answer: string;
}

export interface FaqData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonLabel: string;
  ctaButtonUrl: string;
  items: FaqItem[];
}

export interface FaqSectionProps {
  data?: FaqData;
}

export interface ContactServiceOption {
  id: string;
  label: string;
  value: string;
}

export interface ContactInfoLine {
  id: string;
  text: string;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  lines: ContactInfoLine[];
}

export interface ContactData {
  intro: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
  };
  form: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    helperText: string;
    fullNamePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    servicePlaceholder: string;
    messagePlaceholder: string;
    buttonText: string;
    successMessage: string;
    servicesList: ContactServiceOption[];
  };
  contactPanel: {
    items: ContactInfoItem[];
  };
  location: {
    mapUrl: string;
    mapTitle: string;
  };
}

export interface ContactSectionProps {
  data?: ContactData;
}

export interface QuoteServiceOption {
  id: string;
  label: string;
  value: string;
}

export interface QuoteData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  image: string;
  imageAlt: string;
  form: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    fullNamePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    companyPlaceholder: string;
    servicePlaceholder: string;
    messagePlaceholder: string;
    agreementText: string;
    buttonText: string;
    successMessage: string;
    services: QuoteServiceOption[];
  };
}

export interface QuoteSectionProps {
  data?: QuoteData;
}

export interface BlogItem {
  id: string;
  image: string;
  imageAlt?: string;
  date: string;
  category: string;
  title: string;
  description: string;
  url: string;
}

export interface BlogsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  readMoreText: string;
  previousLabel: string;
  nextLabel: string;
  pageLabel: string;
  itemsPerPage: number;
  button: { text: string; url: string };
  blogs: BlogItem[];
  pageBlogs: BlogItem[];
}

export interface BlogsSectionProps {
  data?: BlogsData;
  isPage?: boolean;
}

export interface BlogGridProps {
  data?: BlogsData;
}

export interface BlogCardProps {
  blog: BlogItem;
  readMoreText: string;
}

export interface BlogDetailTextSection {
  id: string;
  title: string;
  text: string;
}

export interface BlogDetailInlineImage {
  id: string;
  image: string;
  imageAlt: string;
}

export interface BlogDetailRecentPost {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  date: string;
  url: string;
}

export interface BlogDetailCategory {
  id: string;
  label: string;
  url: string;
}

export interface BlogDetailPageData {
  id: string;
  category: string;
  title1: string;
  title2: string;
  authorLabel: string;
  date: string;
  image: string;
  imageAlt: string;
  introText: string;
  articleSections: BlogDetailTextSection[];
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  inlineImages: BlogDetailInlineImage[];
  closingText: string;
  recentPostsTitle: string;
  recentPosts: BlogDetailRecentPost[];
  categoriesTitle: string;
  categories: BlogDetailCategory[];
}

export interface BlogDetailContentProps {
  data?: BlogDetailPageData;
}

export interface PageComponentItem {
  key: string;
  component: string;
}

export interface PageComponentRegistry {
  components: (string | PageComponentItem)[];
}

export interface TemplateComponentsData {
  shared?: Record<string, string>;
  pages?: Record<string, PageComponentRegistry>;
}

export interface CyberSecurityTemplateData {
  common: {
    aboutBreadcrumb?: BreadcrumbData;
    servicesBreadcrumb?: BreadcrumbData;
    serviceDetailBreadcrumb?: BreadcrumbData;
    projectsBreadcrumb?: BreadcrumbData;
    projectDetailBreadcrumb?: BreadcrumbData;
    contactBreadcrumb?: BreadcrumbData;
    quoteBreadcrumb?: BreadcrumbData;
    blogsBreadcrumb?: BreadcrumbData;
    blogDetailBreadcrumb?: BreadcrumbData;
    notFound?: NotFoundData;
    Footer?: FooterData;
  };
  categories: {
    CyberSecurity: {
      templateComponents?: TemplateComponentsData;
      sections: {
        Header?: { variants?: { CyberSecurityHeader1?: HeaderData } };
        Hero?: { variants?: { CyberSecurityHero1?: HeroData } };
        AboutUs?: { variants?: { CyberSecurityAboutUs1?: AboutUsData } };
        AboutPageIntro?: { variants?: { CyberSecurityAboutPageIntro1?: AboutPageIntroData } };
        Services?: { variants?: { CyberSecurityServices1?: ServicesData } };
        ServiceDetails?: { variants?: { CyberSecurityServiceDetail1?: ServiceDetailPageData } };
        Testimonials?: { variants?: { CyberSecurityTestimonials1?: TestimonialsData } };
        Blogs?: { variants?: { CyberSecurityBlogs1?: BlogsData } };
        BlogDetails?: { variants?: { CyberSecurityBlogDetail1?: BlogDetailPageData } };
        whyChooseUs?: { variants?: { CyberSecurityWhyChooseUs1?: WhyChooseUsData; CyberSecurityAboutWhyChooseUs1?: WhyChooseUsData } };
        Projects?: { variants?: { CyberSecurityProjects1?: ProjectsData } };
        ProjectDetails?: { variants?: { CyberSecurityProjectDetail1?: ProjectDetailData } };
        Impact?: { variants?: { CyberSecurityImpact1?: ImpactData } };
        Faq?: { variants?: { CyberSecurityFaq1?: FaqData } };
        contact?: { variants?: { CyberSecurityContact1?: ContactData } };
        Quote?: { variants?: { CyberSecurityQuote1?: QuoteData } };
      };
    };
  };
  pages: Record<string, PageComponentRegistry>;
}
