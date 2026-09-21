import { useMemo } from 'react';
import React from 'react';
import Container from '@/components/layouts/Container';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectCardData } from '@/config/projects/ProjectCardData';
import { cn } from '@/lib/utils';
import { Github } from '@/lib/techIcons';

const ProjectCard = ({
  completed = ProjectCardData,
  limit,
}: {
  completed?: any[];
  limit?: number;
}) => {
  const displayedProjects = useMemo(() => {
    const arr = limit ? [...completed].slice(-limit) : [...completed];
    return arr.reverse();
  }, [completed, limit]);

  const N = displayedProjects.length;

  return (
    <Container className="relative">


      {/* Grid of projects */}
      <div className="relative grid grid-cols-1 gap-0 sm:grid-cols-2">
        {displayedProjects.map((items, index) => {
          // Desktop (2-col): show separator after every right-column card (odd index), not after last row
          const showDesktopSep = index % 2 === 1 && index < N - 1;
          // Mobile (1-col): show separator after every card except the last card
          const showMobileSep = index < N - 1;

          return (
            <React.Fragment key={items.id}>
              <div className="relative flex flex-col p-4">
                <div className="flex flex-1 flex-col">
                  {/* Card Container */}
                  <div className="group/card bg-white dark:bg-neutral-900 relative flex flex-1 flex-col gap-1 overflow-hidden rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="relative flex flex-1 flex-col gap-1">
                      {/* Card Body wrapping screenshot and info (links to detailed slug) */}
                      <Link
                        href={items.projectDetailsPageSlug ?? items.links.details}
                        className="flex flex-1 flex-col gap-1 text-left hover:no-underline"
                      >
                        {/* Project Image */}
                        <div className="h-52 w-full overflow-hidden rounded-lg relative flex items-center justify-center">
                          {items.img && items.img.src ? (
                            <Image
                              src={items.img.src}
                              alt={items.img.alt || items.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 via-green-50 to-orange-100 dark:from-emerald-900/60 dark:via-[#0a1f16] dark:to-amber-900/30 flex items-end justify-center px-4 pt-6">
                              {/* Inner Black Card Placeholder */}
                              <div className="w-full h-full bg-[#0a0a0a] rounded-t-xl shadow-2xl border border-white/10 border-b-0 relative overflow-hidden flex flex-col items-center justify-center transition-transform duration-500 group-hover/card:translate-y-[-4px]">
                                {/* Subtle inner top highlight */}
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent"></div>
                                
                                <div className="flex flex-col items-center gap-2 opacity-40">
                                  <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center">
                                    <span className="text-white/60 text-xs font-medium">UI</span>
                                  </div>
                                  <span className="text-white/40 text-[10px] font-medium tracking-widest uppercase">Placeholder</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Header with Title */}
                        <div className="mt-2.5 pt-0.5 flex items-center justify-between px-1">
                          <h2 className="group-hover/card:text-primary text-lg leading-snug font-bold capitalize">
                            {items.title}
                          </h2>
                        </div>

                        {/* Subheading */}
                        {items.subheading && (
                          <p className="text-neutral-500 dark:text-neutral-400 px-1 text-[11px] font-medium -mt-1 mb-1.5">
                            {items.subheading}
                          </p>
                        )}

                        {/* Description */}
                        <p className="text-muted-foreground line-clamp-2 px-1 text-sm mb-1">
                          {items.description}
                        </p>

                        <div className="flex flex-wrap gap-2 px-1 mt-2">
                          {items.technologies.slice(0, 4).map((tech: any, techIdx: number) => (
                            <span
                              key={techIdx}
                              className="bg-background text-muted-foreground flex items-center gap-1.5 rounded-sm border px-2 py-0.5 text-xs shadow-xs select-none hover:shadow-none"
                            >
                              {tech.icon && <span className="w-3.5 h-3.5 flex items-center justify-center">{tech.icon}</span>}
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </Link>

                      {/* Footer Live and GitHub Links */}
                      <div className="relative z-20 mt-4 flex items-center gap-4 px-1 pt-2">
                        {items.links.website && (
                          <a
                            href={items.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm font-medium transition-colors"
                          >
                            Live Demo
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="size-3.5" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                          </a>
                        )}
                        {items.links.github && (
                          <a
                            href={items.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm font-medium transition-colors"
                          >
                            GitHub
                            <Github />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Separators removed as per user request */}
            </React.Fragment>
          );
        })}
      </div>
    </Container>
  );
};

export default ProjectCard;
