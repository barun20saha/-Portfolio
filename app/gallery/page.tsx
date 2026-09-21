import { ProjectCardData } from '@/config/projects/ProjectCardData';
import { getMarkdownSlugs, getMarkdownContent } from '@/lib/markdown';
import Container from '@/components/layouts/Container';
import SectionHeading from '@/components/common/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import RepeatSeparator from '@/components/ui/repeat-separator';

export const metadata = {
  title: 'Gallery | Projects showcase',
  description: 'A visual gallery of project screenshots and architecture diagrams.',
};

const memories = [
  {
    id: 1,
    title: 'Hackathon Winners 2025',
    img: '/gallery/1.png',
    url: '#',
    position: 'object-top',
  },
  {
    id: 2,
    title: 'Late Night Coding',
    img: '/gallery/2.png',
    url: '#',
  },
  {
    id: 3,
    title: 'Internal Hackathon 2026',
    img: '/gallery/3.png',
    url: '#',
    position: 'object-[50%_15%]',
  },
  {
    id: 4,
    title: 'College Fest',
    img: '/gallery/4.png',
    url: '#',
    position: 'object-[50%_40%]',
  },
];

export default function GalleryPage() {
  return (
    <Container className="py-12 md:py-24">
      <div className="mb-12 flex flex-col items-center text-center">
        <SectionHeading heading="Gallery" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-5xl">
          Visual Showcase
        </h1>
        <p className="mt-4 max-w-[42rem] text-muted-foreground sm:text-xl">
          A collection of featured memories, events, and project screenshots.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {memories.map((image) => (
          <div
            key={image.id}
            className="group relative block aspect-square overflow-hidden rounded-xl border bg-muted/50 dark:border-neutral-800"
          >
            <Image
              src={image.img}
              alt={image.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className={`object-cover transition-transform duration-700 group-hover:scale-105 ${image.position || ''}`}
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center p-4 text-center">
              <span className="text-white font-semibold text-lg drop-shadow-md translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                {image.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
