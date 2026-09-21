import SectionHeading from '@/components/common/SectionHeading';
import Container from '@/components/layouts/Container';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import RepeatSeparator from '@/components/ui/repeat-separator';
import { MoveRight } from 'lucide-react';

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
  details: boolean;
}

const Project = ({ projects = [] }: { projects?: ProjectItem[] }) => {
  return (
    <Container>
      <div className="h-8 w-full" />
      <SectionHeading heading={'Projects'} />
      <ProjectCard completed={projects} limit={4} />
      <div className="flex w-full items-center justify-center pt-4 pb-8">
        <Link href="/projects">
          <Button variant="default" size="sm" className='cursor-pointer rounded-full px-6'>
            Show all Projects <MoveRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Project;
