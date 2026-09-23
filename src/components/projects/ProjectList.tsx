'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/layouts/Container';
import { Separator } from '@/components/ui/separator';
import ProjectCard from '@/components/projects/ProjectCard';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '../common/SectionHeading';
import RepeatSeparator from '../ui/repeat-separator';

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  img: {
    src: string;
    alt: string;
  };
  links: {
    website: string;
    github: string;
    details: string;
  };
  technologies: Array<{ name: string }>;
  isWorking: boolean;
  isBuilding: boolean;
  isBulding?: boolean; // Support historical typo safely
  details: boolean;
}

const Projects = ({ projects = [] }: { projects?: ProjectItem[] }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((tech) => tech.name.toLowerCase().includes(query))
    );
  });

  return (
    <Container>
      <div className="h-8" />

      <div className="px-2">
        <div className="mb-6 space-y-4">
          <SectionHeading
            classname="text-neutral-400 dark:text-neutral-500 font-medium"
            heading="Projects"
          />
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:px-4">
            Showcase of my work
          </h1>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-4 md:px-4">
          <div className="relative w-full sm:w-64">
            <svg
              className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10.278 11.514a5.824 5.824 0 1 1 1.235-1.235l3.209 3.208A.875.875 0 0 1 14.111 15a.875.875 0 0 1-.624-.278l-3.209-3.208Zm.623-4.69a4.077 4.077 0 1 1-8.154 0 4.077 4.077 0 0 1 8.154 0Z"
                fill="currentColor"
              />
            </svg>
            <input
              type="text"
              placeholder="Search Projects…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-9 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="h-8" />
      <div>
        <ProjectCard completed={filteredProjects} />
      </div>
    </Container>
  );
};

export default Projects;
