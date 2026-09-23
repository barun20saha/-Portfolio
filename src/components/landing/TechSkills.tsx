import Container from '../layouts/Container';
import SectionHeading from '../common/SectionHeading';
import {
  Python,
  PostgreSQL,
  LLM,
  MongoDB,
  Git,
} from '@/lib/techIcons';
import RepeatSeparator from '../ui/repeat-separator';
import { BrainCircuit, Network, ScanEye, Database, BarChart, Lightbulb, Globe } from 'lucide-react';
import TensorFlowIcon from '@/components/icons/tech/TensorFlow';
import Java from '@/components/icons/tech/Java';
import CLang from '@/components/icons/tech/CLang';
import Cpp from '@/components/icons/tech/Cpp';

const TechSkills = () => {
  return (
    <>
      <RepeatSeparator />
      <SectionHeading heading={'Stack'} />
      <Container>
        <div className="mx-auto w-full max-w-5xl">
          {StackCategories.map((category, index) => {
            return (
              <div
                key={category.id}
                className={`flex flex-col sm:flex-row`}
              >
                {/* Category Column without border */}
                <div className="flex w-full shrink-0 items-center gap-3.5 px-5 py-4 sm:w-64 sm:py-6">
                  <span className="font-mono text-sm font-medium text-neutral-400 dark:text-neutral-500">
                    {category.id}
                  </span>
                  <span className="text-sm font-medium text-neutral-600 md:text-base dark:text-neutral-300">
                    {category.category}
                  </span>
                </div>

                {/* Badges Column */}
                <div className="flex grow flex-wrap items-center gap-2 px-5 py-4 sm:gap-2.5 sm:px-6 sm:py-5">
                  {category.skills.map((skill) => (
                    <a
                      key={skill.title}
                      href={skill.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex cursor-pointer items-center gap-2 rounded-full border border-neutral-200/90 bg-neutral-50/90 px-3 py-1.5 font-mono text-xs text-neutral-700 shadow-2xs  select-none hover:border-neutral-300 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/80"
                    >
                      {/* Monochrome icon with color on hover */}
                      <span className="flex size-4 shrink-0 items-center justify-center opacity-70 grayscale transition-[opacity,filter] duration-200 group-hover:opacity-100 group-hover:grayscale-0 [&_svg]:size-3.5">
                        {skill.icon}
                      </span>
                      <span className="font-medium tracking-tight whitespace-nowrap">
                        {skill.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default TechSkills;

const StackCategories = [
  {
    id: '01',
    category: 'Languages',
    skills: [
      {
        title: 'Python',
        icon: <Python />,
        href: 'https://www.python.org/',
      },
      {
        title: 'Java',
        icon: <Java />,
        href: '#',
      },
      {
        title: 'C',
        icon: <CLang />,
        href: '#',
      },
      {
        title: 'C++',
        icon: <Cpp />,
        href: '#',
      },
      {
        title: 'SQL',
        icon: <PostgreSQL />,
        href: '#',
      },
    ],
  },
  {
    id: '02',
    category: 'Machine Learning & AI',
    skills: [
      {
        title: 'Machine Learning',
        icon: <BrainCircuit size={14} strokeWidth={2} />,
        href: '#',
      },
      {
        title: 'Deep Learning',
        icon: <Network size={14} strokeWidth={2} />,
        href: '#',
      },
      {
        title: 'Computer Vision',
        icon: <ScanEye size={14} strokeWidth={2} />,
        href: '#',
      },
      {
        title: 'Data Science',
        icon: <Database size={14} strokeWidth={2} />,
        href: '#',
      },
    ],
  },
  {
    id: '03',
    category: 'Frameworks & Tools',
    skills: [
      {
        title: 'PyTorch',
        icon: <Python />,
        href: 'https://pytorch.org/',
      },
      {
        title: 'TensorFlow',
        icon: <TensorFlowIcon />,
        href: 'https://www.tensorflow.org/',
      },
      {
        title: 'MongoDB',
        icon: <MongoDB />,
        href: 'https://www.mongodb.com/',
      },
      {
        title: 'Git/GitHub',
        icon: <Git />,
        href: 'https://github.com/',
      },
    ],
  },
  {
    id: '04',
    category: 'Services Offered',
    skills: [
      { title: 'Machine Learning Solutions', icon: <BrainCircuit size={14} strokeWidth={2} />, href: '#' },
      { title: 'Computer Vision', icon: <ScanEye size={14} strokeWidth={2} />, href: '#' },
      { title: 'AI Prototyping', icon: <Lightbulb size={14} strokeWidth={2} />, href: '#' },
      { title: 'Data Analysis', icon: <BarChart size={14} strokeWidth={2} />, href: '#' },
      { title: 'Web Application Development', icon: <Globe size={14} strokeWidth={2} />, href: '#' },
      { title: 'Database Development', icon: <Database size={14} strokeWidth={2} />, href: '#' },
    ],
  },
];
