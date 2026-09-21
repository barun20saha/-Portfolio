import type { Metadata } from 'next';
import Image from 'next/image';
import { getMarkdownContent, getMarkdownSlugs } from '@/lib/markdown';
import Container from '@/components/layouts/Container';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { ProjectComponents } from '@/components/projects/ProjectComponents';
import { ZoomableImage } from '@/components/projects/ZoomableImage';
import { ProjectNavigation } from '@/components/common/ProjectNavigation';
import { notFound } from 'next/navigation';
import Website from '@/components/icons/social/Website';
import Github from '@/components/icons/social/Github';
import 'highlight.js/styles/github-dark.css';
import { ProjectCardData } from '@/config/projects/ProjectCardData';
import { ProjectHeaderActions } from '@/components/projects/ProjectHeaderActions';
import RepeatSeparator from '@/components/ui/repeat-separator';

interface ProjectMeta {
  title?: string;
  description?: string;
  image?: string;
  technologies?: string[];
  status?: 'completed' | 'in-progress' | 'planning';
  statusVariant?: 'default' | 'secondary' | 'destructive' | 'outline';
  timeline?: string;
  role?: string;
  team?: string;
  live?: string;
  github?: string;
  challenges?: string[];
  learnings?: string[];
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://barun20saha-portfolio.vercel.app';

// 1. Generate Metadata dynamically for SEO on the server
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getMarkdownContent('projects', slug);
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const title = `${project.meta.title} | Projects`;
  const description = project.meta.description;
  const canonicalUrl = `${siteUrl}/projects/${slug}`;
  const imageUrl = project.meta.image
    ? project.meta.image.startsWith('http')
      ? project.meta.image
      : `${siteUrl}${project.meta.image.startsWith('/') ? '' : '/'}${project.meta.image}`
    : `${siteUrl}/og-image.webp`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: project.meta.title,
      description,
      images: [
        {
          url: imageUrl,
          alt: project.meta.title,
        },
      ],
      url: canonicalUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.meta.title,
      description,
      images: [imageUrl],
      creator: '@barun20saha',
    },
  };
}

// 2. Pre-generate all static slugs at build time
export async function generateStaticParams() {
  const slugs = await getMarkdownSlugs('projects');
  return slugs.map((slug) => ({
    slug,
  }));
}

// 3. Render the Project Server Component
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getMarkdownContent('projects', slug);

  if (!project) {
    notFound();
  }

  const { meta, content } = project;
  const projectMeta = meta as ProjectMeta;

  // Map projects to extract their slugs from details link, sorted by id descending to match UI list order
  const allProjects = [...ProjectCardData]
    .sort((a, b) => b.id - a.id)
    .map((p: any) => ({
      slug: p.projectDetailsPageSlug?.split('/').pop() || p.links.details.split('/').pop() || '',
    }));
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const previousProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: projectMeta.title,
    description: projectMeta.description,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    image: projectMeta.image
      ? projectMeta.image.startsWith('http')
        ? projectMeta.image
        : `${siteUrl}${projectMeta.image.startsWith('/') ? '' : '/'}${projectMeta.image}`
      : `${siteUrl}/og-image.webp`,
    author: {
      '@type': 'Person',
      name: 'Barun Saha',
      url: siteUrl,
    },
    url: projectMeta.live || `${siteUrl}/projects/${slug}`,
  };

  return (
    <div className="w-full border-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      {/* <div className="border-border mx-auto h-12 border-x md:max-w-3xl" /> */}
      <RepeatSeparator cn="h-8 opacity-50" />
      <div data-doc-cols-ready="">
        {/* 1. Document Header Container */}
        <div data-slot="doc-container" className="mx-auto w-full">
          <div className="flex items-center justify-between p-2 pl-4">
            <Link
              href="/projects"
              className="group/button text-muted-foreground hover:text-foreground inline-flex h-7 shrink-0 cursor-pointer items-center justify-center gap-2 border-none px-0 text-sm font-medium whitespace-nowrap outline-none select-none hover:no-underline"
            >
              <ArrowLeft className="size-4 transition-transform duration-200 group-hover/button:-translate-x-1" />
              Projects
            </Link>
            <ProjectHeaderActions
              previousSlug={previousProject?.slug || null}
              nextSlug={nextProject?.slug || null}
              projectTitle={projectMeta.title || 'Check out this project'}
            />
          </div>

          <RepeatSeparator cn="h-8" />
          
          <div className="pb-4">
            <h1
              data-slot="doc-title"
              className="px-4 text-3xl font-semibold tracking-tight text-balance md:max-w-md"
            >
              {projectMeta.title}
            </h1>
          </div>
        </div>

        {/* 2. Document Grid with Columns */}
        <div
          data-slot="doc-grid"
          className="mx-auto w-full"
        >
          <div data-slot="doc-content-col" className="mx-auto w-full">
            <div data-slot="prose" className="prose dark:prose-invert w-full px-4 pt-12">
              {/* Featured Image at the top */}
              {projectMeta.image && (
                <div className="mb-8 overflow-hidden rounded-xl border">
                  <ZoomableImage src={projectMeta.image} alt={projectMeta.title || slug} priority />
                </div>
              )}

              {/* Project description (About) */}
              <div className="mb-8">
                <h3 className="mb-3 text-2xl font-bold tracking-tight">About the Project</h3>
                <p className="text-muted-foreground text-base leading-relaxed font-normal sm:text-lg">
                  {projectMeta.description}
                </p>
              </div>

              {/* Links and Action Buttons */}
              <div className="not-prose mb-10 flex flex-wrap gap-4">
                {projectMeta.live && (
                  <a
                    href={projectMeta.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inset-shadow bg-primary text-primary-foreground hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 rounded-md px-6 py-2.5 text-sm font-semibold whitespace-nowrap shadow-xs transition-colors"
                  >
                    <Website className="size-4" />
                    Live Demo
                  </a>
                )}
                {projectMeta.github && (
                  <a
                    href={projectMeta.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inset-shadow bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border px-6 py-2.5 text-sm font-semibold whitespace-nowrap shadow-xs transition-colors"
                  >
                    <Github className="size-4" />
                    Source Code
                  </a>
                )}
              </div>

              <div className="not-prose mb-12">
                <h3 className="mb-4 text-xl font-bold tracking-tight">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {projectMeta.technologies &&
                    projectMeta.technologies.map((tech) => {
                      // Dynamically find a matching logo if possible, otherwise use a generic span
                      const TechComponent = (ProjectCardData as any[]).flatMap(p => p.technologies || []).find(t => t.name.toLowerCase() === tech.toLowerCase())?.icon || null;
                      return (
                        <div
                          key={tech}
                          className="bg-muted/30 border-border/50 hover:bg-muted/50 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors"
                        >
                          {TechComponent ? (
                            <span className="size-4 flex items-center justify-center opacity-80">{TechComponent}</span>
                          ) : null}
                          <span>{tech}</span>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* Challenges & Learnings */}
              {(projectMeta.challenges?.length || projectMeta.learnings?.length) && (
                <div className="not-prose mb-8 grid gap-6 md:grid-cols-2">
                  {projectMeta.challenges && projectMeta.challenges.length > 0 && (
                    <div className="rounded-lg border border-border bg-muted/20 p-4">
                      <h3 className="mb-3 text-lg font-semibold text-foreground">
                        Key Challenges
                      </h3>
                      <ul className="space-y-2">
                        {projectMeta.challenges.map((challenge, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-foreground" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {projectMeta.learnings && projectMeta.learnings.length > 0 && (
                    <div className="rounded-lg border border-border bg-muted/20 p-4">
                      <h3 className="mb-3 text-lg font-semibold text-foreground">
                        Key Learnings
                      </h3>
                      <ul className="space-y-2">
                        {projectMeta.learnings.map((learning, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-foreground" />
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Markdown Body Content */}
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={ProjectComponents as any}
              >
                {content}
              </ReactMarkdown>

              <div className="not-prose mt-8 mb-4">
                <ProjectNavigation slug={slug} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
