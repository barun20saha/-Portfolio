import Container from '../layouts/Container';
import SectionHeading from '../common/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import { Camera } from 'lucide-react';

const memories = [
  {
    id: 1,
    title: 'Hackathon Winners 2025',
    img: '/gallery/1.png',
    position: 'object-top',
  },
  {
    id: 2,
    title: 'Late Night Coding',
    img: '/gallery/2.png',
  },
  {
    id: 3,
    title: 'Internal Hackathon 2026',
    img: '/gallery/3.png',
    position: 'object-[50%_15%]',
  },
  {
    id: 4,
    title: 'College Fest',
    img: '/gallery/4.png',
    position: 'object-[50%_40%]',
  },
];

const PhotoGallery = () => {
  return (
    <Container>
      <SectionHeading heading="Gallery Moments" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 px-4 md:px-5">
        {memories.map((memory) => (
          <div
            key={memory.id}
            className="group relative block aspect-video overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900"
          >
            <Image
              src={memory.img}
              alt={memory.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover transition-transform duration-700 group-hover:scale-105 ${memory.position || ''}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-start p-6">
              <span className="text-white font-medium drop-shadow-md text-lg translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                {memory.title}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-5 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
        >
          View Full Gallery
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </Container>
  );
};

export default PhotoGallery;
