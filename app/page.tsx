import Hero from '@/components/layouts/Hero';
import ExperienceCard from '@/components/experience/ExperienceCard';
import Project from '@/components/projects/Project';
import AboutMe from '@/components/landing/TechSkills';
import Featured from '@/components/landing/Featured';
import PhotoGallery from '@/components/landing/PhotoGallery';
import { getMarkdownSlugs, getMarkdownContent } from '@/lib/markdown';
import { fetchRepoStars, fetchGitHubContributions } from '@/api/github';
import TopBanner from '@/components/ui/top-banner';
import { formatDate } from '@/lib/utils';

const sectionIds = {
  experience: 'experience',
  projects: 'featured-projects',
  skills: 'skills',
  featured: 'featured',
};

export default async function Home() {
  // 1. Fetch GitHub stats on the server
  const stars = await fetchRepoStars();
  const contributions = await fetchGitHubContributions();


  // 3. Load Projects dynamically on the server
  const { ProjectCardData } = await import('@/config/projects/ProjectCardData');
  const projectSlugs = await getMarkdownSlugs('projects');
  const projects = await Promise.all(
    projectSlugs.map(async (slug) => {
      const content = await getMarkdownContent('projects', slug);
      const staticData = ProjectCardData.find(
        (p: any) => p.projectDetailsPageSlug?.endsWith(slug) || p.links?.details?.endsWith(slug)
      );

      return {
        id: slug,
        title: staticData?.title || content?.meta.title || slug,
        subheading: staticData?.subheading || null,
        description: content?.meta.description || '',
        img: {
          src: content?.meta.image || '',
          alt: content?.meta.title || slug,
        },
        links: {
          website: content?.meta.live || '',
          github: content?.meta.github || '',
          details: `/projects/${slug}`,
        },
        technologies: staticData?.technologies || (content?.meta.technologies || []).map((name: string) => ({ name })),
        isWorking: content?.meta.status?.toLowerCase() === 'completed',
        isBuilding:
          content?.meta.status?.toLowerCase() === 'in-progress' ||
          content?.meta.status?.toLowerCase() === 'building',
        details: true,
      };
    })
  );

  // Sort projects ascendingly by their ID in ProjectCardData so that reverse() in ProjectCard renders newest first
  projects.sort((a, b) => {
    const aData = ProjectCardData.find(
      (p: any) => p.projectDetailsPageSlug?.endsWith(a.id) || p.links?.details?.endsWith(a.id)
    );
    const bData = ProjectCardData.find(
      (p: any) => p.projectDetailsPageSlug?.endsWith(b.id) || p.links?.details?.endsWith(b.id)
    );
    return (aData?.id ?? 0) - (bData?.id ?? 0);
  });

  return (
    <main className="min-h-screen">
      <TopBanner />

      <Hero />

      <section id={sectionIds.featured} className="py-8 md:py-10">
        <Featured />
      </section>

      <section id={sectionIds.experience} className="py-8 md:py-10">
        <ExperienceCard />
      </section>

      <section id={sectionIds.projects} className="py-8 md:py-10">
        <Project projects={projects} />
      </section>

      <section id={sectionIds.skills} className="py-8 md:py-10">
        <AboutMe />
      </section>

      <section id="gallery" className="py-8 md:py-10">
        <PhotoGallery />
      </section>

    </main>
  );
}
