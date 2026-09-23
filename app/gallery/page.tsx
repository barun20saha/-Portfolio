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
    <Container>
      <div className="h-8" />
      <div className="px-2">
        <div className="mb-6 space-y-4">
          <SectionHeading
            classname="text-neutral-400 dark:text-neutral-500 font-medium"
            heading="Gallery"
          />
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:px-4">
            Visual Showcase
          </h1>
        </div>
        <p className="mt-4 md:px-4 text-muted-foreground sm:text-xl">
          A collection of featured memories, events, and project screenshots.
        </p>
      </div>
      <div className="h-8" />

      <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 border-t border-l border-neutral-200 dark:border-neutral-800">
        {memories.map((image) => (
          <li
            key={image.id}
            className="border-b border-r border-neutral-200 dark:border-neutral-800"
          >
            <div className="group relative aspect-square overflow-hidden bg-muted/50">
              <Image
                src={image.img}
                alt={image.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                className={`object-cover transition-transform duration-700 group-hover:scale-105 ${image.position || ''}`}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-white font-semibold text-lg drop-shadow-md translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  {image.title}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
